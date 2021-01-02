let person1 = new Person('James', 'Tidbit', 23);

  let healthStats = {
    height: 68,
    weight: 150
  };
  function mergedHealthStats(person, healthStats){
    return Object.assign({},person, healthStats);
  }
  let mergedPerson = mergedHealthStats(person, healthStats);
  display(mergedPerson);
  display(person);