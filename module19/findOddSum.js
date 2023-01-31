function getSumOfAnArray(numbers){
    let sum =0;
    for(let i=0; i < numbers.length; i++){
        const index=i;
        const element =numbers[index];
        sum =sum +element;
        // console.log(index,element,sum);
    }
    return sum ;
}

function getOddNumnbersOfAnAray(numbers){
     const oddNumbers =[];
    for(let i =0; i<numbers.length; i++){
        const index=i;
        const element = numbers[index];
        if(element %2 !==0){
            console.log(index,element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}






const myNUmbers =[12,23,34,54,65,76,76];
const myOddNumbers =getOddNumnbersOfAnAray(myNUmbers);
console.log(myOddNumbers);
 const oddNumbersSum=  getSumOfAnArray(myOddNumbers);
 console.log('my odd numbers sum:', oddNumbersSum);