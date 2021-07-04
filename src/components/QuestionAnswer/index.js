import Option from "../Option";

const QuestionAnswer = ({ question, choices }) => {
  const renderOptions = () => {
    return choices.map((option) => {
      return <Option key={option} option={option} />;
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
