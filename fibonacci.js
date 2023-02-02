// const fibo = [0 ,1];
// for ( i=2; i<20;i++){
//     fibo[i]= fibo[i-1] + fibo[i-2];
//     console.log(fibo);
// }

function checkFibonacci(number){
    const fibo = [0 ,1];
    for (let i=2; i<number;i++){
        fibo[i]= fibo[i-1] + fibo[i-2];
        console.log(fibo);
    }
    return fibo;

}
checkFibonacci(20);