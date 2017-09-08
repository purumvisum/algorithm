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
    primeFactorization( 210)
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
    console.log(lcm);
}

function primeFactorization (x) {
    var j = 0;
    var i = 2;
    var a = [];
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

    console.log(a)
}

