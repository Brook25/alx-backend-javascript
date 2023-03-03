function getBudgetObject(income=0, gdp=0, capita=0) {
  const budget = {
    income,
    gdp,
    capita,
  };

  return budget;
}

console.log(getBudgetObject(67, 80, 98));
