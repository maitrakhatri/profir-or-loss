const buyPrice = document.querySelector("#initial-price");
const stockQuant = document.querySelector("#no-of-stocks");
const currentPrice = document.querySelector("#current-price");
const calculateButton = document.querySelector("#calculate-button");
const result = document.querySelector("#result");

function showMessage(message) {
    result.style.display = "block";
    result.innerText = message;
}

const calculate = () => {

    const ip = Number(buyPrice.value);
    const sq = Number(stockQuant.value);
    const cp = Number(currentPrice.value);

    const netValue = cp - ip;

    if(netValue > 0) {
        
        const netProfit = netValue*sq;
        const profitPercentage = ((cp-ip)/ip)*100;
        showMessage(`Your profit is: ${netProfit} and Your profit perentage is: ${profitPercentage}%`);
        result.style.color = "green";
        
    }

    if(netValue == 0) {
        showMessage("No profit No loss");
        result.style.color = "orange";
        
    }

    if(netValue < 0) {
        
        const netLoss = Math.abs(netValue*sq);
        const lossPercentage = ((ip-cp)/ip)*100;
        showMessage(`Your loss is: ${netLoss} and Your loss percentage is: ${lossPercentage}%`);
        result.style.color = "red";

    }

}

const clickHander = () => {

    result.style.display = "none";

    if(buyPrice.value == "" || stockQuant.value == "" || currentPrice.value == "" || buyPrice.value < 0 || stockQuant.value < 0 || currentPrice.value < 0) {

        showMessage("Enter all the Positive Values")
    }

    else{
        calculate();
    }
}

calculateButton.addEventListener("click", clickHander)