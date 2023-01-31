var myComputer ={
    ram : '125gb' ,
    mouse: 34 ,
    keyboeard: 5,
    book: 'rafy'
}
// console.log(myComputer);
// var computerVlaues = Object.values(myComputer);
// console.log(computerVlaues);


// --------when properties name save in another variavle --------
 var propertyName = 'mouse';
 var propertyValues = myComputer[propertyName];
 console.log(propertyValues ,propertyName);

//  --------set properties values---------

var propertyName = 'keyboeard';
myComputer[propertyName]= 22;
console.log(myComputer);
