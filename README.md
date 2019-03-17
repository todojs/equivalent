# equivalent

`equivalent()` make a **universal** and **deep comparison** between two values to determine if they **are equivalent**.

It's a simple function with less than 120 lines of code Javascript for **nodejs** and the **browser**, without dependencies, very quick and very robust.
 
It **can compare** Arrays, Array Buffers, Booleans, Class, Date, Error, Maps, Numbers, Objects, Regexp, Sets, Strings, Symbols and Typed Arrays.

## Basic use

```js
equivalent( value1, value2 );
```
#### parameters

Must be all types of Javascript elements: arrays, array buffers, booleans, date, error, functions, maps, numbers, objects, regexp, sets, strings, symbols and typed arrays.

#### return

The function return `true` when the parameters are not equivalents and more than `false` when the values are equivalents.

#### Examples

- Basic types:
    ```js
    if (equivalent(1, 1)) { 
      // ... 
    }
    if (equivalent('hello', 'hello')) { 
      // ... 
    }
    if (equivalent(true, true)) { 
      // ... 
    }
    ```

- Dates:
    ```js
    var date1 = new Date(2016,11,31);
    var date2 = new Date(2016,11,31);
  
    if (equivalent(date1, date2)) { 
      // ... 
    }
    ```

- Objects:
    ```js
    var obj1 = {a: 1, b: 2};
    var obj2 = {a: 1, b: 2};
  
    if (equivalent(obj1, obj2)) { 
      // ... 
    }
    ```

- Arrays:
    ```js
    var arr1 = [{a: 1}, {b: 2}, 3];
    var arr2 = [{a: 1}, {b: 2}, 3];
  
    if (equivalent(arr1, arr2)) { 
      // ... 
    }
    ```
    
- Array Buffers:
    ```js
    var buffer1 = new ArrayBuffer(8);
    new Uint32Array(buffer1).set([1000000, 1100000]);
  
    var buffer2 = new ArrayBuffer(8);
    new Uint16Array(buffer2).set([16960, 15, 51424, 16]);
  
    if (equivalent(buffer1, buffer2)) {
      // ...
    }
    ```

- Map:
    ```js
    var keyObj = {};

    var map1 = new Map();
    map1.set('a', "value associated with a string");
    map1.set(1, "value associated with a number");
    map1.set(keyObj, "value associated with keyObj");
    
    var map2 = new Map();
    map2.set('a', "value associated with a string");
    map2.set(1, "value associated with a number");
    map2.set(keyObj, "value associated with keyObj");
    
    if (equivalent(map1, map2)) {
      console.log('Ok');
    }
    ```

## Tests

The ```test``` folder include a huge number of checked cases. This file use a simple ```console.assert()``` and don't have dependencies. You can use this test file on browser and Node.

./