// ---------- Ternary Operatort / conditional operator

// ?:

let a:number = 100, b:number= 200

let res:number = (a>b) ? a:b;

console.log(res)  // 200 will be assigned to res as the condition is false.

// Example 2 ; 

    let personAge: number = 30;
    let rest: string = (personAge>18) ? "Minor":"Adult";
    console.log(rest) // Minor will be printed.


// Example 3: Union Operator;

    let c:(number | string)
   // c= true; // this gave an error saying boolean can't be assigned to string / number variable.

   c=3;  //easily accepts 3

    