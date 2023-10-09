// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const matrix = ["abcde",
                  "fghik",
                  "lmnop",
                  "qrstu",
                  "vwxyz"];

  function getCode(char){
    if(char === "j") char = "i"; //matrix has only 'i' since i and j are treated as equal
    const row = matrix.findIndex(element => element.includes(char));
    if(row === -1) return char;
    const col = matrix[row].indexOf(char);
    return `${col+1}${row+1}`;
  };

  function getChar(code){
    if(code==="42") return "(i/j)";
    const row = Number(code[1]);
    const col = Number(code[0]);
    const char = matrix[row-1][col-1];
    return char;
  };

  function polybius(input, encode = true) {
    // your solution code here
    if(encode){
      let code = "";
      for (const char of input){
        code += getCode(char);
      };
      return code;
    }
    else{
      const words = input.split(" "); //turn into array of words
      const isOdd = (element) => element.length%2; //returns true if element length is odd
      if(words.some(isOdd)) return false;
      let message = [];
      words.forEach(word => {
        let decoded = "";
        for(let i=0; i<word.length; i+=2){
          decoded += getChar(word.slice(i, i+2));
        }
        message.push(decoded);
      });
      return message.join(" ");
    }
  };

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
