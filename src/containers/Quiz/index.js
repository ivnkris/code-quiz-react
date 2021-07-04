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
      timeRemaining: 60,
      gameOver: false,
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

  render() {
    return (
      <div className="position-absolute top-50 start-50 translate-middle quiz-container w-75">
        <div className="card">
          <div className="card-header text-center">
            Time Remaining: {this.state.timeRemaining}
          </div>
          <div className="card-body text-center">
            <QuestionAnswer
              question={questions[0].title}
              choices={questions[0].choices}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Quiz;
