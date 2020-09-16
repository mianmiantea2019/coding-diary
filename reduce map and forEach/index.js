const arr = [1,2,3,4];
// mian error: const sum will throw you error, Constants are block-scoped, much like variables defined using the let keyword. The value of a constant can't be changed through reassignment, and it can't be redeclared.
// if sum value change from zero to ten, it will be considered as reassgined value ./ the variable identifier cannot be reassigned
let sum = 0;
// arr.forEach(function(e){ console.log(sum += e) ;}); // sum = 10  just for demo
arr.forEach((e) => sum += e); 

console.log(sum) // sum = 10  just for demo

 