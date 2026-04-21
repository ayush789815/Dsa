# Day 2 - Array Problems 🔗

Master array manipulation techniques including in-place modifications, searching, and optimization.

---

## Problems & Solutions

### 1️⃣ Remove Duplicate Elements (In-Place)
**Difficulty**: ⭐⭐ Medium  
**Topics**: Two-pointer technique, in-place modification, array manipulation

**Problem**: 
Given a sorted array of integers, remove the duplicate elements in-place and return the number of unique elements. The array is sorted in non-decreasing order.

**Constraints**:
- Must be done in-place (O(1) space)
- Return the count of unique elements
- The first k elements should contain unique elements

**Approach**:
- Use two pointers: one tracking unique elements (k), one scanning the array
- When a new unique element is found, place it at position k
- Increment k for each unique element
- Return k as the count of unique elements

**Example**:
```javascript
Input: [0,0,1,1,1,2,2,3,3,4]
Output: 5
Explanation: First 5 elements are [0,1,2,3,4]
```

**Solution**: [01-remove-duplicate.js](./solutions/01-remove-duplicate.js)

---

## 🎓 Key Concepts
- ✅ Two-pointer technique
- ✅ In-place modifications
- ✅ Array traversal optimization
- ✅ Handling sorted arrays efficiently

## 📊 Performance Summary
| Problem | Time Complexity | Space Complexity |
|---------|-----------------|------------------|
| Remove Duplicate | O(n) | O(1) |

---

**Status**: ✅ Complete  
**Total Problems**: 1
