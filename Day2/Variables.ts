// var age: number = 30;
// console.log(age) 


// Var , let, const
/**
 * Based on Below Mentionded Categories
 * 1. Scope
 * 2. Declaration/ Value Adjustment
 * 3. Re-Declaration
 * 4. Re-Initialization / Re-Assignment
 * 5. Hoisting.
 */

/// Scope
//Example1
function varScope() {

    if (true) {
        var msg = 'Inside if as value is  true by default'
        console.log(msg)
    }
    console.log(msg)
}
varScope(); // Will be printing both console.log as var can be accessed anywhere inside the function.

//Example 2
function blockScope() {
    if (true) {
        let msg = 'Inside if as value is  true by default'
        const greet = 'Hello const'
        console.log(msg);
        console.log(greet);
    }
    //console.log(msg +" " + greet)  //--- Can not be used the msg and greet as it's outside the block.
}
// Example 3
function scopeDiff() {
    if (true) {

        var num1 = 10;
        let num2 = 20;
        const num3 = 30;
        console.log(num1);
        console.log(num2);
        console.log(num3);
        // the above 3 will run based on the scope.
    }
    console.log(num1);   // Will run as var has function scope and we're still inside the function.
    //console.log(num2);  //--- Will not run outside their scoped block
    //console.log(num3);  //--- Will not run outside their scoped block

}

scopeDiff()



// 2 . Declaration / Value Assignment

// Example 1: var - can be declared without intialization.
    var x; // declaration
    console.log(x) // will print undefined as value is not defined/declared
    x=30; // initialization
    console.log(x)

// Example 2 : let - can also be declared without initialization.

    let y;
    console.log(y); // will be printing undefined as not declared
    y="Hello";
    console.log(y) 

// Example 3 : const - must be  initialized during declaration as value is constant and can't change throughout.

   // const x;          //--- will give error as not initialized.
    const z = 'Const is now Declared'
    console.log(z);



// ------------------  3. RE-DECLARAION -----------------------//

//Example 1: var allows redeclaration;

    var city= 'LA';
    var city= 'NYC';
    console.log(city);  // will be printing NYC

// Example 2: let doesn't allow redeclaration.

    let country = 'India';
    // let country = 'China';     //----------- will give error as we are redeclaring.
    
// Example 3: const doesnt allow redeclaration.

    const state= 'UP'
    //const state= 'india'      //----------------will give error as we are redeclaring the const as it doesnt support changing the value.




    // ------------------------ 4. RE-ASSIGNMENT------------------//

// Example 1 : var allows reassignment 

    var a = 10;  // declaration
    a= 20;  // re-assignment
    console.log(a); // will print 20

// Example 2 : Let allows reassignment
    let b = 10;  // declaration
    b= 20;  // re-assignment
    console.log(b); // will print 20


// Example 3 : const doesn't allow reassignment.

    const z1 = 'String Any'
    //z1 =  'Value new' //-------------- Giving error as const value should be fixed


//----------------------HOISTING-------------------------------//

//calling a variable before intializing is called hoisting.

//Example 1: var will give undefined 
  //  console.log(c);  // will return udnefined
    var c = 30;
    console.log(c);

// Example 2: let and const doesn't support hoisting and will give initialization error.

   // console.log(d)   //--- Cannot access 'd' before initialization
    let d =30;
    console.log(d);

    //console.log(e); //---Cannot access 'e' before initialization
    const e =33;
    console.log(e);