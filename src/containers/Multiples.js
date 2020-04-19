import React, { useState } from "react";

import Cell from "../components/Cell";
import getMultiplesOfNumber from "../utils/getMultiplesOfNumber";

// Small optimization to store numbers that are already calculated
// This can also live in something like Redis or Memcache
// Potentially can utilize useMemo
const multiplesOfNumbers = {};

const Multiples = () => {
  const [selectedNumber, setSelectedNumber] = useState(null);

  if (!multiplesOfNumbers[selectedNumber]) {
    multiplesOfNumbers[selectedNumber] = getMultiplesOfNumber(selectedNumber);
  }

  const numberOfCells = 144;

  const handleSetSelectedNumber = number => {
    if (number === selectedNumber) {
      return setSelectedNumber(null);
    }

    setSelectedNumber(number);
  };

  const cells = [...Array(numberOfCells)].map((_, index) => {
    const number = index + 1;
    const isSelected = selectedNumber === number;
    const isMultiple = multiplesOfNumbers[selectedNumber].includes(number);

    return (
      <Cell
        key={number}
        number={number}
        isSelected={isSelected}
        isMultiple={isMultiple}
        setSelectedNumber={handleSetSelectedNumber}
      />
    );
  });

  return <div className="cells-container">{cells}</div>;
};

export default Multiples;
