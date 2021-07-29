/**
 * @param {string} s
 * @return {number}
 */

const input = "abcabcbb";
var lengthOfLongestSubstring = function (s) {
    var uniques = new Set();
    let i = 0;
    let j = 0;
    let solution = 0;
    while (j < s.length) {
        let c = s.charAt(j);
        if (!uniques.has(c)) {
            uniques.add(c);
            j++;
        } else {
            let toRemove = s.charAt(i);
            uniques.delete(toRemove);
            i++;
        }
        if (uniques.size > solution)
            solution = uniques.size;
    }
    return solution;
};

console.log(lengthOfLongestSubstring(input));