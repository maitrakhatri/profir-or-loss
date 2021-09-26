var buyPrice = document.querySelector("#initial-price");
var stockQuant = document.querySelector("#no-of-stocks");
var currentPrice = document.querySelector("#current-price");
var calculateButton = document.querySelector("#calculate-button");
var result = document.querySelector("#result");

function showMessage(message) {
    result.style.display = "block";
    result.innerText = message;
}

function calculate() {

    var ip = Number(buyPrice.value);
    var sq = Number(stockQuant.value);
    var cp = Number(currentPrice.value);

    var netValue = cp - ip;

    if(netValue > 0) {
        
        var netProfit = netValue*sq;
        var profitPercentage = ((cp-ip)/ip)*100;
        showMessage("Your profit is: " + netProfit + " and Your profit perentage is: " + profitPercentage + "%");
        
    }

    if(netValue == 0) {
        showMessage("No profit No loss")
        
    }

    if(netValue < 0) {
        
        var netLoss = Math.abs(netValue*sq);
        var lossPercentage = ((ip-cp)/ip)*100;
        showMessage("Your loss is: " + netLoss + " and Your loss percentage is: " + lossPercentage + "%");

    }

}

function clickHander(){

    result.style.display = "none";

    if(buyPrice.value == "" || stockQuant.value == "" || currentPrice.value == "" || buyPrice.value < 0 || stockQuant.value < 0 || currentPrice.value < 0) {

        showMessage("Enter all the Positive Values")
    }

    else{
        calculate();
    }
}

calculateButton.addEventListener("click", clickHander)