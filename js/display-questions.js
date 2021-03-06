let allQuestions = [{
    "type": "gross",
    "list": gross
  },
  {
    "type": "weird",
    "list": weird
  },
  {
    "type": "safe",
    "list": safe
  },
  {
    "type": "naughty",
    "list": naughty
  },
];

var cardsRemaining = allQuestions.length;

function getQuestion(questionType) {
  for (i = 0; i < allQuestions.length; i++) {
    if (allQuestions[i].type == questionType) {
      displayQuestion(allQuestions[i]);
      break;
    }
  }
}

function displayQuestion(questionsList) {

  let questions = questionsList.list;

  if (questions.length > 0) {
    let random = Math.floor(Math.random() * questions.length);

    document.getElementById("question").innerHTML = "Would you rather " + questions[random] + "?";

    // Update array to remove the question that has been displayed
    if (random > -1) {
      questions.splice(random, 1);
    }

    if (!questions.length) {
      document.getElementById(questionsList.type + "-card").classList.add("disable-card");
      cardsRemaining = cardsRemaining - 1;
      if (!cardsRemaining) {
        document.getElementById("reload-game").style.display = "block";
      }

    }
  }
}
