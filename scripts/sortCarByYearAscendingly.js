function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  cars.forEach((i) => {
    for (let i = 0; i < cars.length - 1; i++) {
      if (result[i].year > result[i + 1].year) {
        let temporary = result[i];
        result[i] = result[i + 1];
        result[i + 1] = temporary;
      }
    }
  });

  // Bubble Sort Result
  console.table(result);

  // Rubah code ini dengan array hasil sorting secara ascending
  return result;
}
