// Global değişkenler
let questionsData = null;

let currentQuiz = null;
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;
let userAnswers = []; // Kullanıcının verdiği cevapları sakla
let allUserAnswers = []; // Tüm cevapları sakla (navigasyon için)

// JSON dosyasından soruları yükle
async function loadQuestions() {
    try {
        const response = await fetch('questions.json');
        questionsData = await response.json();
        console.log('Sorular başarıyla yüklendi:', questionsData);
    } catch (error) {
        console.error('Sorular yüklenirken hata oluştu:', error);
        alert('Sorular yüklenirken bir hata oluştu. Lütfen sayfayı yenileyin.');
    }
}

// Sayfa yüklendiğinde soruları yükle
document.addEventListener('DOMContentLoaded', loadQuestions);

function startQuiz(category) {
    // Sorular yüklenmemişse bekle
    if (!questionsData) {
        alert('Sorular henüz yüklenmedi. Lütfen bekleyin...');
        return;
    }

    // JSON'dan soruları al ve eski formata dönüştür
    const categoryData = questionsData.categories[category];
    if (!categoryData) {
        alert('Bu kategori bulunamadı!');
        return;
    }

    currentQuiz = categoryData.questions.map(q => ({
        question: q.question,
        options: q.options,
        correct: q.correctAnswer
    }));

    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
    userAnswers = []; // Cevapları sıfırla
    allUserAnswers = new Array(currentQuiz.length).fill(null); // Tüm cevapları sıfırla

    document.getElementById('welcome-screen').classList.remove('active');
    document.getElementById('quiz-screen').classList.add('active');

    const title = categoryData.title + ' Testi';
    document.getElementById('quiz-title').textContent = title;

    showQuestion();
}

function showQuestion() {
    const question = currentQuiz[currentQuestionIndex];

    document.getElementById('question-counter').textContent = `${currentQuestionIndex + 1}/10`;
    // \n karakterlerini <br> etiketine dönüştür
    const formattedQuestion = question.question.replace(/\\n/g, '<br>');
    document.getElementById('question-text').innerHTML = formattedQuestion;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option;
        optionDiv.onclick = () => selectOption(index, optionDiv);
        optionsContainer.appendChild(optionDiv);
    });

    // Önceki cevabı göster
    selectedAnswer = allUserAnswers[currentQuestionIndex];
    if (selectedAnswer !== null) {
        const options = document.querySelectorAll('.option');
        options[selectedAnswer].classList.add('selected');
        document.getElementById('next-btn').disabled = false;
    } else {
        document.getElementById('next-btn').disabled = true;
    }

    // Buton durumlarını güncelle
    updateNavigationButtons();
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const finishBtn = document.getElementById('finish-btn');

    // Geri butonu
    prevBtn.disabled = currentQuestionIndex === 0;

    // Son soruda "Testi Bitir" butonunu göster
    if (currentQuestionIndex === currentQuiz.length - 1) {
        nextBtn.style.display = 'none';
        finishBtn.style.display = 'inline-block';
    } else {
        nextBtn.style.display = 'inline-block';
        finishBtn.style.display = 'none';
    }
}

function selectOption(index, element) {
    // Önceki seçimi temizle
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });

    // Yeni seçimi işaretle
    element.classList.add('selected');
    selectedAnswer = index;

    // Cevabı kaydet
    allUserAnswers[currentQuestionIndex] = index;

    document.getElementById('next-btn').disabled = false;

    // Son soruda "Testi Bitir" butonunu aktif et
    if (currentQuestionIndex === currentQuiz.length - 1) {
        document.getElementById('finish-btn').disabled = false;
    }
}

function nextQuestion() {
    if (selectedAnswer === null) return;

    // Sonraki soruya geç
    currentQuestionIndex++;
    showQuestion();
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

function finishQuiz() {
    // Tüm cevapları kontrol et
    score = 0;
    userAnswers = [];

    allUserAnswers.forEach((answer, index) => {
        if (answer !== null) {
            const question = currentQuiz[index];
            const isCorrect = answer === question.correct;

            if (isCorrect) {
                score++;
            }

            userAnswers.push({
                questionIndex: index,
                userAnswer: answer,
                correctAnswer: question.correct,
                isCorrect: isCorrect,
                questionText: question.question,
                userAnswerText: question.options[answer],
                correctAnswerText: question.options[question.correct]
            });
        }
    });

    showResults();
}

function showResults() {
    document.getElementById('quiz-screen').classList.remove('active');
    document.getElementById('result-screen').classList.add('active');

    const percentage = Math.round((score / currentQuiz.length) * 100);

    document.getElementById('score-text').textContent = `${score}/${currentQuiz.length} doğru cevap`;
    document.getElementById('percentage-text').textContent = `%${percentage} başarı oranı`;

    // Detaylı sonuçları göster
    showDetailedResults();
}

function showDetailedResults() {
    const resultsList = document.getElementById('results-list');
    resultsList.innerHTML = '';

    userAnswers.forEach((answer, index) => {
        const resultItem = document.createElement('div');
        resultItem.className = `result-item ${answer.isCorrect ? 'correct-result' : 'wrong-result'}`;

        // Soru metnindeki \n karakterlerini <br> etiketine dönüştür
        const formattedQuestionText = answer.questionText.replace(/\\n/g, '<br>');
        
        resultItem.innerHTML = `
            <div class="question-number">Soru ${index + 1}</div>
            <div class="question-text">${formattedQuestionText}</div>
            <div class="answer-comparison">
                <div class="user-answer">
                    <strong>Senin Cevabın:</strong> ${answer.userAnswerText}
                    <span class="result-icon">${answer.isCorrect ? '✓' : '✗'}</span>
                </div>
                ${!answer.isCorrect ? `
                    <div class="correct-answer">
                        <strong>Doğru Cevap:</strong> ${answer.correctAnswerText}
                    </div>
                ` : ''}
            </div>
        `;

        resultsList.appendChild(resultItem);
    });
}

function goHome() {
    document.getElementById('result-screen').classList.remove('active');
    document.getElementById('welcome-screen').classList.add('active');

    // Değişkenleri sıfırla
    currentQuiz = null;
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
    userAnswers = [];
    allUserAnswers = [];
}