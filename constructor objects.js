'use strict'; 
(function() {
  function Person(firstName, lastName, age, height, weight){
    this.firstName = firstName,
    this.lastName = lastName,
    this.age = age,
    this.height = height,
    this.weight = weight,
    this.isAdult = function() {
      if (this.age >= 18) {
        return this.age;
      }
      else {
        return 'underage';
      }
    }
  }

  let James = new Person('James', 'Tidbit', 23, 177, 115);
  let sofia = new Person('Sofia', 'Williams', 33, 165, 85);

  display(James);
  display(sofia.isAdult());

  let person2 = Object.create(
    Object.prototype,
    {
      firstName: {value: 'John', enumerable:true, writable:true, configurable:true},
      lastName: {value: 'Jones', enumerable:true, writable:true, configurable:true},
      age: {value: 31, enumerable:true, writable:true, configurable:true},
    }
  );
  
  for (let propertyName in person){
    display(propertyName + ': ' + person[propertyName]);
  }

  display(Object.getOwnPropertyDescriptor(person, "firstName"));
  Object.defineProperty(person, 'name', {writable: false});
  person.name.firstName = 'KRSOne'; //this can change unless you use object.freeze(object.objectname)
  Object.defineProperty(person, 'fullName', {
    get: function(){
      return this.name.firstName + ' ' + this.name.lastName;
    },
    set: function(value){
      var nameParts = value.split(' ');
      this.name.firstName = nameParts[0];
      this.name.lastName = nameParts[1];
    }
  });

  person.fullName = 'Mr Jones';

  display(person.fullName);
  display(person.name.firstName);
  display(person.name.lastName);
})();