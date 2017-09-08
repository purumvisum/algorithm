var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
    input: process.stdin,
      output: process.stdout,
    terminal: false
});

rl.on('line', readLine);

function readLine (line) {
	  let firstSymbol = parseInt(line.toString().split(' ')[0])
    var lastNum = fibonacci(firstSymbol)
    console.log(lastNum); 
    process.exit();
} 

function fibonacci(num){
  var a = 1, b = 0, i = 0, temp;
  while ( i < num){
    temp = parseInt(a.toString().split('').pop())
    a = parseInt(a.toString().split('').pop()) + parseInt(b.toString().split('').pop());
    b =temp;
    i++;
  }
  return b;
}
  
  
