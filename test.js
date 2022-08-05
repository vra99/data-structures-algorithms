// After removing spaces, the string is 54 characters long.  is between  and , so it is written in the form of a grid with 7 rows and 8 columns.
function transformNumber(number){
    let result = [];
    let temp = number;
    while(temp > 0){
        result.push(temp % 10);
        temp = Math.floor(temp / 10);
    }
    return result;
} 

console.log(transformNumber(100));