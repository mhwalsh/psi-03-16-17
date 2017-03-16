console.log('script sourced!');

var namesArray = ['Millie', 'Dev', 'Ben', 'Sean', 'Neota', 'Ryan'];

// console.log(namesArray[0]); //Millie
// console.log(namesArray[1]); //Dev

// loops
for (var i = 0; i < namesArray.length; i++) {
  console.log(appendBang(namesArray[i]));
}

// append or add ! to end of string pass into it
function appendBang(theString) {
  return theString + "!";
}
