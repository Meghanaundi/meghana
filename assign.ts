let fibonacci = [0,1];
   function listFibonacci(num) {
        for (let i = 1; i < num; i++) {
            fibonacci.push(fibonacci[i] + fibonacci[i - 1]);
        }
        console.log(fibonacci);
    } 
    listFibonacci(10);
    function addNumbers(a, b) {  
        return a + b;  
    }  
    var sum = addNumbers("", 25);  
    console.log('Sum of the numbers is: ' + sum);
    function isPrime(num) {
        for(var i = 2; i < num; i++)
          if(num % i === 0) return false;
        return num > 1;
      }
