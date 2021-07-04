const Option = ({ option, checkAnswer }) => {
  return (
    <li className="list-group-item">
      <div className="d-grid gap-2">
        <button className="btn btn-outline-primary" onClick={checkAnswer}>
          {option}
        </button>
      </div>
    </li>
  );
};

export default Option;
