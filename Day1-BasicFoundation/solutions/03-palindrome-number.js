/**
 * Problem 3: Palindrome Number
 * 
 * Determine if an integer is a palindrome without using string conversion.
 * 
 * Example:
 *   isPalindrome(121) => true
 *   isPalindrome(-121) => false
 *   isPalindrome(123) => false
 * 
 * Time Complexity: O(log n) - where n is the number
 * Space Complexity: O(1)
 */

function isPalindrome(num) {
    // Negative numbers are not palindromes
    // Numbers ending with 0 (except 0 itself) are not palindromes
    if (num < 0 || (num % 10 === 0 && num !== 0)) {
        return false;
    }

    // Store original for comparison
    let original = num;
    let reversed = 0;

    // Reverse the number by extracting digits
    while (num > 0) {
        let digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }

    return original === reversed;
}

// Test cases
console.log('Testing isPalindrome function:');
console.log('isPalindrome(121) =', isPalindrome(121)); // Output: true
console.log('isPalindrome(-121) =', isPalindrome(-121)); // Output: false
console.log('isPalindrome(123) =', isPalindrome(123)); // Output: false
console.log('isPalindrome(0) =', isPalindrome(0)); // Output: true
console.log('isPalindrome(10) =', isPalindrome(10)); // Output: false
console.log('isPalindrome(1001) =', isPalindrome(1001)); // Output: true

module.exports = { isPalindrome };
