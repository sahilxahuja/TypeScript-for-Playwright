// Callback Functions are functions which take another function as a argument
// This function doesn't executed at start.


//Example 1: 
    //callback function below
    function showMessage(message:string):void
    {
        console.log(message)
    }

    function greet(name:string, age:number, msg:(message:string)=>void)
    {
        console.log(name)
        console.log(age)
        msg('Yellow')
    }

    greet("Rohan",22,showMessage)

//Example 2: 

    function displayResult(result:number):void
    {
        console.log(result)
    }
    
    function sum(a:number, b:number, res:(result:number)=>void)
    {
        let y =a+b;
        res(y)
      
    }

    sum(10, 20, displayResult)