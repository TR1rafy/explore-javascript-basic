
function findEvenSum(numbers){
    let sum = [];
    for(let i=0; i<numbers.length;i++){
       const index= i;
       const element =numbers[index];
        
       if(element % 4 != 0){
        sum.push(element);
        console.log(index,element,sum);
       }
      
    }
} 
var mynumbers= [5,7,8,10,45,30];
findEvenSum(mynumbers);