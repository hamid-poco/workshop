/* DAYS 2
-----------------------------------*/
//returns the area of a surface in m2
function calculateSurface (x , y) {

  let userInput1 = parseInt( prompt("Put your length") );
  let userInput2 = parseInt( prompt("Put your width") );
  alert (userInput1*userInput2 + " " + "m2" );
}

console.log(calculateSurface());



//Returns the Remainder from Two Numbers
function remainder(x, y) {
	return x % y ;
}
console.log(remainder(5, 3));


//Frames Per Second
function minToSecPrompt() {

  let userInput = parseInt( prompt("Number of minutes") ); //by default it's a string
  alert(userInput + " minutes = " + (userInput * 60) + " seconds" );

}
minToSecPrompt();
 





//Extract City Facts
let myList = [

  {
    name:       "Zuiuch", 
    population:   "2,300,000", 
    continent:  "Europe"
  },

  {
    name:       "Lausanne", 
    population:   "1,500.000", 
    continent:  "Europe"
  },

  {
    name:       "Bern", 
    population:   "2,500,000", 
    continent:  "Europe"
  }
];



function myCityList(name, population, continent) {
  
    name = city.name;
    population = city.population;
    continent = city.continent;
    return name + ' has a population of ' + population + ' and is situated in ' + continent;
  }


//Calculate the Profit
profit({
  costPrice: 225.89,
  sellPrice: 550.00,
  inventory: 100
})

function profit(info) {
	return Math.round((info.sellPrice-info.costPrice)*info.inventory);
}















/* DAYS 4-5 
-------------------------------------*/
//Is the Number Less than or Equal to Zero?
function lessThanOrEqualToZero(num) {
	if(num <= 0)
		return true;
	else
		return false;
}
console.log(lessThanOrEqualToZero(2));



//Is the Number Even or Odd?
function isEvenOrOdd(num) {
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

console.log(isEvenOrOdd(3));


//Is the Word Singular or Plural?
function isPlural(word) {
	if(word.endsWith('')){
		return true;
	}
	else{
		return false;
	}
}

console.log(isPlural("s"));