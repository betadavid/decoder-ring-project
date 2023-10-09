// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const shiftChar = (char, shift) => {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
                      'n', 'o', 'p', 'q','r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const charIndex = alphabet.findIndex(letter => letter === char);
    if(charIndex === -1) return char;
    let newIndex = charIndex + shift;
    if (newIndex > alphabet.length - 1) newIndex -= alphabet.length;
    if (newIndex < 0) newIndex += alphabet.length;
    return alphabet[newIndex];
  };

  function caesar(input, shift, encode = true) {
    // your solution code here
    if(!shift) return false;
    if (shift > 25 || shift < -25) return false;
    if(!encode) shift *= -1; //change direction when decoding
    input = input.toLowerCase(); //ignore uppercase letters
    let message = "";
    for (let i=0; i<input.length; i++){
      const char = input.charAt(i);
      message += shiftChar(char, shift);
    }
    return message;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
