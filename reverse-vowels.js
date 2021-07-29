var reverseVowels = function(s) {
    const vowels = new Set(["a", "e", "i", "o", "u"]);
    const chars = Array.from(s);
    const result = [...chars];
    const temp1 = [];
    for(let i=0; i < s.length; i++) {
        if(vowels.has(chars[i].toLowerCase())) {
            temp1.push({
                index: i
            });
        }
    }
    for(let i = 0; i < temp1.length; i++) {
        const toSwitch = chars[temp1[temp1.length - 1 - i].index];
        result[temp1[i].index] = toSwitch;
    }
    return result.join("");
};


const result = reverseVowels("hello");
console.log(result);