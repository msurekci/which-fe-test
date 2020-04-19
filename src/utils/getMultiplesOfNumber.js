const getMultiplesOfNumber = selectedNumber => {
  const multiplesOfSelectedNumber = [];
  if (!selectedNumber) return multiplesOfSelectedNumber;

  for (let i = 1; i < selectedNumber; i++) {
    if (selectedNumber % i === 0) {
      multiplesOfSelectedNumber.push(i);
    }
  }

  return multiplesOfSelectedNumber;
};

export default getMultiplesOfNumber;
