function findMaxArray(numbers){
    let largest =numbers[0];
    for(let i= 0; i <numbers.length; i++){
        const index =i;
        const element =numbers[index];
       if(element > largest){
        largest =element;
       }
    }
    return largest;
}
const heights =[22,55,346,566,33,43,26,72,356];
const tallest =findMaxArray(heights);
console.log(tallest);