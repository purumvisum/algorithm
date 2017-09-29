var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
    input: process.stdin,
      output: process.stdout,
    terminal: false
});

rl.on('line', readLine);

    let firstString ;
    let secondString ;
function readLine (line) { 


    if (firstString) {
        secondString = line.toString();
        editingDistance(firstString, secondString);
    } else {
         firstString = line.toString();
    }


} 

function editingDistance(firstString, secondString) {
    let n = firstString.length;
    let m = secondString.length;
    let matrix = [];
    for (let i = 0; i <= n; i ++ ) {
        matrix[i]=[i]
    }
    for (let j = 0; j <= m; j ++ ) {
        matrix[0][j] = j;
    }

    for (i = 1; i <= n; i++) {
        for (j = 1; j <= m; j++) {
            if (firstString.charAt(i-1) === secondString.charAt(j-1)) {
                matrix[i][j] = matrix[i-1][j-1] 
            } else {

                 matrix[i][j] =  
                 Math.min(matrix[i-1][j-1] + 1, // substitution
                                Math.min(matrix[i][j-1] + 1, // insertion
                                         matrix[i-1][j] + 1)); // deletion
             }
            
        }
    }

    console.log(matrix[n][m])
} 





