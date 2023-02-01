
function facotialNumber(number)

{
    let multiple=5;  
    for( let i=1; i<=number;i++){
       
      multiple = multiple * i;
      console.log(i ,multiple);
 
    }
    return multiple;
}
const result=  facotialNumber(5);
console.log(result);