'use strict'; 
(function() {
  function checkPasswordComplexity(password){
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
    return regex.test(password);
  }
  display(checkPasswordComplexity('Str34ch18ing'));
})();