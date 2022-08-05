function icecreamParlor(m, arr) {
    let result= [];
    let queue= arr.length;
    let i=0;
    let j=0;
    while(i<queue){
        j=i+1;
        while(j<queue){
            if(arr[i]+arr[j]==m){
                result.push(i+1);
                result.push(j+1);
            }
            j++;
        }
        i++;
    }
    return result; 
}
