function isPalindrome(word) {
  // Write your algorithm here
    for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
      const endIndex = word.length - 1 - startIndex;
      if (word[startIndex] !== word[endIndex]) {
        return false;
      }
    }
    return true;
  }

/* 
  Add your pseudocode here
  function isPalindrome(word) {
  // iterate from the beginning of the string to the middle of the string
  // compare the letter we're iterating over to the corresponding letter at the end of the string
  // if the letters don't match, return false
  // if we reach the middle, and all the letters match, return true
}
*/

/*
  Add written explanation of your solution here
  //iterate from the beginning to the middle of the string
  //compare the start index and end index
  //if the indexes don't match,return false
  // if if we reach the middle and all the letters matc, return true
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));
}

module.exports = isPalindrome;