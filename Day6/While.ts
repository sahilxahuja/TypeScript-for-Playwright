/**
 * While Loop : Loop executes as long as the condition si true 
 * 
 * while (true){
 *  
 *  statements;
 *  
 * }
 * 
 * 
 */

// Example-1: print 1-10

    let i: number =1;
    while (i<=10)
    {   
        console.log(i);
        i++;
    }

// Example-2: print even nubmers b/w 1-100;

    let j:number =1;

    while(j<=100)
    {
        if (j%2==0){
            console.log(`Value is ${j} and it's even`)
        }
        
        j++
    }