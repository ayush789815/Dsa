/**
 * Problem 1: Length of Last Word
 * 
 * Given a string s consisting of words and spaces, 
 * return the length of the last word.
 * 
 * Definition of a Word: 
 *   A word is a maximal substring consisting of non-space characters only.
 * 
 * Example:
 *   lengthOfLastWord("Hello World") => 5
 *   lengthOfLastWord("   fly me   to   moon  ") => 4
 *   lengthOfLastWord("luffy is still joyboy") => 7
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n) - for the split array
 */

function lengthOfLastWord(s) {
    // Trim whitespace and split by spaces
    let words = s.trim().split(" ");
    
    // Filter out empty strings (in case of multiple spaces)
    words = words.filter(word => word.length > 0);
    
    // Get the last word and return its length
    if (words.length === 0) {
        return 0;
    }
    
    return words[words.length - 1].length;
}

// Alternative: More efficient approach
function lengthOfLastWordAlt(s) {
    // Trim and split by spaces, then get last element
    const words = s.trim().split(/\s+/); // \s+ matches one or more spaces
    return words[words.length - 1].length;
}

// Alternative: Without split (O(1) space)
function lengthOfLastWordOptimal(s) {
    let length = 0;
    
    // Start from the end and skip trailing spaces
    let i = s.length - 1;
    while (i >= 0 && s[i] === ' ') {
        i--;
    }
    
    // Count characters in the last word
    while (i >= 0 && s[i] !== ' ') {
        length++;
        i--;
    }
    
    return length;
}

// Test cases
console.log('Testing lengthOfLastWord function:\n');

console.log('Test 1: "Hello World"');
console.log('Output:', lengthOfLastWord("Hello World")); // Output: 5
console.log('Expected: 5\n');

console.log('Test 2: "   fly me   to   moon  "');
console.log('Output:', lengthOfLastWord("   fly me   to   moon  ")); // Output: 4
console.log('Expected: 4\n');

console.log('Test 3: "luffy is still joyboy"');
console.log('Output:', lengthOfLastWord("luffy is still joyboy")); // Output: 7
console.log('Expected: 7\n');

console.log('Test 4: "a"');
console.log('Output:', lengthOfLastWord("a")); // Output: 1
console.log('Expected: 1\n');

console.log('Test 5: "   "');
console.log('Output:', lengthOfLastWord("   ")); // Output: 0
console.log('Expected: 0\n');

console.log('Test 6: "a " (space at end)');
console.log('Output:', lengthOfLastWord("a ")); // Output: 1
console.log('Expected: 1');

module.exports = { lengthOfLastWord, lengthOfLastWordAlt, lengthOfLastWordOptimal };
