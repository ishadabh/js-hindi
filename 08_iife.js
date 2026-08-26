// Immediately Invoked Function Expression (IIFE)


(function chai() {

    //named iife
    console.log(`DB connected`);
    
})();   // if we remove this semi-colon then it will give an error because iife don't were to stop

((name) => {

    // non-named iife
    console.log(`DB Conected Two`);  
}) ("Shadab")