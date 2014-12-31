## util-enhanced

Install like:

    npm install --save util-enhanced

Or in your `package.json`:

      "dependencies": {
        "util-enhanced": "*",
        ...
      }

Use like:

    var util = require('util-enhanced');


## API

### util.extend(target, ...sources)

Extend target with each object in sources, returning target. If target is
undefined, create a blank object. Later objects in sources overwrite keys
in prior sources or target.


### util.pushAll(target, items)

Calls Array#push with Function.apply to unpack a single input array into
multiple arguments.

    @param {Array} target: the array to extend with new items
    @param {Array} items: array of new items


### util.flatten(arrays)

Uses Array#concat with Function.apply to unpack the given array into a bunch
of arrays, combining them all into a newly created array. Not recursive.


### util.clone(obj)

Deep-copy a plain object or array. There is no special handling for other
types of objects; it simply copies everything else by reference.


### util.toString(obj)

Expose the standard util's objectToString internal function. Simply calls
Object.prototype.toString.call(obj).

    util.toString(null) #=> '[object Null]'
    util.toString(undefined) #=> '[object Undefined]'
    util.toString([1, 2, 3]) #=> '[object Array]'
    util.toString({name: 'Chris'}) #=> '[object Object]'
    util.toString(new Date()) #=> '[object Date]'
    util.toString(100) #=> '[object Number]'
    util.toString(true) #=> '[object Boolean]'


## License

Copyright 2014 Christopher Brown. [MIT Licensed](http://opensource.org/licenses/MIT).
