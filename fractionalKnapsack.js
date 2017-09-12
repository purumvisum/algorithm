function fractionalKnapsack() {
    var test_input = [
        [60, 10],
        [100, 20],
        [120, 30]
    ];

    //    var test_input = [
    //     [ 500,  30]
    // ];

    //  var test_input = [
    //     [ 500,  30]
    // ];

   

    let knapsackCapacity = [1, 10]

    let amt_to_take = [];
    let  value = [] 

    let i=0; 

    for(i = 0; i < test_input.length; i ++) {
        var weight = test_input[i][0];
        var benefit = test_input[i][1];
        test_input[i].push(weight / benefit)
    }

    test_input.sort(function(a, b){
        return b[2]-a[2]
    })

    let count = 0
    let number = 50
    let iterator = test_input[Symbol.iterator]();
    while(true) {
        result = iterator.next();
        
        if (result.done) {
            break;
        } 

        if ((number - result.value[1]) >= 0) {
            number = number - result.value[1];
            count = count + result.value[0];
        } else {
            count = count + result.value[0] * number / result.value[1]
        }


    }

    console.log(count) 
}
