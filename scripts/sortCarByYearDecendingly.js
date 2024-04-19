function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - 1 - i; j++) {
      if (result[j].year < result[j + 1].year) {
        const temporary = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temporary;
      }
    }
  }

  // Bubble Sort Result
  console.table(result);

  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
