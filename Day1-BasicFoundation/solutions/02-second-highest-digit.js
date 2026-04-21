/**
 * Problem 2: Second Highest Digit in String
 * 
 * Find the second largest digit that appears in a string.
 * 
 * Example:
 *   secondHighest("dfa12321afd") => 2
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function secondHighest(s) {
    let first = -1;
    let second = -1;

    // Iterate through each character
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        
        // Check if character is a digit
        if (!isNaN(char) && char !== ' ') {
            let num = Number(char);
            
            // Update first and second based on current number
            if (num > first) {
                second = first;
                first = num;
            } else if (num < first && num > second) {
                second = num;
            }
        }
    }
    
    return second;
}

// Test cases
console.log('Testing secondHighest function:');
console.log('secondHighest("dfa12321afd") =', secondHighest("dfa12321afd")); // Output: 2
console.log('secondHighest("abc1def2ghi9") =', secondHighest("abc1def2ghi9")); // Output: 2
console.log('secondHighest("9") =', secondHighest("9")); // Output: -1 (no second)
console.log('secondHighest("98765432") =', secondHighest("98765432")); // Output: 7

module.exports = { secondHighest };
