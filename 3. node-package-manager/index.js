
const lodash = require("lodash");

const names = ["john", "jane", "jack", "jill"]; 
const capitalize = lodash.map(names, lodash.capitalize);

console.log(capitalize); 