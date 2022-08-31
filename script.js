// Global variables
var crust = document.getElementById('Fuvck').value;
var sauce = document.getElementById('sauce').value;

// toppings array
var toppingArray = [];

// event listener
var formButton = document.getElementById('btn');
formButton.addEventListener("click", function(event){
    event.preventDefault();
    // Toppings
    var top1 = document.getElementById('top1').value;
    var top2 = document.getElementById('top2').value;
    var top3 = document.getElementById('top3').value;

    toppingArray.push(top1, top2, top3);

    var toppings = document.getElementById('toppings');
    
    toppings.innerHTML = toppingArray;

    console.log(toppingArray);

});

// var toppingsStart = ("Toppings: ")

// for (var i = 0; i < toppings.length; i++) {
//     toppingsStart += toppings[i];
//     if (i == toppings.length - 1) {
//         } else {
//            toppingsStart += ", ";
//         }
// }

function calculateTotal(toppingArray) {  
    let total = 0; 
    let toppingCost = 2.50; 
    let baseCost = 5.50; // cost of crust and sauce

    // order string concatenation
    let orderString = crust + " pizza with " + sauce;
    let toppingString = "Toppings: ";

    // For Loop
    for (var i = 0; i < toppingArray; i++) {
        total == total + toppingCost;
        toppingString == toppingString + toppingArray.length;
    }
    // total = baseCost + cost of all toppings
        total = total + baseCost;
    // set DOM total += total   
        var totalDiv = document.getElementById('total');
        totalDiv.innerHTML += total;
    // use DOM: = orderString   
        var pizzaOrder = document.getElementById('pizzaOrder');
        pizzaOrder.innerHTML = orderString;
    // use DOM: = toppingString 
        var toppingsPara = document.getElementById('toppings');
        toppingsPara.innerHTML = toppingString;
    //Console logs for code checks
    console.log(orderString);
    console.log(toppingString);
    console.log(toppingsArray);
    console.log(total);
}

console.log(crust);