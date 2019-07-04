let questionNumber = 0;
let score = 0;

function createQuestion () {
    return `<div class="question-${questionNumber}">
        <h2>Question #1</h2>
        <p>${STORE[questionNumber].question}</p>
        <form>
          <fieldset>
            <label>
              <input type="radio" value="${STORE[questionNumber].answers[0]}" name="answer" required="">
              <span>${STORE[questionNumber].answers[0]}</span>
            </label>
            <label>
              <input type="radio" value="${STORE[questionNumber].answers[1]}" name="answer" required="">
              <span>${STORE[questionNumber].answers[1]}</span>
            </label>
            <label>
              <input type="radio" value="${STORE[questionNumber].answers[2]}" name="answer" required="">
              <span>${STORE[questionNumber].answers[2]}</span>
            </label>
            <label>
              <input type="radio" value="${STORE[questionNumber].answers[3]}" name="answer" required="">
              <span>${STORE[questionNumber].answers[3]}</span>
            </label>
          </fieldset>
        </form>
        <div class="submit">
            <input type="button" value="Submit" id="submit">
        </div>
      </div>`
}

function renderQuestion () {
    $('.questionForm').html(createQuestion());
}

function submitAnswer () {
    // on form submit check selected answer against correct answer from STORE and
    // run answerFeedbackCorrect/Incorrect
    $('form').on('submit', function (event) {
      event.preventDefault();
      let userAnswer = selected.val();
      let correctAnswer = `${STORE[questionNumber].questionAnswer}`;
      if (userAnswer == correctAnswer) {
        answerFeedbackCorrect();
      }
      else {
        answerFeedbackIncorrect();
      }
    }
    
    )
}

function answerFeedbackCorrect () {
    // Let user know the answer is correct and display extra info
}

function answerFeedbackIncorrect () {
    // Let user know the answer is incorrect and display extra info
}

function updateScore () {

}


function startQuiz () {
    $('.quizStart').on('click', '.startButton', function (event) {
      $('.quizStart').remove();
      $('.questionForm').css('display', 'block');
    renderQuestion ();
  });
  }

$(startQuiz);