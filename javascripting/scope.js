const a = 1; const b = 2; const c = 3;  
       
(function firstFunction () {  
    const b = 5; const c = 6;  
    // console.log(`Inside firstFucntion => a: ${a}, b: ${b}, c: ${c}`);
    (function secondFunction () {  
        const b = 8;  
        // console.log(`Inside secondFucntion => a: ${a}, b: ${b}, c: ${c}`);
        (function thirdFunction () {  
            const a = 7; const c = 9;  
            // console.log(`Inside thirdFucntion => a: ${a}, b: ${b}, c: ${c}`);
            (function fourthFunction () {  
                // console.log(`Inside forthFucntion => a: ${a}, b: ${b}, c: ${c}`);
                const a = 1; const c = 8;  
            })()  
            // console.log(`Outside forthFucntion => a: ${a}, b: ${b}, c: ${c}`);
        })()  
        // console.log(`Outside thirdFucntion => a: ${a}, b: ${b}, c: ${c}`);
    })() 
    // console.log(`Outside secondFucntion => a: ${a}, b: ${b}, c: ${c}`);
})() 

// console.log(`Outside firstFucntion => a: ${a}, b: ${b}, c: ${c}`);
console.log(`a: ${a}, b: ${b}, c: ${c}`);
