let integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

let newIntegers = integers.sort(function descend(a, b) { return b - a }).filter(less => less < 19).map(x => x * 1.5 + 1).reduce((acc,cv)=>acc+cv);
console.log("Array Method Chaining:", newIntegers);