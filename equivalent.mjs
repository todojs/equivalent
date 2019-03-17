const NOT_EQUAL = false;                            // Return values
const EQUAL     = true;

export default function equivalent (a, b) {
  const aStack = [],                                // Stack array
        bStack = [];
  return (function check (a, b) {
    let aValue, bValue, aKeys, bKeys, key, i,       // Define variables
        aDescriptor, bDescriptor,
        aType = typeof a,                           // Get value types
        bType = typeof b;
    if (a === b) {                                  // Strict comparison
      return EQUAL;                                 // Equal value and type
    }
    if (aType === 'undefined' || bType === 'undefined' ||
        a === null || b === null)
    {                                               // undefined and null are always different
      return NOT_EQUAL;
    }
    if (aType === 'number' && bType === 'number' &&
        isNaN (a) && isNaN (b))
    {                                               // Special case: Not is a Number (NaN !== NaN)
      return EQUAL;
    }
    if (typeof a.valueOf === 'function' &&          // valueOf() is a function in both values
        typeof b.valueOf === 'function')
    {
      aValue = a.valueOf ();                        // Get valueOf()
      bValue = b.valueOf ();
      if (aValue !== a || bValue !== b) {           // The valueOf's return is different that the base value
        if (aValue === bValue) {                    // The valueOf's return is the same for both values
          if (a.constructor === b.constructor) {    // It's the same constructor and as result is the same type
            return EQUAL;
          }
          return NOT_EQUAL;                         // Strict comparison
        }
        return NOT_EQUAL;                           // Not equal
      }
    }
    if (aType !== bType) {                          // Different type is a not equal value from this point
      return NOT_EQUAL;
    }
    if (aType === 'object') {                       // Objects
      if (aStack.indexOf (a) > -1 &&
          bStack.indexOf (b) > -1)
      {                                              // Check if the object has been previously processed
        return EQUAL;
      }
      if ((a instanceof RegExp && b instanceof RegExp) ||
          (a instanceof Error && b instanceof Error))
      {                                             // RegExp and Error family objects
        if (a.toString () !== b.toString ()) {
          return NOT_EQUAL;
        }
      } else if (
        (a instanceof Map && b instanceof Map) ||   // Map
        (a instanceof Set && b instanceof Set))     // Set
      {
        if (a.size !== b.size) {                    // Check size
          return NOT_EQUAL;
        }
        i = a.size;
        if (i > 0) {
          if (a instanceof Map && b instanceof Map) {
            aKeys = Array.from (a.keys ());
            bKeys = Array.from (b.keys ());
            while (i--) {
              if (bKeys.indexOf (aKeys[ i ]) === -1 ||
                  !check (a.get (aKeys[ i ]), b.get (aKeys[ i ])))
              {
                return NOT_EQUAL;
              }
            }
            return EQUAL;
          }
          if (check (Array.from (a.values ()).sort (), Array.from (b.values ()).sort ())) {
            return EQUAL;
          }
          return NOT_EQUAL;
        }
      } else if (                                   // ArrayBuffer
        (a instanceof ArrayBuffer || a instanceof DataView) &&
        (b instanceof ArrayBuffer || b instanceof DataView))
      {
        aValue = a instanceof ArrayBuffer ? new DataView (a) : a;
        bValue = b instanceof ArrayBuffer ? new DataView (b) : b;
        if (aValue.byteLength !== bValue.byteLength) {  // Check size
          return NOT_EQUAL;
        }
        i = bValue.byteLength;                      // Check content
        while (i--) {
          if (aValue.getInt8 (i) !== bValue.getInt8 (i)) {
            return NOT_EQUAL;
          }
        }
      } else {                                      // Compare properties
        aKeys = Object.getOwnPropertyNames (a);     // Get properties keys (includes enumerable and non enumerable
        bKeys = Object.getOwnPropertyNames (b);     // properties and Symbols)
        if (aKeys.length !== bKeys.length) {        // Check number of properties keys
          return NOT_EQUAL;
        }
        if (aKeys.length > 0) {
          aStack.push (a);                          // Storage objects into stacks for recursive reference
          bStack.push (b);
          i = aKeys.length;
          while (i--) {                             // Check each property value (recursive call)
            key = aKeys[ i ];
            if (!check (a[ key ], b[ key ])) {
              return NOT_EQUAL;
            }
          }
        }
      }
      if (a.constructor === b.constructor) {        // It's the same constructor
        return EQUAL;                               // and as result is the equivalent object
      }
    }
    return NOT_EQUAL;                               // Not equal
  }) (a, b);
}