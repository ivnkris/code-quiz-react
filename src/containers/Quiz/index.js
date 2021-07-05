import { Component } from "react";
import QuestionAnswer from "../../components/QuestionAnswer";

const questions = [
  {
    title: "Which of these is NOT a way to declare a variable in Javascript?",
    choices: ["const", "set", "let", "var"],
    answer: "set",
  },

  {
    title: "JavaScript variables are usually written in which type of case?",
    choices: ["lowercase", "UPPERCASE", "camelCase", "CapitalCase"],
    answer: "camelCase",
  },

  {
    title: "Object properties are made up of pairs of keys and _____?",
    choices: ["values", "properties", "variables", "arrays"],
    answer: "values",
  },

  {
    title:
      "What do we call the values received by a function when it is invoked?",
    choices: ["variables", "arguments", "parameters", "inputs"],
    answer: "arguments",
  },
  {
    title: "Which of the following is NOT a Javascript array method?",
    choices: [".join()", ".pop()", ".unshift()", ".combine()"],
    answer: ".combine()",
  },
];

class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeRemaining: questions.length * 10,
      gameOver: false,
      currentQuestionIndex: 0,
      questions,
      score: 0,
      displayError: false,
    };
  }

  componentDidMount() {
    const timerTick = () => {
      if (this.state.timeRemaining === 0) {
        clearInterval(timer);
        this.setState({
          gameOver: true,
        });
      } else {
        this.setState({
          timeRemaining: this.state.timeRemaining - 1,
        });
      }
    };

    const timer = setInterval(timerTick, 1000);
  }

  checkAnswer = (event) => {
    const selectedOption = event.target.getAttribute("data-option");
    const currentAnswer =
      this.state.questions[this.state.currentQuestionIndex].answer;

    const isCorrect = selectedOption === currentAnswer;

    if (this.state.currentQuestionIndex < this.state.questions.length - 1) {
      if (isCorrect) {
        this.setState({
          currentQuestionIndex: this.state.currentQuestionIndex + 1,
          score: this.state.score + 1,
          displayError: false,
        });
      } else {
        this.setState({
          displayError: true,
        });
      }
    } else {
      this.setState({
        gameOver: true,
        timeRemaining: 0,
        displayError: false,
      });
    }
  };

  render() {
    const {
      timeRemaining,
      gameOver,
      currentQuestionIndex,
      score,
      displayError,
    } = this.state;

    const question = questions[currentQuestionIndex];
    return (
      <div className="position-absolute top-50 start-50 translate-middle quiz-container w-75">
        <div className="card">
          <div className="card-header text-center">
            Time Remaining: {timeRemaining}
            <br />
            Score: {score} / {this.state.questions.length}
          </div>
          <div className="card-body text-center">
            {gameOver ? (
              <h1>GAME OVER</h1>
            ) : (
              <QuestionAnswer
                question={question.title}
                choices={question.choices}
                checkAnswer={this.checkAnswer}
              />
            )}
          </div>
          {displayError && (
            <div className="alert alert-danger" role="alert">
              The answer is wrong! Please, try again!
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Quiz;
