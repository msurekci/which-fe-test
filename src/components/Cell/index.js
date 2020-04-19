import React from "react";

const Cell = ({ number, isSelected, isMultiple, setSelectedNumber }) => {
  let cellClass = "number-cell";

  if (isSelected) {
    cellClass = "number-cell-selected";
  }

  if (isMultiple) {
    cellClass = "number-cell-multiple";
  }

  const handleClick = () => {
    setSelectedNumber(number);
  };

  return (
    <div
      className={cellClass}
      onClick={handleClick}
    >
      {number}
    </div>
  );
};

export default Cell;
