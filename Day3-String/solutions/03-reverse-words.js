/**
 * Problem 3: Reverse Words in a String
 * 
 * Given a string s, reverse the order of words.
 * A word is defined as a sequence of non-space characters.
 * 
 * Example:
 *   reverseWords("the sky is blue") => "blue is sky the"
 *   reverseWords("  Hello World  ") => "World Hello"
 *   reverseWords("a good   example") => "example good a"
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

function reverseWords(s) {
    // Trim, split by spaces, filter empty strings, and reverse
    return s
        .trim()
        .split(/\s+/)  // Split by one or more spaces
        .reverse()
        .join(" ");
}

// Alternative: Manual reversal with two-pointers
function reverseWordsManual(s) {
    // Convert to array for easier manipulation
    let chars = s.split("");
    
    // Reverse entire string
    reverse(chars, 0, chars.length - 1);
    
    // Reverse each word
    let start = 0;
    for (let i = 0; i <= chars.length; i++) {
        if (i === chars.length || chars[i] === " ") {
            reverse(chars, start, i - 1);
            start = i + 1;
        }
    }
    
    // Convert back to string and clean up spaces
    return chars.join("").trim().replace(/\s+/g, " ");
}

// Helper function to reverse a portion of array
function reverse(arr, start, end) {
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

// Test cases
console.log('Testing reverseWords function:\n');

console.log('Test 1: "the sky is blue"');
console.log('Output:', reverseWords("the sky is blue")); // Output: "blue is sky the"
console.log('Expected: "blue is sky the"\n');

console.log('Test 2: "  Hello World  "');
console.log('Output:', reverseWords("  Hello World  ")); // Output: "World Hello"
console.log('Expected: "World Hello"\n');

console.log('Test 3: "a good   example"');
console.log('Output:', reverseWords("a good   example")); // Output: "example good a"
console.log('Expected: "example good a"\n');

console.log('Test 4: "  Bob    Loves  Alice   "');
console.log('Output:', reverseWords("  Bob    Loves  Alice   ")); // Output: "Alice Loves Bob"
console.log('Expected: "Alice Loves Bob"\n');

console.log('Test 5: "hello"');
console.log('Output:', reverseWords("hello")); // Output: "hello"
console.log('Expected: "hello"');

module.exports = { reverseWords, reverseWordsManual };
