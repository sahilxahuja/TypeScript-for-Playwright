// Arrow Function: A shorter syntax to write function expressions.

/* Syntax

    let functionName = (parameters): returnType => {
        // block of code
    }

*/

// Example 1: Arrow function with no parameters

let greet = (): string => {
    return "Hello from Arrow Function";
};

console.log(greet()); // Hello from Arrow Function

// Example 2: Arrow function with one parameter

let square = (num: number): number => {
    return num * num;
};

console.log(square(6)); // 36

// Example 3: Arrow function with multiple parameters

let add = (x: number, y: number): number => {
    return x + y;
};

console.log(add(10, 20)); // 30

// Example 4: Arrow function with default parameter

let calculateBill = (amount: number, tax: number = 0.18): number => {
    return amount + amount * tax;
};

console.log(calculateBill(1000)); // 1180

// Example 5: Arrow function with rest parameters

let totalMarks = (...marks: number[]): number => {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    return sum;
};

console.log(totalMarks(70, 80, 90, 85)); // 325

// Example 6: Arrow function used with array map

let numbers: number[] = [1, 2, 3, 4, 5];
let doubled: number[] = numbers.map((n: number): number => n * 2);

console.log(doubled); // [2, 4, 6, 8, 10]
