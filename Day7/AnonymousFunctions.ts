/**
 * Anonymous functions are also called unnamed functions or nameless functions.
 * this's a function that doesn't have a name. Instead i is assigned to a variable which acts as its name.
 *  
 * Syntax 
 *      let variable = function(paramters){
 *              //function body
 *          
 *          };
*/

//Example 1: Anonymous Function

    let msg = function():string
    {
        return("Hello TS")
    }

    console.log(msg())

// Example 2: Anonymous Function with Parameter.

    let multiplication = function(x:number, y:number):number
        {
            return x*y;
        }

    console.log(multiplication(8, 4))