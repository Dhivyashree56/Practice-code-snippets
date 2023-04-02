//Normal func exec
function outer() {
    var b = 10;
       function inner() {
            
             var a = 20; 
             console.log(a+b);
        }
       return inner;
    }
    var X = outer(); 
    var Y = outer(); 
    //end of outer() function executions
    X(); // X() invoked the first time
    X(); // X() invoked the second time
    X(); // X() invoked the third time
    Y(); // Y() invoked the first time

/*Variable a is created, and its value is set to 20. JavaScript now tries to execute a + b. Here is where things get interesting. 
JavaScript knows that a exists since it just created it. However, variable b no longer exists. 
Since b is part of the outer function, b would only exist while the outer() function is in execution. 
Since the outer() function finished execution long before we invoked X(), any variables within the scope of the outer function cease to exist, and hence variable b no longer exists.*/

//Closure

function outer() {
    var b = 10;
    var c = 100;
       function inner() {
            
             var a = 20; 
             console.log("a= " + a + " b= " + b);
             a++;
             b++;
        }
       return inner;
    }
    var X = outer();  // outer() invoked the first time
    var Y = outer();  // outer() invoked the second time
    //end of outer() function executions
    X(); // X() invoked the first time
    X(); // X() invoked the second time
    X(); // X() invoked the third time
    Y(); // Y() invoked the first time
