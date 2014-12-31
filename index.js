/*jslint node: true */
var util = require('util');

/** standard util has an _extend method, but it doesn't handle an undefined
target, nor does it allow multiple sources.
*/
util.extend = function(target /*, sources... */) {
  if (target === undefined) target = {};
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (source.hasOwnProperty(key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};

/** pushAll: use Array#push method, but unpack a single input array
into multiple arguments via Function.apply, rather than Function.call.

@param {Array} target: the array to extend with new items
@param {Array} items: array of new items

Similar to:

    target = target.concat(items);

*/
util.pushAll = function(target, items) {
  return Array.prototype.push.apply(target, items);
};

/** flatten: use Array#concat and unpack the given array into a bunch of
arrays, sending them all into a newly created array. Not recursive.
*/
util.flatten = function(arrays) {
  return Array.prototype.concat.apply([], arrays);
};

/** clone: deep-copy a plain object or array. There is no special handling for other
types of objects; it simply clones the reference.
*/
util.clone = function(obj) {
  if (util.isArray(obj)) {
    return obj.map(util.clone);
  }
  else if (typeof obj === 'object') {
    var copy = {};
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        copy[key] = util.clone(obj[key]);
      }
    }
    return copy;
  }
  else {
    return obj;
  }
};

/** toString: Expose standard util's objectToString internal function.
*/
util.toString = function(obj) {
  return Object.prototype.toString.call(obj);
};

module.exports = util;
