function myLeapYear(year){
    const reminder =year % 4;
    if(reminder ===0){
        console.log('This year isn leap year');
        
    }
    else{
        console.log('This year is not leap year');
        
    }
}

var myYear = myLeapYear(2034);
console.log(myYear);