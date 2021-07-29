var isValid = function (s) {
    const kv = [['(', ')'], ['[', ']'], ['{', '}']];
    const mapa = new Map(kv);
    const kolejka = new Array();
    for (let c of s) {
        if (mapa.has(c)) {
            kolejka.push(c);
        } else if (mapa.get(kolejka[kolejka.length - 1]) == c) {
            kolejka.pop();
        } else
            return false;
    }
    return true;
};

const input = "([{}])";
console.log(isValid(input));