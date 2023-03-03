export default function getBudgetObject(income=0, gdp=0, capita=0) {
  const budget = {
    "income": income,
    "gdp": gdp,
    "capita": capita,
  };

  return budget;
}
