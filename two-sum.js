var twoSum = function (nums, target) {
    const mapa = new Map();
    const solution = new Array();

    const addToMap = function (target, solution, element, index, array) {
        if (mapa.has(element)) {
            if (element * 2 == target) {
                solution.push(index);
                solution.push(mapa.get(element));
                throw finishedException;
            }
        } else {
            mapa.set(element, index);
        }
    }

    const processNumber = function (solution, targetto, value, key, map) {
        let targetSubtracted = targetto - key;
        if (map.has(targetSubtracted) && !(map.get(targetSubtracted) == value)) {
            solution.push(value);
            solution.push(map.get(targetSubtracted));
            throw finishedException;
        }
    }

    try {
        nums.forEach((element, index, array) => {
            addToMap(target, solution, element, index, array);
        });
        mapa.forEach((value, key, map) => {
            processNumber(solution, target, value, key, map);
        });
    } catch (error) {
        return solution;
    }
};
