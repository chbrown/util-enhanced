var util = require('util');

/** util.extend(target, ...sources)

Extend target with each object in sources, returning target. If target is
undefined, create a blank object. Later objects in sources overwrite keys
in prior sources or target.

The standard util has an _extend method, but it doesn't handle an undefined
target, nor does it allow multiple sources.
*/
util.extend = function(target /*, ...sources */) {
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

/** util.clone(obj)

Deep-copy a plain object or array. There is no special handling for other
types of objects; it simply copies everything else by reference.
*/
util.clone = function(obj) {
  // typeof null == 'object' (wat), so we check for that case early.
  if (obj === null) {
    return obj;
  }
  else if (util.isArray(obj)) {
    return obj.map(util.clone);
  }
  // typeof new Date() == 'object', so we check for that case too.
  else if (obj instanceof Date) {
    return new Date(obj);
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
    // typeof undefined == 'undefined', so that will pass through here,
    // along with strings, numbers, true, and false.
    return obj;
  }
};

/** util.toString(obj)

Expose the standard util's objectToString internal function. Simply calls
Object.prototype.toString.call(obj).

    util.toString(null) #=> '[object Null]'
    util.toString(undefined) #=> '[object Undefined]'
    util.toString([1, 2, 3]) #=> '[object Array]'
    util.toString({name: 'Chris'}) #=> '[object Object]'
    util.toString(new Date()) #=> '[object Date]'
    util.toString(100) #=> '[object Number]'
    util.toString(true) #=> '[object Boolean]'

*/
util.toString = function(obj) {
  return Object.prototype.toString.call(obj);
};

module.exports = util;
