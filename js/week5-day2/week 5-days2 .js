/*week 5 - practice 1
Using the ternary operator create a condition who checks if today is Tuesday */
function dayOfTheWeek(input) {

  let day = '';

  const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  day = weekDays[ new Date().getDay() ];

if(input == day){
  output = "Yes today is " + input
}
else {
  output = "No today is not " + input
}
console.log(output);
}

dayOfTheWeek("Tuesday"); /*we  //=> Yes today is Tuesday




/* Create an array containing 6 persons,
 girls and boys. Each person should have 2 keys, name and gender. */

let person = [

    {
        name : "Jack",
        gender : "Male"
    },

    {
      name : "Tom",
      gender : "Male"
    },

    {
      name : "Bob",
      gender : "Male"
    },

    {
      name : "Sarah",
      gender : "Female"
    },

    {
      name : "Sophie",
      gender : "Female"
    },

    {
      name : "Théa",
      gender : "Female"
    },
];

let numGirls = 0;
let numBoys = 0;

for( let i = 0; i < person.length; i++) {


  let gender = person[i].gender
  if(gender === "Female"){
    numGirls++
  }
  else {
    numBoys++
  }
  
    
 
}
let output = "My list contains: " + numGirls + "girls and " +numBoys + "boys"
console.log(output);


/* HTML DOM
------------------------ */

const h1 = document.querySelector('h1');

h1.innerHTML = "I change my text with new text 😎"

h1.setAttribute('id', 'main-title');
h1.classList.add('title');