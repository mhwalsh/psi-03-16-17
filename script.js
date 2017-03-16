console.log('script sourced!');

var namesArray = ['Millie', 'Dev', 'Ben', 'Sean', 'Neota', 'Ryan'];

// console.log(namesArray[0]); //Millie
// console.log(namesArray[1]); //Dev

// loops - we can write in three lines what would have taken 6
// using the above method.
for (var i = 0; i < namesArray.length; i++) {
  console.log(appendBang(namesArray[i]));
}

// append or add ! to end of string pass into it
// functions encapluate chucks of logic that can be reused anywhere in the program
function appendBang(theString) {
  return theString + "!";
}
