function loadQuestions() {
  let selectedQuestionTypes = [];
  let questionTypes = document.getElementsByName('questionType');
  for (i = 0; i < questionTypes.length; i++) {
    if (questionTypes[i].checked) {
      selectedQuestionTypes.push(questionTypes[i].value);
    }
  }
  console.log(selectedQuestionTypes);
}
