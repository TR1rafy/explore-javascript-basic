function milesToKm(miles){
    const milesValue = miles / 1.60934;
    return milesValue;

}

const myMiles = 150;
const iamRunning = milesToKm(myMiles);
console.log(iamRunning);
