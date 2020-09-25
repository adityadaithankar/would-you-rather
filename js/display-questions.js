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

let naughtyQuestions = ["sleep with your best friend's lover or your lover's best friend"];

let qList = [{
    "type": "gross",
    "list": grossQuestions
  },
  {
    "type": "weird",
    "list": weirdQuestions
  },
  {
    "type": "naughty",
    "list": naughtyQuestions
  },
];

function selectQList(questionType) {
  for (i = 0; i < qList.length; i++) {
    if (qList[i].type == questionType) {
      return qList[i];
    }
  }
}

function selectQuestionType(questionType) {
  let questionsList = selectQList(questionType);
  displayQuestion(questionsList);
}

function displayQuestion(queList) {

  let questions = queList.list;

  console.log(questions);
  if (questions.length > 0) {
    let random = Math.floor(Math.random() * questions.length);
    let qt = "Would you rather " + questions[random] + "?";
    document.getElementById("question").innerHTML = qt;

    console.log(questions[random]);

    // Update array to remove the question that has been displayed
    if (random > -1) {
      questions.splice(random, 1);
    }

    console.log(questions);
  } else { // If all questions from the array have been displayed, show end of game message
    // document.getElementById("question").innerHTML = "END OF GAME. Reload page";
    // document.getElementById("weird-card").classList.remove("question-card");
    let cardId = queList.type + "-card";
    document.getElementById(cardId).classList.add("disable-card");
    // Function to reload page -> location.reload();
  }
}
