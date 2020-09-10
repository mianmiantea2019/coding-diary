const prompt = require('prompt');

const properties = [
    {
        numInput: 'numInput',
        // validator: /[1-9]/g,
    },

];

prompt.start();

prompt.get(['numInput'], function (err, result) {
    if (err) { return onErr(err); }
    // console.log('  numInput: ' + result.numInput);
    let numoutput = Math.pow(result.numInput, 2);  
    console.log('  numoutput: ' + numoutput);
    // console.log(1,2,3)
    // console.log(8,9,4)
    // console.log(7,6,5)
    // console.log(' 1,2,3 \n 8,9,4 \n 7,6,5');
    let firstRow =[];
    let table = [];
    for (let i =0; i < result.numInput; i++ ) {
        if( i < result.numInput) {
            firstRow.push(i+1)
        } else {
        console.log("I am here")
           let lastRow = [i-1+i+i-1,i+i, i+i-1]
           table.push(lastRow)
        }
    } 
    table.push(firstRow)
    console.log(table)

});

function onErr(err) {
    console.log(err);
    return 1;
}