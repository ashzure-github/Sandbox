function countDown(number) {
    if (number <= 0)
        return
    console.log(number)
    countDown(number - 1)
}

// function countDown(number) {
//     while (number > 0) {
//         console.log(number)
//         number = number - 1
//     }
// }

//countDown(5);

function fib(number) {
    if (number < 0)
       return fib(number + 2) - fib(number + 1);
    else if (number === 0)
        return 0
    else if (number === 1)
        return 1
    else
        return fib(number - 2) + fib(number - 1);
}

let x;
while (x = 0, x < 10, x++) {
    x = 10
    
}

console.log(fib(-2) === -1)
console.log(fib(-1) === 1)
console.log(fib(0) === 0)
console.log(fib(1) === 1)
console.log(fib(2) === 1)
console.log(fib(3) === 2)
console.log(fib(4) === 3)
console.log(fib(5) === 5)
console.log(fib(6) === 8)