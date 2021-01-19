var Question = {
    question: 'Sample Text',
    answers: ['Correct', 'Wrong1', 'Wrong2', 'Wrong3']
};

var questionList = [Question];

function createQuestion(input) {
    var main = document.getElementById("Main");
    var shuffledAnswers = shuffle(input.answers);
    var questionHeader = main.appendChild(document.createElement("h3"));
    questionHeader.classList.add("text-center");
    questionHeader.textContent = input.question;
    var questionAnswers = main.appendChild(document.createElement("ul"));
    questionAnswers.classList.add("text-center");
    for (var i = 0; i < 4; i++) {
        var currentAnswer = questionAnswers.appendChild(document.createElement("li"));
        var questionButton = currentAnswer.appendChild(document.createElement("button"));
        questionButton.setAttribute("data", i);
        questionButton.textContent = shuffledAnswers[i];
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