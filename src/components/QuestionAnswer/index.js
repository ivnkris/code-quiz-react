import Option from "../Option";

const QuestionAnswer = ({ question, choices, checkAnswer }) => {
  const renderOptions = () => {
    return choices.map((option) => {
      return <Option key={option} option={option} checkAnswer={checkAnswer} />;
    });
  };
  return (
    <div>
      <div>{question}</div>
      <ul className="list-group">{renderOptions()}</ul>
    </div>
  );
};

export default QuestionAnswer;
