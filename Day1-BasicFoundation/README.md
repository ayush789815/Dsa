# Day 1 - Basic Foundation Problems 🎯

Learn fundamental programming concepts including arithmetic operations, number manipulation, and array basics.

---

## Problems & Solutions

### 1️⃣ Sum of Array
**Difficulty**: ⭐ Easy  
**Topics**: Variadic functions, loops

**Problem**: 
Calculate the sum of multiple numbers passed as arguments.

**Approach**:
- Use rest parameters to accept multiple arguments
- Iterate through all arguments and accumulate the sum

**Solution**: [01-sum-array.js](./solutions/01-sum-array.js)

---

### 2️⃣ Second Highest Digit in String
**Difficulty**: ⭐ Easy  
**Topics**: String traversal, digit extraction

**Problem**: 
Find the second largest digit in a string containing letters and numbers.

**Approach**:
- Iterate through the string
- Check if each character is a digit
- Track the largest and second-largest digits found

**Solution**: [02-second-highest-digit.js](./solutions/02-second-highest-digit.js)

---

### 3️⃣ Palindrome Number
**Difficulty**: ⭐ Easy  
**Topics**: Number reversal, logic

**Problem**: 
Determine if an integer is a palindrome without converting to string.

**Approach**:
- Reverse the number by extracting digits
- Compare with the original number
- Handle negative numbers and trailing zeros

**Solution**: [03-palindrome-number.js](./solutions/03-palindrome-number.js)

---

### 4️⃣ Reverse Integer
**Difficulty**: ⭐⭐ Medium  
**Topics**: Number manipulation, mathematical operations

**Problem**: 
Reverse the digits of a signed integer.

**Approach**:
- Store the sign separately
- Reverse the absolute value
- Apply the sign back to the result

**Solution**: [04-reverse-integer.js](./solutions/04-reverse-integer.js)

---

### 5️⃣ Count Negative Numbers
**Difficulty**: ⭐ Easy  
**Topics**: Array iteration, conditionals

**Problem**: 
Count the number of negative integers in an array.

**Approach**:
- Iterate through the array
- Count elements that are less than 0

**Solution**: [05-count-negative.js](./solutions/05-count-negative.js)

---

### 6️⃣ Find Smallest Number in Array
**Difficulty**: ⭐ Easy  
**Topics**: Array searching, validation

**Problem**: 
Find the minimum value in an array with proper error handling.

**Approach**:
- Validate input is an array
- Initialize smallest to Infinity
- Compare each element and update the smallest

**Solution**: [06-find-smallest.js](./solutions/06-find-smallest.js)

---

### 7️⃣ Find Largest Number in Array
**Difficulty**: ⭐ Easy  
**Topics**: Array searching

**Problem**: 
Find the maximum value in an array.

**Approach**:
- Similar to smallest but tracking the largest instead

**Solution**: [07-find-largest.js](./solutions/07-find-largest.js)

---

## 🎓 Key Concepts
- ✅ Loops and iterations
- ✅ Number and string manipulation
- ✅ Array traversal
- ✅ Input validation
- ✅ Edge case handling

## 📊 Performance Summary
| Problem | Time Complexity | Space Complexity |
|---------|-----------------|------------------|
| Sum | O(n) | O(1) |
| Second Highest Digit | O(n) | O(1) |
| Palindrome | O(log n) | O(1) |
| Reverse Integer | O(log n) | O(1) |
| Count Negative | O(n) | O(1) |
| Find Smallest | O(n) | O(1) |
| Find Largest | O(n) | O(1) |

---

**Status**: ✅ Complete  
**Total Problems**: 7
