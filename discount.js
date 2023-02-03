
function ticketPrice(ticketQuantity){
    const first100TicketRate = 100;
    const second100TicketRate = 90;
    const restTicketRate = 70;

    if(ticketQuantity <=100){
        const price = ticketQuantity * first100TicketRate;
        return price;
    }
    else if(ticketQuantity <=200){
        const first100Price = 100 * first100TicketRate;
        const restticketQuantity = ticketQuantity - 100;
        const resttikcetPrice = restticketQuantity * second100TicketRate;
        const totalPrice = first100Price + resttikcetPrice;
         return totalPrice;
    }
    else{
        const first100Price = 100 * first100TicketRate ;
        const second100Price = 100 * second100TicketRate;
        const rest2ticketQuantity = ticketQuantity -200; 
        const rest2TicketPrice = rest2ticketQuantity * restTicketRate;
        const totalTicketPrice = first100Price + second100Price + rest2TicketPrice;
        return totalTicketPrice;
    }
}
const myTicketRate = ticketPrice(250);
console.log(myTicketRate);



