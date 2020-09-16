/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const validBrackets = {
        '{':'}',
        '(':')',
        '[':']',
    };
    
    const stack = [] ;
    
    for (let i = 0; i < s.length; i++) {
        // stack[stack.length - 1] will be undefined at the beginning, so it will return false eg, 'c' === undefined will return false.
        //the first if statement will excute only when the condition return true
        if (s[i] === validBrackets[stack[stack.length - 1]]) {
            //The pop() method removes the last element of an array, and returns that element.
            stack.pop()
        } else {
            stack.push(s[i])
        }
    }
    
//!0 will return true;
//javascript consider 0 is false.
//!1 will return false;
    
    return !stack.length;
};