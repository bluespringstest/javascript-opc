'use strict'; 
(function() {

  function Person(firstName, lastName, age, height, weight){
    this.firstName = firstName,
    this.lastName = lastName,
    this.age = age,
    this.height = height,
    this.weight = weight,
    this.isAdult = function() {if (this.age >= 18) {return this.age;}else {return 'underage'; }}
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
  } 
})();