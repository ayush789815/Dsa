# DSA Practice - Test Runner

This file shows how to run all solutions for testing purposes.

## Package structure

```
Dsa/
├── Day1-BasicFoundation/solutions/  (7 problems)
├── Day2-Array/solutions/            (1 problem)
└── Day3-String/solutions/           (3 problems)
```

## Running Individual Solutions

### Day 1 - Basic Foundation

```bash
# Sum of Array
node Day1-BasicFoundation/solutions/01-sum-array.js

# Second Highest Digit
node Day1-BasicFoundation/solutions/02-second-highest-digit.js

# Palindrome Number
node Day1-BasicFoundation/solutions/03-palindrome-number.js

# Reverse Integer
node Day1-BasicFoundation/solutions/04-reverse-integer.js

# Count Negative Numbers
node Day1-BasicFoundation/solutions/05-count-negative.js

# Find Smallest Number
node Day1-BasicFoundation/solutions/06-find-smallest.js

# Find Largest Number
node Day1-BasicFoundation/solutions/07-find-largest.js
```

### Day 2 - Arrays

```bash
# Remove Duplicate Elements
node Day2-Array/solutions/01-remove-duplicate.js
```

### Day 3 - Strings

```bash
# Length of Last Word
node Day3-String/solutions/01-length-of-last-word.js

# Valid Palindrome
node Day3-String/solutions/02-valid-palindrome.js

# Reverse Words
node Day3-String/solutions/03-reverse-words.js
```

## Running All Tests

To run all tests at once, use this command:

```bash
# Run all Day 1 solutions
for file in Day1-BasicFoundation/solutions/*.js; do echo "=== Running $file ===" && node "$file" && echo ""; done

# Run all Day 2 solutions
for file in Day2-Array/solutions/*.js; do echo "=== Running $file ===" && node "$file" && echo ""; done

# Run all Day 3 solutions
for file in Day3-String/solutions/*.js; do echo "=== Running $file ===" && node "$file" && echo ""; done

# Run everything
for dir in Day*/solutions; do for file in "$dir"/*.js; do echo "=== Running $file ===" && node "$file" && echo ""; done; done
```

## Expected Output

Each solution file includes test cases with:
- ✅ Input examples
- ✅ Actual output
- ✅ Expected results
- ✅ Edge case handling

All solutions should run without errors and display their test results.
