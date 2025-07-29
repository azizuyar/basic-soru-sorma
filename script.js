// Soru verileri
const questions = {
    oop: [
        {
            question: "OOP'nin temel prensiplerinden biri olan 'Encapsulation' ne anlama gelir?",
            options: [
                "Verilerin ve metodların bir arada tutulması",
                "Bir sınıfın başka bir sınıftan özellik alması",
                "Aynı metodun farklı şekillerde çalışması",
                "Soyut sınıfların oluşturulması"
            ],
            correct: 0
        },
        {
            question: "Inheritance (Kalıtım) kavramı neyi ifade eder?",
            options: [
                "Verilerin gizlenmesi",
                "Bir sınıfın başka bir sınıftan özellik ve metodları miras alması",
                "Metodların aşırı yüklenmesi",
                "Nesne oluşturma işlemi"
            ],
            correct: 1
        },
        {
            question: "Polymorphism (Çok biçimlilik) ne demektir?",
            options: [
                "Birden fazla constructor tanımlama",
                "Aynı isimli metodların farklı parametrelerle tanımlanması",
                "Aynı arayüzün farklı sınıflarda farklı şekillerde uygulanması",
                "Sınıfların birbirinden türetilmesi"
            ],
            correct: 2
        },
        {
            question: "Abstract class (Soyut sınıf) nedir?",
            options: [
                "Sadece static metodları olan sınıf",
                "Nesne oluşturulamayan, sadece kalıtım için kullanılan sınıf",
                "Private metodları olan sınıf",
                "Interface ile aynı anlama gelen sınıf"
            ],
            correct: 1
        },
        {
            question: "Constructor (Yapıcı metod) ne işe yarar?",
            options: [
                "Nesneyi yok etmek için kullanılır",
                "Nesne oluşturulurken ilk değerleri atamak için kullanılır",
                "Sadece static metodları çağırmak için kullanılır",
                "Sınıfı kopyalamak için kullanılır"
            ],
            correct: 1
        },
        {
            question: "Interface ve Abstract Class arasındaki temel fark nedir?",
            options: [
                "Interface'de sadece abstract metodlar bulunur",
                "Abstract class'ta constructor olamaz",
                "Interface multiple inheritance destekler",
                "Hiçbir fark yoktur"
            ],
            correct: 2
        },
        {
            question: "Method Overloading (Metod Aşırı Yükleme) nedir?",
            options: [
                "Aynı isimli metodların farklı parametrelerle tanımlanması",
                "Bir metodun başka bir sınıfta yeniden tanımlanması",
                "Metodun private yapılması",
                "Metodun static yapılması"
            ],
            correct: 0
        },
        {
            question: "Access Modifier'lar (Erişim Belirleyiciler) ne işe yarar?",
            options: [
                "Metodların hızını belirler",
                "Sınıf ve üyelerinin erişim seviyesini kontrol eder",
                "Bellek kullanımını optimize eder",
                "Sadece constructor'larda kullanılır"
            ],
            correct: 1
        },
        {
            question: "Composition (Bileşim) ne demektir?",
            options: [
                "Sınıfların birbirinden türetilmesi",
                "Bir sınıfın başka sınıfların nesnelerini içermesi",
                "Metodların aşırı yüklenmesi",
                "Interface'lerin uygulanması"
            ],
            correct: 1
        },
        {
            question: "Static metod ve instance metod arasındaki fark nedir?",
            options: [
                "Static metod nesne oluşturmadan çağrılabilir",
                "Instance metod daha hızlı çalışır",
                "Static metod sadece constructor'da kullanılır",
                "Hiçbir fark yoktur"
            ],
            correct: 0
        }
    ],
    sql: [
        {
            question: "SQL'de hangi komut veri seçmek için kullanılır?",
            options: ["GET", "SELECT", "CHOOSE", "PICK"],
            correct: 1
        },
        {
            question: "Bir tabloya yeni kayıt eklemek için hangi komut kullanılır?",
            options: ["ADD", "INSERT", "CREATE", "NEW"],
            correct: 1
        },
        {
            question: "WHERE komutu ne işe yarar?",
            options: [
                "Tabloyu sıralar",
                "Koşul belirtir ve filtreleme yapar",
                "Yeni tablo oluşturur",
                "Verileri gruplar"
            ],
            correct: 1
        },
        {
            question: "JOIN işlemi ne için kullanılır?",
            options: [
                "Tabloları silmek için",
                "İki veya daha fazla tabloyu birleştirmek için",
                "Verileri sıralamak için",
                "Yedek almak için"
            ],
            correct: 1
        },
        {
            question: "PRIMARY KEY ne anlama gelir?",
            options: [
                "En önemli veri",
                "Tablodaki her kaydı benzersiz şekilde tanımlayan anahtar",
                "Şifrelenmiş veri",
                "İlk eklenen veri"
            ],
            correct: 1
        },
        {
            question: "GROUP BY komutu ne işe yarar?",
            options: [
                "Verileri gruplar ve toplama fonksiyonları kullanmaya olanak sağlar",
                "Tabloyu sıralar",
                "Yeni grup oluşturur",
                "Verileri siler"
            ],
            correct: 0
        },
        {
            question: "UPDATE komutu ne için kullanılır?",
            options: [
                "Yeni kayıt eklemek",
                "Mevcut kayıtları güncellemek",
                "Tablo oluşturmak",
                "Verileri sıralamak"
            ],
            correct: 1
        },
        {
            question: "DELETE ve DROP arasındaki fark nedir?",
            options: [
                "Hiçbir fark yoktur",
                "DELETE kayıtları siler, DROP tabloyu siler",
                "DROP daha hızlıdır",
                "DELETE sadece bir kayıt siler"
            ],
            correct: 1
        },
        {
            question: "FOREIGN KEY ne işe yarar?",
            options: [
                "Tablolar arası ilişki kurar",
                "Şifreleme yapar",
                "Verileri sıralar",
                "Yedek oluşturur"
            ],
            correct: 0
        },
        {
            question: "ORDER BY komutu ne için kullanılır?",
            options: [
                "Verileri gruplamak",
                "Verileri sıralamak",
                "Yeni sıra oluşturmak",
                "Tabloyu silmek"
            ],
            correct: 1
        }
    ]
};

let currentQuiz = null;
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;
let userAnswers = []; // Kullanıcının verdiği cevapları sakla
let allUserAnswers = []; // Tüm cevapları sakla (navigasyon için)

function startQuiz(category) {
    currentQuiz = questions[category];
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
    userAnswers = []; // Cevapları sıfırla
    allUserAnswers = new Array(currentQuiz.length).fill(null); // Tüm cevapları sıfırla

    document.getElementById('welcome-screen').classList.remove('active');
    document.getElementById('quiz-screen').classList.add('active');

    const title = category === 'oop' ? 'OOP Testi' : 'SQL Testi';
    document.getElementById('quiz-title').textContent = title;

    showQuestion();
}

function showQuestion() {
    const question = currentQuiz[currentQuestionIndex];

    document.getElementById('question-counter').textContent = `${currentQuestionIndex + 1}/10`;
    document.getElementById('question-text').textContent = question.question;

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

        resultItem.innerHTML = `
            <div class="question-number">Soru ${index + 1}</div>
            <div class="question-text">${answer.questionText}</div>
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