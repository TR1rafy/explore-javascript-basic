const phones =[
    {
        name: 'samsung' , camra: '12gb', price: 33000, color: 'white'
    },
    {
        name: 'iphone' , camra: '14gb', price: 668000, color: 'golden'
    },
    {
        name: 'shaomi' , camra: '12gb', price: 56000, color: 'black'
    },
    {
        name: 'htc' , camra: '12gb', price: 6000, color: 'Purple'
    },
    {
        name: 'nokia' , camra: '12gb', price: 36000, color: 'vlue'
    },
    {
        name: 'galaxy' , camra: '12gb', price: 31000, color: 'white'
    },



]



function cheapesetPhone(phones){
    let cheapest = phones[0];
for( let i=0;i <phones.length; i++){
    const phone =phones[i];
    if(phone.price < cheapest.price ){
        cheapest=phone;

}

}
 return cheapest;
}

const mySelection =cheapesetPhone(phones);
console.log(mySelection);