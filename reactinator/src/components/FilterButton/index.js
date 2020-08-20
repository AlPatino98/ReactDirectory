import React from "react";

function FilterButton(props) {
  return (
    <div className="card-body">
      <p className="card-text">Filter Button: {props.count}</p>
      <button className="btn btn-primary" onClick={props.handleIncrement}>
        Filter By Name
      </button>{" "}
      <button className="btn btn-danger" onClick={props.handleDecrement}>
        Sort by id
      </button>
    </div>
  );
}

export default FilterButton;
