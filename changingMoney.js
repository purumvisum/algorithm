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
    greedyCoin(a)
    process.exit();
} 

function greedyCoin(a) {
 let str = [10, 5, 1];
    let count = 0
    let number = a
    let iterator = str[Symbol.iterator]();
    let result = iterator.next();
    while(true) {
        
        if (result.done) {
            break;
        } 

        if ((number - result.value) >= 0) {
            number = number - result.value;
            count = count + 1;
        } else {
            result = iterator.next();
        }

    }
    console.log(count)
}
