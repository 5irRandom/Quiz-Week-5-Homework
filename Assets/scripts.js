var Question = {
    question: 'Sample Text',
    answers: ['Correct', 'Wrong1', 'Wrong2', 'Wrong3']
};

var main = document.getElementById("Main");
var score = 0;
var questionList = [Question];

function createQuestion(input) {
    var correctAnswer = input.answers[0];
    var shuffledAnswers = shuffle(input.answers);
    var questionHeader = main.appendChild(document.createElement("h3"));
    questionHeader.classList.add("text-center");
    questionHeader.textContent = input.question;
    var questionAnswers = main.appendChild(document.createElement("ul"));
    questionAnswers.classList.add("text-center");
    for (var i = 0; i < 4; i++) {
        var currentAnswer = questionAnswers.appendChild(document.createElement("li"));
        var questionButton = currentAnswer.appendChild(document.createElement("button"));
        questionButton.classList.add("button");
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

createQuestion(questionList[0]);



$(".button").on("click", function() {
    if (this.getAttribute("answer") == 1) {
        main.appendChild(document.createElement("hr"));
        var result = main.appendChild(document.createElement("p"));
        result.textContent = "Correct!";
        score++;
    } else {
        main.appendChild(document.createElement("hr"));
        var result = main.appendChild(document.createElement("p"));
        result.textContent = "Wrong!";
        // Something about lowering the timer
        // something for the commit because I think it's broken
    }
});
