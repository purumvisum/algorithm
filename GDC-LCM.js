var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
    input: process.stdin,
      output: process.stdout,
    terminal: false
});

rl.on('line', readLine);


function readLine (line) {
	let a = parseInt(line.toString().split(' ')[0])
    let b = parseInt(line.toString().split(' ')[1])
    // LCM(a, b)
    let simpleNumbersArrayA = primeFactorization(a);
    let simpleNumbersArrayB = primeFactorization(b);

    console.log(a, b)

    let simpleNumbersAB = [];

    // console.log(simpleNumbersArrayA)
    // console.log(simpleNumbersArrayB)


    let countsA = {}

    // create object with items and them numbers 1nd array
    simpleNumbersArrayA.forEach(function(x) { 
        countsA[x] = (countsA[x] || 0)+1; 
    });

   let countsB = {}


   // create object with items and them numbers 2nd array
    simpleNumbersArrayB.forEach(function(x) { 
        countsB[x] = (countsB[x] || 0)+1; 
    });


   for(var item in countsA){
        if(countsA.hasOwnProperty(item)){
            if(countsA[item] < countsB[item]){
                for (let i =0; i < countsB[item]; i ++) {
                     simpleNumbersAB.push(item)
                }


            } else {
                 for (let i =0; i < countsA[item]; i ++) {
                     simpleNumbersAB.push(item)
                }
            
            }
        }
    }

    // if in second obj more items than in first 
    simpleNumbersArrayB.map(function(item) {
        let includes = simpleNumbersArrayA.includes(item)
        if (!includes) {
            simpleNumbersAB.push(item)
        } 
    });

    console.log('simpleNumbersAB', simpleNumbersAB)

    let sum = simpleNumbersAB.reduce(function(a,b){
        return a*b; 
    });

    console.log(sum)

    process.exit();
} 

function GCD(a, b) {
    while ( a !== 0 && b != 0 ){
        if (a > b) {
            a = a % b 
        } else {
             b = b % a 
        }
    }
    return (a + b)
}

function LCM (a, b) {
    let lcm = a * b/ GCD(a, b);
    // console.log(lcm);
}

function primeFactorization (x) {
    var j = 0;
    var i = 2;
    var a = [];

    if (i > x) {

        a.push(x);
         return a ;
    }

    do{
        if (x % i === 0){
            a[j] = i;
            j++;
            x = x / i;
        }
        else{
            i++;
        }
    }
    while (i < x){
        a[j] = i; 
    }

    return a ;
}
