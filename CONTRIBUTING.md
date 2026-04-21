# Contributing Guide

Welcome to the DSA Practice repository! This guide will help you maintain the professional organization of this project.

## Structure

```
Dsa/
├── README.md (Main overview)
├── .gitignore
├── Day1-BasicFoundation/
│   ├── README.md (Problem descriptions & context)
│   └── solutions/
│       ├── 01-sum-array.js
│       ├── 02-second-highest-digit.js
│       └── ... (more solutions)
├── Day2-Array/
│   ├── README.md
│   └── solutions/
│       └── ... (solutions)
└── Day3-String/
    ├── README.md
    └── solutions/
        └── ... (solutions)
```

## Adding New Problems

When adding a new problem:

### 1. Update the Day README
Add a new section following this template:

```markdown
### N️⃣ Problem Name
**Difficulty**: ⭐ Easy / Medium / Hard  
**Topics**: Relevant topics

**Problem**: 
Clear problem description

**Approach**:
- Step 1
- Step 2
- Step 3

**Solution**: [NN-problem-name.js](./solutions/NN-problem-name.js)
```

### 2. Create Solution File
Name format: `NN-problem-name.js` (NN = zero-padded number)

Include:
- JSDoc comment with problem description
- Example usage
- Time & Space complexity
- Main solution function
- Alternative approaches (if applicable)
- Comprehensive test cases with expected outputs

Example template:
```javascript
/**
 * Problem N: Problem Name
 * 
 * Problem description here...
 * 
 * Example:
 *   functionName(args) => expected output
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function functionName(input) {
    // Solution code
}

// Test cases
console.log('Testing functionName:');
console.log('Test 1:', functionName(args)); // Expected: output

module.exports = { functionName };
```

### 3. Update Main README
Add the problem to the progress table and update the total count.

## Code Quality Standards

- ✅ Use meaningful variable names
- ✅ Add comments for complex logic
- ✅ Include multiple test cases
- ✅ Show complexity analysis
- ✅ Provide alternative solutions when applicable
- ✅ Follow consistent formatting

## Commit Messages

Use clear, descriptive commit messages:

```
✨ Add Day1 Problem 1: Sum of Array
📝 Add documentation for Day2 Array problems
🐛 Fix edge case in palindrome checker
📚 Update README with new problem
```

## Testing Solutions

Run individual solutions:
```bash
node Day1-BasicFoundation/solutions/01-sum-array.js
```

## Progress Tracking

Update the main README with:
- New problems solved
- Updated problem count
- Difficulty levels
- Topics covered

---

Happy coding! 🚀
