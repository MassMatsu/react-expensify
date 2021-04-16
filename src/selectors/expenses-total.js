const getExpensesTotal = (expenses) => {
  if (expenses.length === 0) {
    return 0
  } else {
    return expenses.reduce((total, item) => {
      return total + item.amount;
    }, 0);
  }
};

export default getExpensesTotal;
