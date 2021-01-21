var Question1 = {
    question: 'Sample Text',
    answers: ['Correct', 'Wrong1', 'Wrong2', 'Wrong3']
};
var Question2 = {
    question: 'Sampler Text',
    answers: ['Correct', 'Wrong1', 'Wrong2', 'Wrong3']
};
var Question3 = {
    question: 'Samplest Text',
    answers: ['Correct', 'Wrong1', 'Wrong2', 'Wrong3']
};
var Question4 = {
    question: 'Gary',
    answers: ['Correct', 'Wrong1', 'Wrong2', 'Wrong3']
};

var main = document.getElementById("Main");
var questionArea = document.getElementById("question")
var score = 0;
var questionList = [Question1, Question2, Question3, Question4];
var questionOrder = [0, 1, 2, 3];
var currentQuestion = 0;
var answerShow = false;
var timer = 10000

function createQuestion(input) {
    var correctAnswer = input.answers[0];
    var shuffledAnswers = shuffle(input.answers);
    var questionHeader = questionArea.appendChild(document.createElement("h3"));
    questionHeader.id = "header";
    questionHeader.classList.add("text-center");
    questionHeader.textContent = input.question;
    var questionAnswers = questionArea.appendChild(document.createElement("ul"));
    questionAnswers.id = "qAnswers";
    questionAnswers.classList.add("text-center");
    for (var i = 0; i < 4; i++) {
        var currentAnswer = questionAnswers.appendChild(document.createElement("li"));
        var questionButton = currentAnswer.appendChild(document.createElement("button"));
        questionButton.id = "button";
        questionButton.textContent = shuffledAnswers[i];
        if (shuffledAnswers[i] === correctAnswer) {
            questionButton.setAttribute("answer", 1);
        } else {
            questionButton.setAttribute("answer", 0);
        }
    }

}

function shuffle(input) {
    var currentIndex = input.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = input[currentIndex];
        input[currentIndex] = input[randomIndex];
        input[randomIndex] = temporaryValue;
    }
    return input;
    // Knuth Shuffle, source found: https://github.com/Daplie/knuth-shuffle
}





createQuestion(questionList[questionOrder[currentQuestion]]);
shuffle(questionOrder);
function nextQuestion() {
    createQuestion(questionList[questionOrder[currentQuestion]]);
}

document.getElementById("button").addEventListener("click", function () {
    console.log("help")
    document.getElementById('header').remove();
    document.getElementById('qAnswers').remove();
    if (answerShow) {
        main.removeChild(document.getElementById('result'));
    }
    if (this.getAttribute("answer") == 1) {
        main.appendChild(document.createElement("hr"));
        var result = main.appendChild(document.createElement("p"));
        result.id = "result"
        result.textContent = "Correct!";
        score++;
    } else {
        main.appendChild(document.createElement("hr"));
        var result = main.appendChild(document.createElement("p"));
        result.id = "result";
        result.textContent = "Wrong!";
        // Something about lowering the timer
    }
    currentQuestion++;
    answerShow = true;
    nextQuestion();
});