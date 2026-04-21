# Day 3 - String Problems 📝

Master string manipulation techniques including parsing, pattern matching, and character analysis.

---

## Problems & Solutions

### 1️⃣ Length of Last Word
**Difficulty**: ⭐ Easy  
**Topics**: String parsing, splitting

**Problem**: 
Given a string s consisting of words and spaces, return the length of the last word in the string.

**Definition of a Word**:
- A word is a maximal substring consisting of non-space characters only

**Approach**:
- Trim whitespace from both ends
- Split by spaces to get individual words
- Get the last word and return its length

**Example**:
```javascript
lengthOfLastWord("Hello World")        // Output: 5
lengthOfLastWord("   fly me   to   moon  ")  // Output: 4
lengthOfLastWord("luffy is still joyboy")    // Output: 7
```

**Solution**: [01-length-of-last-word.js](./solutions/01-length-of-last-word.js)

---

### 2️⃣ Valid Palindrome
**Difficulty**: ⭐⭐ Medium  
**Topics**: String processing, two-pointers, regex

**Problem**: 
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.

**Approach**:
- Convert string to lowercase
- Remove non-alphanumeric characters using regex
- Compare with its reverse
- Return true if they match

**Example**:
```javascript
validPalindrome("A man, a plan, a canal: Panama")  // Output: true
validPalindrome("race a car")                       // Output: false
validPalindrome("0P")                               // Output: false
```

**Solution**: [02-valid-palindrome.js](./solutions/02-valid-palindrome.js)

---

### 3️⃣ Reverse Words in a String
**Difficulty**: ⭐⭐ Medium  
**Topics**: String manipulation, word reversal

**Problem**: 
Given a string, reverse the order of words while keeping the letters in each word intact.

**Approach**:
- Split the string by spaces to get individual words
- Reverse the array of words
- Join them back with spaces

**Example**:
```javascript
reverseWords("A man, a plan, a canal: Panama")  // Output: "Panama: canal a plan a man A"
reverseWords("the sky is blue")                 // Output: "blue is sky the"
```

**Solution**: [03-reverse-words.js](./solutions/03-reverse-words.js)

---

## 🎓 Key Concepts
- ✅ String parsing and splitting
- ✅ Regex for character filtering
- ✅ Two-pointer technique for validation
- ✅ Character-by-character analysis
- ✅ Word manipulation

## 📊 Performance Summary
| Problem | Time Complexity | Space Complexity |
|---------|-----------------|------------------|
| Length of Last Word | O(n) | O(n) |
| Valid Palindrome | O(n) | O(n) |
| Reverse Words | O(n) | O(n) |

---

**Status**: ✅ Complete  
**Total Problems**: 3
