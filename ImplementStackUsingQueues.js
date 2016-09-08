/**
 * @constructor
 */
var Stack = function() {
    this.stack = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Stack.prototype.push = function(x) {
    this.stack.push(x);
};

/**
 * @returns {void}
 */
Stack.prototype.pop = function() {
    this.stack.pop();
};

/**
 * @returns {string} stack
 **/
 Stack.prototype.print = function() {
     console.log(this.stack);
 }

/**
 * @returns {number}
 */
Stack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @returns {boolean}
 */
Stack.prototype.empty = function() {
    if(this.stack.length === 0){
        return true;
    }else{
        return false;
    }
};
