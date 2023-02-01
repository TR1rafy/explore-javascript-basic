
function findEvenSum(numbers){
    let sum = 0;
    for(let i=0; i<numbers.length;i++){
       const index= i;
       const element =numbers[index];
       sum= sum + element;
       if(element % 2 != 0){
        console.log(index,element,sum);
       }
      
    }
} 
var mynumbers= [5,7,8,10,45,30];
findEvenSum(mynumbers);