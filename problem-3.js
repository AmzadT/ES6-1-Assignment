// Write a function to convert a character to lower case
// Use this function to convert a given word to lower case
// Use that function to convert an array of strings to array of lower case strings

// Sample Input ["MA", "SA", "I", "SCH", "OOL"]
// Sample Output ["ma", "sa", "i", "sch", "ool"]


var Upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var Lower = "abcdefghijklmnopqrstuvwxyz";

var Lower_case = (char) => {
  let bag = "";

  for (let i = 0; i < Upper.length; i++) {
    if (char === Upper[i]) {
      bag += Lower[i];
      break;
    }
  }
  return bag;
};

var result = (arr) => {
  var output = [];

  for (let i = 0; i < arr.length; i++) {
    let str = arr[i];
    let bag = "";

    for (let j = 0; j < str.length; j++) {
      let new_char = Lower_case(str[j]);
      bag += new_char;
    }
    output.push(bag);
  }
  return output;
};

var output = result(["MA", "SA", "I", "SCH", "OOL"]);

console.log(output);
