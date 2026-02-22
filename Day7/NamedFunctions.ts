// Named Function: A function that is declared with a name.

/* Syntax

    function functionName(parameter): returnType
    {

    //.block of code

    }

    functionName()  // calling /invokin the fucntion.

*/

// Exapmple1: Display Hello;

    function sayHello():void
    {
        console.log('Hello')

    }

    sayHello();

// Example 2: Named function with Parameter:

    function addNumbers(x:number, y:number):number
    {

        return x+y;
    }

    console.log(addNumbers(2,3));

// Example 3 Named Function with Rest Parametrers

    function multiplyNumbers(...nums:number[])
    {
        let i ;
        let mul:number =1;
        for(i=0;i<nums.length;i++)
        {
            mul*=nums[i];
        }
        
        console.log(`Multiplication of array list is ${mul}`)

    }
    multiplyNumbers(1,2,3,4)

// Example 4

    function findElements(...element:(number|string)[]):number
    {
        return element.length;
    }

    console.log(findElements(1, "String", 3, "a;kldsjf"))

// Example 5;

 function displayDetails(id: number, name:String, email?:string)
 {
    console.log("ID", id)
    console.log("Name", name)
    if(email!=undefined){
    console.log("Email", email)
    }
 }
 displayDetails(1, "rohan", "rohan@gmail.com")
 displayDetails(2, "kaustaubh")

// Example 6: Named Function with default paratmeters

    function discountPrice(price:number, rate:number =.1)
    {
        let discount:number = price*rate;
        console.log(discount)
    }

    discountPrice(1000)

//