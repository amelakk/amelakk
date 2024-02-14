const questions = [
    { question: "Kiedy się poznaliśmy?", answers: ["11 listopada", "12 listopada", "10 listopada"], correct: 0 },
    { question: "Jaki był 1 film, który razem oglądaliśmy?", answers: ["Film Vegi", "Omen", "Straszny Film"], correct: 2 },
    { question: "Jaki był nasz pierwszy wspólny posiłek?", answers: ["Tosty", "McDonald", "Pizza"], correct: 0 },
    { question: "Dokąd była nasza pierwsza wspólna podróż autem?", answers: ["Jabłnoica", "Górki", "Rzeszów"], correct: 1 },
    { question: "Jaka była pierwsza bajka, którą razem oglądaliśmy?", answers: ["Coco", "Hotel Transylwania", "Shrek"], correct: 1 },
    { question: "W jaką grę pierwszy raz graliśmy razem?", answers: ["Realm Royale", "Fallguys", "Paladins"], correct: 1 },
    { question: "Na jakim koncercie pierwszy raz byliśmy razem?", answers: ["Malik", "Kękę", "Smolasty"], correct: 1 },
    
];

let currentQuestion = 0;
let score = 0;

function nextQuestion(answerIndex) {
    if (currentQuestion > 0) {
        if (answerIndex === questions[currentQuestion - 1].correct) {
            score++;
        }
    }
    if (currentQuestion >= questions.length) {
        document.getElementById('questionContainer').innerHTML = `Twój wynik to: ${score}/${questions.length}. Mam nadzieje ze sie fajnie bawiles :)`;
        document.getElementById('answersContainer').innerHTML = '';
        return;
    }
    displayQuestion(currentQuestion);
    currentQuestion++;
}

function displayQuestion(index) {
    const question = questions[index];
    document.getElementById('question').innerText = question.question;
    let buttonsHtml = '';
    question.answers.forEach((answer, i) => {
        buttonsHtml += `<button onclick="nextQuestion(${i})">${answer}</button>`;
    });
    document.getElementById('answersContainer').innerHTML = buttonsHtml;
}

window.onload = function() {
    displayQuestion(0);
};


