var objectOmega = 
{
	scientists:  
	{
		blue: 
		{
			price: 200, 
			amount: 100,
			produce: 0,
			need: 2,
		},
		red: 
		{
			price: 40, 
			amount: 1000,
			produce: 100,
			need: 0,
		},
		yellow: 
		{
			price: 100, 
			amount: 500,
			produce: 10,
			need: 0.5,
		}
	},
	caravan:
	{
		blue: 
		{
			price: 100, 
			amount: 500,
			produce: 10,
			need: .5,

		},
		red: 
		{
			price: 200, 
			amount: 100,
			produce: 0,
			need: 2,

		},
		yellow: 
		{
			price: 40, 
			amount: 1000,
			produce: 100,
			need: 0,
		},
	},
	army: 
	{
		blue: 
		{
			price: 40, 
			amount: 1000,
			produce: 100,
			need: 0,

		},
		red: 
		{
			price: 100, 
			amount: 500,
			produce: 10,
			need: .5,
		},
		yellow: 
		{
			price: 200, 
			amount: 100,
			produce: 0,
			need: 2
		}
 	}
};	


var account = {red: 0, blue: 0, yellow: 0};
var cash = 10000;
var amount = 1;
var currentTradePartner = "";
console.log("CONNECTED");

$(document).ready(function(){
	$(".buy").hide();
	$(".sell").hide();
	$("#back").hide();
	$(".currentTrade").hide();
	document.getElementById("cash").innerHTML = "Cash: " + cash;
	console.log("main function working")

    $("#1xbuy").click(function(){
    	amount = 1;
    })
    $("#5xbuy").click(function(){
    	amount = 5;
    })
    $("#10xbuy").click(function(){
    	amount = 10;
    })
    $("#50xbuy").click(function(){
    	$(".buyAmount").css("background-color","light grey");
    	$("#50xbuy").css("background-color", "white");
    	amount = 50;
    })
    $("#100xbuy").click(function(){
    	$(".buyAmount").css("background-color","light grey");
    	// $("#100xbuy").css("background-color", "white");
    	amount = 100;
    })
    $("#tradeArmy").click(function(){
    	currentTradePartner = "army";
    	$("#armyTitle").show();
    	$(".trade").hide();
    	$(".buy").show();
    	$(".sell").show();
    	$("#back").show();
    })
    $("#tradeCaravan").click(function(){
    	currentTradePartner = "caravan";
    	$("#caravanTitle").show();
    	$(".trade").hide();
    	$(".buy").show();
    	$(".sell").show();
    	$("#back").show();
    })
    $("#tradeScientists").click(function(){
    	currentTradePartner = "scientists";
    	$("#scientistsTitle").show();
    	$(".trade").hide();
    	$(".buy").show();
    	$(".sell").show();
    	$("#back").show();
    })
    $("#back").click(function(){
    	$(".trade").show();
    	$(".buy").hide();
    	$(".sell").hide();
    	$("#back").hide();
    	$(".currentTrade").hide();
    })

    $("#buyRed").click(function(){
    	var price = objectOmega[currentTradePartner].red.price;
    	var totalStorage = objectOmega[currentTradePartner].red.amount;
    	if(price * amount <= cash){
    		console.log("purchased", amount, "red for", price * amount);
	    	cash -= price * amount;
	    	totalStorage -= amount;
	    	account.red += amount;
	    	console.log("in loop", "cash:",cash,"red:",account.red,"yellow:",account.yellow,"blue:",account.blue);
    	}
    })
    $("#buyYellow").click(function(){
    	var price = objectOmega[currentTradePartner].yellow.price;
    	var totalStorage = objectOmega[currentTradePartner].yellow.amount;
    	if(price * amount <= cash){
    		console.log("purchased", amount, "yellow for", price * amount);
	    	cash -= price * amount;
	    	totalStorage -= amount;
	    	account.yellow += amount;
	    	console.log("in loop", "cash:",cash,"red:",account.red,"yellow:",account.yellow,"blue:",account.blue);
    	}
    })
	$("#buyBlue").click(function(){
		var price = objectOmega[currentTradePartner].blue.price;
    	var totalStorage = objectOmega[currentTradePartner].blue.amount;
		if(price * amount <= cash){
			console.log("purchased", amount, "blue for", price * amount);
	    	cash -= price * amount;
	    	totalStorage -= amount;
	    	account.blue += amount;
			console.log("in loop", "cash:",cash,"red:",account.red,"yellow:",account.yellow,"blue:",account.blue);
		}
	})
    $("#sellRed").click(function(){
    	var price = objectOmega[currentTradePartner].red.price;
    	var totalStorage = objectOmega[currentTradePartner].red.amount;
    	if(account.red >= amount){
    		console.log("sold", amount, "red for", price * amount);
    		account.red -= amount;
    		cash += price * amount;
	    	console.log("in loop", "cash:",cash,"red:",account.red,"yellow:",account.yellow,"blue:",account.blue);
    	}
    })
    $("#sellYellow").click(function(){
    	var price = objectOmega[currentTradePartner].yellow.price;
    	var totalStorage = objectOmega[currentTradePartner].yellow.amount;
    	if(account.yellow >= amount){
    		console.log("sold", amount, "yellow for", price * amount);
    		account.yellow -= amount;
    		cash += price * amount;
	    	console.log("in loop", "cash:",cash,"red:",account.red,"yellow:",account.yellow,"blue:",account.blue);
    	}
    })
    $("#sellBlue").click(function(){
    	var price = objectOmega[currentTradePartner].blue.price;
    	var totalStorage = objectOmega[currentTradePartner].blue.amount;
    	if(account.blue >= amount){
    		console.log("sold", amount, "blue for", price * amount);
    		account.blue -= amount;
    		cash += price * amount;
	    	console.log("in loop", "cash:",cash,"red:",account.red,"yellow:",account.yellow,"blue:",account.blue);
    	}
    })
	console.log("in loop", "cash:",cash,"red:",account.red,"yellow:",account.yellow,"blue:",account.blue);
	$("button").click(function(){
		document.getElementById("cash").innerHTML = "Cash: " + cash;
	})

})



