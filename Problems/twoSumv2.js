/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const intMap = new Map(),
    solution = [];

    if(target.length || nums === undefined)
        return [];

    nums.forEach((ele,i) => {
        if(intMap.has(target - ele) && solution.length === 0){
            solution.push(intMap.get(target - ele));
            solution.push(i);
        }
        intMap.set(ele,i);
    })


    return solution;
};