//This function checks if the letter is Upper Case
function isUpperCase(letter) {
  return letter === letter.toUpperCase();
}

let caesarCipher = (string, key) => {
  let decipher = "";
  //decipher each letter
  for (let i = 0; i < string.length; i++) {
    //if letter is uppercase then add uppercase letters
    if (isUpperCase(string[i])) {
      decipher += String.fromCharCode(((string.charCodeAt(i) + key - 65) % 26) + 65);
    } else {
      //else add lowercase letters
      decipher += String.fromCharCode(((string.charCodeAt(i) + key - 97) % 26) + 97);
    }
  }

  return decipher;
};

module.exports = caesarCipher;
