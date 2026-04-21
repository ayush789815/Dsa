/**
 * Problem 2: Valid Palindrome
 * 
 * A phrase is a palindrome if, after converting all uppercase letters 
 * into lowercase letters and removing all non-alphanumeric characters, 
 * it reads the same forward and backward.
 * 
 * Example:
 *   validPalindrome("A man, a plan, a canal: Panama") => true
 *   validPalindrome("race a car") => false
 *   validPalindrome("0P") => false
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

function validPalindrome(s) {
    // Convert to lowercase and remove non-alphanumeric characters
    let cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    
    // Compare with reversed version
    let reversed = cleaned.split("").reverse().join("");
    
    return cleaned === reversed;
}

// Alternative: Using two-pointers (O(1) space approach)
function validPalindromeOptimal(s) {
    // Normalize: lowercase and keep only alphanumeric
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        // Skip non-alphanumeric from left
        while (left < right && !isAlphaNumeric(s[left])) {
            left++;
        }
        
        // Skip non-alphanumeric from right
        while (left < right && !isAlphaNumeric(s[right])) {
            right--;
        }
        
        // Compare characters (case-insensitive)
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }
        
        left++;
        right--;
    }
    
    return true;
}

// Helper function to check if character is alphanumeric
function isAlphaNumeric(char) {
    return /[a-z0-9]/i.test(char);
}

// Test cases
console.log('Testing validPalindrome function:\n');

console.log('Test 1: "A man, a plan, a canal: Panama"');
console.log('Output:', validPalindrome("A man, a plan, a canal: Panama")); // Output: true
console.log('Expected: true\n');

console.log('Test 2: "race a car"');
console.log('Output:', validPalindrome("race a car")); // Output: false
console.log('Expected: false\n');

console.log('Test 3: "0P"');
console.log('Output:', validPalindrome("0P")); // Output: false
console.log('Expected: false\n');

console.log('Test 4: " "');
console.log('Output:', validPalindrome(" ")); // Output: true
console.log('Expected: true\n');

console.log('Test 5: "a."');
console.log('Output:', validPalindrome("a.")); // Output: true
console.log('Expected: true\n');

console.log('Test 6: "ab_a"');
console.log('Output:', validPalindrome("ab_a")); // Output: true
console.log('Expected: true');

module.exports = { validPalindrome, validPalindromeOptimal };
