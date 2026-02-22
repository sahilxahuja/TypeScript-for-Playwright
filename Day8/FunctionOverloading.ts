//setp1: Write a signatures of functions
//Step2: Implement a function.
//Step3: Calling a function.

//Example 1: 

    function getInfo(id:number):string;     //Signature1
    function getInfo(name:string):string;   //Signature2

    function getInfo(bar:number|string):string
    {
        if(typeof bar==="number")
        {
            return(`ID of the user is ${bar}`)
        }
        else(typeof bar==="string")
        {
            return(`Name of the user is ${bar}`)
        }

    }

    console.log(getInfo("rohan"))

// Example 2:
// This overloaded function returns:
// - `number` when input is a string (string length)
// - `string` when input is a number (formatted text)
function convertValue(value: string): number; // Signature 1
function convertValue(value: number): string; // Signature 2

function convertValue(value: string | number): number | string {
    if (typeof value === "string") {
        return value.length;
    } else {
        return `Given number is ${value}`;
    }
}

console.log(convertValue("TypeScript")); // 10
console.log(convertValue(101));          // Given number is 101
