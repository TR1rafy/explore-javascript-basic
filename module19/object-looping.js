var myComputer ={
    ram : '125gb' ,
    mouse: 34 ,
    keyboeard: 5,
    book: 'rafy'
}

const keys = Object.keys(myComputer);
console.log(keys);

for(i=0; i<keys.length; i++){
    const propertieName= keys[i];
    // console.log(propertieName);
    const propertieValue= myComputer[propertieName];
    // console.log(propertieValue,propertieName);
}
// ------for in loop----------
for( var propertieName in myComputer){
const value = myComputer[propertieName];
    console.log(propertieName,value);
}