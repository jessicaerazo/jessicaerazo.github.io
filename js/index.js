let currentQuestion = 0;
let score = 0;

function initalizeQuizApp() {
  generateStartSection();
  generateQAndASection();
  handleStartButton();
  handleCheckIfRadioSelected();
  handleSubmitButton();
  handleNextQuestionButton();
  restartQuiz();
}

$(initalizeQuizApp);

function handleStartButton() {
  $('.js-start-button').on('click', function () {
    $('#start-section').hide();
    $('#qAndA-section').show();
    $('.footer').show();
    renderScoreCount();
    renderQandA();
    handleCheckIfRadioSelected();
    renderCurrentQuestionCount();
  });
}

function generateStartSection() {
  const startDivElement = document.getElementById('start-section');

  startDivElement.innerHTML = `
    <header role="banner">
      <h1>${content.bannerTxt}</h1>
    </header>
    <section role="region">
      <p>Quiz | ${numOfQuestions} questions</p>
      <p>Section 1, 2, 3, 4, 5, 6, 7 & 8</p>
      <p>
        ${content.purposeOfTestTxt}
      </p>
      <button type="submit" class="js-start-button start-btn">
        Start Quiz
      </button>
    </section>
    `;

  return startDivElement;
}

function generateQAndASection() {
  const qAndADivElement = document.getElementById('main');

  qAndADivElement.innerHTML = `
    <div id="qAndA-section" class="hide">
        <div id="feedback-section" class=""></div>
        <h2>Question <span class="js-current-question-num">1</span>:</h2>
        <form method="" action="">
          <fieldset>
            <legend id="question-section"></legend>
            <div id="answers-section"></div>
          </fieldset>
          <div class="footer" class="hide">
            <div class="row">
              <div class="col">
                <p>
                  Question <span class="js-current-question-num">1</span>/<span
                    >${numOfQuestions}</span
                  >
                </p>
                <p class="score">
                  Score
                  <span class="js-current-score-num current-score-num">0</span
                  >/${numOfQuestions}
                </p>
              </div>
              <div class="col">
                <button
                  type="submit"
                  class="js-check-answer-btn check-answer-btn-disabled"
                  disabled
                >
                  Check Answer
                </button>
                <div class="js-next-question next-question"></div>
              </div>
            </div>
          </div>
        </form>
  </div>
  <div id="js-results-section" class="results-section"></div>
  `;
}

function getQuestion() {
  return `${allSectionQuestions[currentQuestion].text}`;
}

function getAnswers() {
  let answerString = '';
  allSectionQuestions[currentQuestion].choices.forEach(function (
    choice,
    index
  ) {
    answerString += `<label for="answer-${index}"><input type="radio" name="answer" value=${index} id="answer-${index}" required/>${choice.text}</label>`;
  });
  return answerString;
}

function renderCurrentQuestionCount() {
  return $('.js-current-question-num').html(currentQuestion + 1);
}

function renderQandA() {
  $('#question-section').html(getQuestion());
  $('#answers-section').html(getAnswers());
}

function renderResults() {
  $('#js-results-section').html(
    `<h2>Results</h2><h3>You got ${score} correct out of ${numOfQuestions}</h3><button type="submit" class="js-restart-btn restart-btn">Retry Quiz</button>`
  );
}

function restartQuiz() {
  $('#js-results-section').on('click', '.js-restart-btn', function () {
    score = 0;
    currentQuestion = 0;
    $('#start-section').show();
    $('#js-results-section').hide();
  });
}

function evaluateAnswer(answerIndex) {
  return allSectionQuestions[currentQuestion].choices[answerIndex].answer;
}

function renderScoreCount() {
  return $('.js-current-score-num').html(score);
}

function renderFeedback(answerIndex) {
  let feedbackText = '';
  let correctAnswerText = '';

  allSectionQuestions[currentQuestion].choices.forEach(function (
    choice,
    index
  ) {
    if (choice.answer) {
      correctAnswerText += `${choice.text}`;
    }
  });

  const isCorrect = evaluateAnswer(answerIndex);
  if (isCorrect) {
    score++;
    feedbackText =
      '<h2><img src="/img/checkmark.svg" alt="you got a correct icon" />Good Job! You got it correct.</h2>';
    renderScoreCount();
    $('#feedback-section')
      .html(feedbackText)
      .removeClass('incorrect-feedback')
      .addClass('correct-feedback');
  } else {
    feedbackText = `<h2><img src=\"/img/warning.svg\" alt=\"you got a incorrect wrong icon\" />Incorrect. <span>The right answer is: ${correctAnswerText}</span> </h2>`;
    $('#feedback-section')
      .html(feedbackText)
      .removeClass('correct-feedback')
      .addClass('incorrect-feedback');
  }
}

function renderNextQuestionButton() {
  return $('.js-next-question').html(
    '<button class="js-next-btn next-btn">Next</button>'
  );
}

function disableCheckedValues(answerIndex) {
  $('input[type="radio"]:not(:checked)').prop('disabled', true);
  $('input[type="radio"]:not(:checked)').parent().addClass('disabled');
}

function handleCheckIfRadioSelected() {
  $('input[type="radio"]').on('click', function () {
    $('.js-check-answer-btn').prop('disabled', false);
    $('.js-check-answer-btn')
      .removeClass('check-answer-btn-disabled')
      .addClass('check-answer-btn');
  });
}

function handleSubmitButton() {
  $('form').on('submit', function (event) {
    event.preventDefault();
    const answerIndex = $('input[type=radio]:checked').val();
    renderFeedback(answerIndex);
    $('.js-check-answer-btn').hide();
    disableCheckedValues(answerIndex);
    renderNextQuestionButton();
    currentQuestion++;
  });
}

function clearFeedback() {
  $('#feedback-section').html('');
}

function handleNextQuestionButton() {
  $('.js-next-question').on('click', function (event) {
    event.preventDefault();
    $('.js-next-btn').hide();
    $('.js-check-answer-btn')
      .removeClass('check-answer-btn')
      .addClass('check-answer-btn-disabled');
    $('.js-check-answer-btn').prop('disabled', true);
    $('.js-check-answer-btn').show();
    clearFeedback();
    if (currentQuestion < allSectionQuestions.length) {
      renderQandA();
      handleCheckIfRadioSelected();
      renderCurrentQuestionCount();
    } else {
      renderResults();
      $('#qAndA-section').hide();
      $('#js-results-section').show();
    }
  });
}
