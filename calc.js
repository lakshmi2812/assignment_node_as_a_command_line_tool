/*1)Take the user input
  2)Convert it to string
  3)Split the user input and store in array
  4)Iterate through the array and check if each element has a character or a number
  5)If the elements having chars match a certain string value, it is mapped to itscorresponding function
  6)The elements that are numbers should be passed as arguments to the functions
  7)The mapping function should be inside a process that accepts stdin from the user
  8)If the first character is a '-', redirect to functions that give out info about calc.js
  */

  let calculator = require('./calc_module');
  let fs = require('fs');
  let json = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  //version = json.version

  let math = new calculator();

  process.stdin.resume();
  process.stdin.setEncoding('utf-8');

  process.stdin.on('data', (data)=>
  {
    data = data.trim();
    data = String(data);
    newArray = data.split(' ');
    console.log(newArray);

    /*if (data.charAt(0) === '-'){
      if(data === '-v' || data === '--version'){
        console.log(json.version);
      }
    }*/
    if (typeof newArray[0] === 'string'){
      let string = newArray[0];
      let nums = newArray.slice(1);
      let new_nums = nums.map(function(elem, index, arr){
        return Number(elem);
      });
      if (newArray[0] === 'add'){
          console.log(math.add(new_nums));
      }
    }
  });
