'use strict'; 
(function() {

  class Person{
    constructor(firstName, lastName, age){
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
    get fullName(){
      return this.firstName + ' ' + this.lastName;
    }
    set fullName(fullName) {
      var nameParts = fullName.split(' ');
      this.firstName = nameParts[0];
      this.lastName = nameParts[1];
  }
  isAdult(){
    if (this.age >= 18) {
      return this.age;
    }else {
      return 'underage';
    }
  }
}

  let jim = new Person('Jim', 'Parsons', 29);
  jim.fullName = 'Fred Jones';
  display(jim.fullName);
  display(jim.isAdult());
  })();