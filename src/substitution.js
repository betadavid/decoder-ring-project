// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const hasDuplicateCharaters = (string) => {
    for (let i=0; i<string.length-1; i++){
      const char = string[i];
      if(string.includes(char, i+1)) return true;
    };
    return false;
  };


  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if(!alphabet || alphabet.length !== 26 || alphabet.includes(" ") || hasDuplicateCharaters(alphabet)) return false;
    input = input.toLowerCase();
    const words = input.split(" ");
    let message = [];
    words.forEach(word => {
      const chars = word.split("");
      let charsMapped;
      if(encode){
        charsMapped = chars.map(char => alphabet["abcdefghijklmnopqrstuvwxyz".indexOf(char)]);
      }
      else{
        charsMapped = chars.map(char => "abcdefghijklmnopqrstuvwxyz"[alphabet.indexOf(char)]);
      };
      message.push(charsMapped.join(""));
    });
    return message.join(" ");
  };

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
