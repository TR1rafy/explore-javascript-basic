
const shoppingCart =[
    { name: 'shoes', price:2300, quantity : 3},
    { name: 'belt', price:300, quantity : 3},
    { name: 'sshirt', price:2500,quantity : 3},
    { name: 'pant', price:2900,quantity : 3},
]

function calculatePrice(products){
    let sum =0;
    
    for( let i=0; i<products.length; i++){
        const product =products[i]
        const totalProductPrice = product.price * product.quantity;
        sum = sum + totalProductPrice;

    }
    return sum;
}
 const totalCost =calculatePrice(shoppingCart);
 console.log('total price :', totalCost);