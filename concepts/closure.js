// Closure is when it "remembers" its lexical scope,
// even when the function is executed outside that lexical scope.

const sumXPlus3 = require('./closure_scope');

const x = 1000;
console.log(sumXPlus3(3));

// All results will be equal to 100 because this function
// remembers its lexical scope (closure_scope.js), the locale it was defined
