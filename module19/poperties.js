var myMobile ={
    model: 'redme' ,
    storage : '128Gb',
    camra : '34mp'

} 
var student ={
    id: 181008212,
    name: 'rafy',
    program: 'cse',
    location: 'oxygen'
}

console.log(myMobile);
var mobileDetails = myMobile['camra'];
console.log(mobileDetails);

var studentDetails = Object.keys(student);
var studentvalues= Object.values(student);
console.log(studentDetails);
console.log(studentvalues);