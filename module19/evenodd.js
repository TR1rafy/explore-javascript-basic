function checkevenOdd(number){
    const reminder = number /2;
    if(reminder == 0){
        return true;
    }
    else{
        return false;
    }
}
var mynumber = checkevenOdd(45);
console.log(mynumber);