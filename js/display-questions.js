let grossQuestions = [
  "Hello",
  "How",
  "You",
  "Yes",
  "Me"
];

let weirdQuestions = [
  "Ho",
  "Ka"
];

function selectQuestionType(questionType) {
  if (questionType == "GROSS") {
    displayQuestion(grossQuestions);
  } else {
    displayQuestion(weirdQuestions);
  }
}

function displayQuestion(questions) {
  console.log(questions);
  if (questions.length > 0) {
    var random = Math.floor(Math.random() * questions.length);
    document.getElementById("question").innerHTML = questions[random];

    console.log(questions[random]);

    // Update array to remove the question that has been displayed
    if (random > -1) {
      questions.splice(random, 1);
    }

    console.log(questions);
  } else { // If all questions from the array have been displayed, show end of game message
    document.getElementById("question").innerHTML = "END OF GAME. Reload page";
    // document.getElementById("weird-card").classList.remove("question-card");
    document.getElementById("weird-card").classList.add("disable-card");
    // Function to reload page -> location.reload();
  }
}
