'use strict'; 
(function() {

  let person = {
    name: {firstName: 'Daniel',
    lastName: 'Orwell',
  },
    age: 29,
  };
  
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