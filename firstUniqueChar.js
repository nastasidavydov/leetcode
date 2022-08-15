/* Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1 */

const firstUniqChar = s => {
  const charCount = {};
    
    for (let char of s) {
        
        if (!charCount[char]) {
            charCount[char] = 0;
        }
        
        charCount[char]++;
    }
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        
        if (charCount[char] === 1) return i;
    }
    
    return -1;
}