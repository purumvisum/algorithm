var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
    input: process.stdin,
      output: process.stdout,
    terminal: false
});

rl.on('line', readLine);
let backpack;
        let stuff = []
function readLine (line) {
    
    if (line !== "\n") {
        if (!backpack) { 
             backpack= [parseInt(line.toString().split(' ')[0]), parseInt(line.toString().split(' ')[1])]
        } else {
            if (stuff.length < backpack[0]) {
                stuff.push([parseInt(line.toString().split(' ')[0]), parseInt(line.toString().split(' ')[1])]) 
            }
        }    
    }

    if (stuff.length === backpack[0]) { 
        fractionalKnapsack(backpack[1],stuff )
    }

} 

function fractionalKnapsack(backpackNumber, stuff) {

    let  value = [] 

    let i=0; 

    for(i = 0; i < stuff.length; i ++) {
        var weight = stuff[i][0];
        var benefit = stuff[i][1];
        stuff[i].push(weight / benefit)  
    }

    stuff.sort(function(a, b){
        return b[2]-a[2]
    })

    let count = 0
    let number = backpackNumber
    let iterator = stuff[Symbol.iterator]();
    while(true) {
        result = iterator.next();
        
        if (result.done) {
            break;
        } 

        if ((number - result.value[1]) >= 0) {
            number = number - result.value[1];
            count = count + result.value[0];
        } else {
            count = parseFloat(count + result.value[0] * number / result.value[1]).toFixed(8)
        }
    }
    console.log(count) 
}


