const Option = ({ option }) => {
  return (
    <li className="list-group-item">
      <div className="d-grid gap-2">
        <button className="btn btn-outline-primary"> {option} </button>
      </div>
    </li>
  );
};

export default Option;
