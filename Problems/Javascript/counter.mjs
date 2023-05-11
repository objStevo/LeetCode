/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let counter = n
    return function() {
        return counter++;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 * Notes: https://leetcode.com/problems/counter/solutions/3491300/day2-o-1-understanding-closure-in-easy-way-and-its-practical-uses/
 */