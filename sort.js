let numbers = [1, 2, 3, 4, 5];

let res = numbers.reduce((total, num) => {
    return total + num;
}, 0);

console.log(res);