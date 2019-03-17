// jshint esversion: 6, node: true
"use strict";

import equivalent from '../equivalent.mjs';

test ();

function test () {
  
  console.log ('equivalent()');
  
  console.log ('must be a function');
  console.assert (typeof equivalent === 'function', `typeof equivalent === 'function'`);
  console.assert (equivalent.length === 2, `equivalent.length === 2`);
  console.assert (equivalent.name === 'equivalent', `equivalent.name === 'equivalent'`);
  console.log ('-- Ok');
  
  console.log ('should make comparison');
  console.assert (equivalent ("", ""), `equivalent ("", "")`);
  console.assert (!equivalent ("Hello", "hello"), `!equivalent ("Hello", "hello")`);
  console.assert (equivalent ("Hello", "Hello"), `equivalent ("Hello", "Hello")`);
  console.assert (equivalent (true, true), `equivalent (true, true)`);
  console.assert (equivalent (false, false), `equivalent (false, false)`);
  console.assert (!equivalent (true, false), `!equivalent (true, false)`);
  console.assert (!equivalent (true, 1), `!equivalent (true, 1)`);
  console.assert (!equivalent (true, 0), `!equivalent (true, 0)`);
  console.assert (!equivalent (true, "hello"), `!equivalent (true, "hello")`);
  console.assert (!equivalent (true, ''), `!equivalent (true, '')`);
  console.assert (!equivalent (false, 0), `!equivalent (false, 0)`);
  console.assert (!equivalent (false, ""), `!equivalent (false, "")`);
  console.assert (!equivalent (false, "hello"), `!equivalent (false, "hello")`);
  console.assert (!equivalent (null, 0), `!equivalent (null, 0)`);
  console.assert (equivalent (null, null), `equivalent (null, null)`);
  console.assert (!equivalent (null, "null"), `!equivalent (null, "null")`);
  console.assert (equivalent (1, 1), `equivalent (1, 1)`);
  console.assert (!equivalent (1, 0), `!equivalent (1, 0)`);
  console.assert (!equivalent (1, "1"), `!equivalent (1, "1")`);
  console.assert (!equivalent (1, "0"), `!equivalent (1, "0")`);
  console.assert (!equivalent (1.0001, 1.00009), `!equivalent (1.0001, 1.00009)`);
  console.assert (equivalent (1.0001, 1.0001), `equivalent (1.0001, 1.0001)`);
  console.assert (!equivalent (1.0001, '1.00009'), `!equivalent (1.0001, '1.00009')`);
  console.assert (!equivalent (1.0001, '1.0001'), `!equivalent (1.0001, '1.0001')`);
  console.assert (equivalent (undefined, undefined), `equivalent (undefined, undefined)`);
  console.assert (!equivalent (undefined, ""), `!equivalent (undefined, "")`);
  console.assert (!equivalent (undefined, 1), `!equivalent (undefined, 1)`);
  console.assert (!equivalent (undefined, false), `!equivalent (undefined, false)`);
  console.assert (!equivalent (undefined, null), `!equivalent (undefined, null)`);
  console.assert (!equivalent (undefined, {}), `!equivalent (undefined, {})`);
  console.log ('-- Ok');
  
  
  console.log ('NaN vs NaN should be true');
  console.assert (equivalent (NaN, NaN), `equivalent (NaN, NaN)`);
  
  console.log ('-- Ok');
  
  console.log ('Date should be compared by its internal number');
  var date1 = new Date ();
  var date2 = date1;
  var date3 = new Date ('2015-01-01');
  var date4 = new Date (date1.getTime ());
  console.assert (equivalent (date1, date2), `equivalent (date1, date2)`);
  console.assert (!equivalent (date1, date3), `!equivalent (date1, date3)`);
  console.assert (equivalent (date1, date4), `equivalent (date1, date4)`);
  console.log ('-- Ok');
  
  console.log ('String wrapper should be compared as a string');
  // jshint -W053
  var string1 = new String ('hello');
  var string2 = string1;
  var string3 = new String ('other');
  var string4 = new String ('hello');
  // jshint -W053
  var string5 = 'hello';
  var string6 = 'HELLO';
  var string7 = 'HELLO';
  console.assert (equivalent (string1, string2), `equivalent (string1, string2)`);
  console.assert (!equivalent (string1, string3), `!equivalent (string1, string3)`);
  console.assert (equivalent (string1, string4), `equivalent (string1, string4)`);
  console.assert (equivalent (string1, string5), `equivalent (string1, string5)`);
  console.assert (!equivalent (string1, string6), `!equivalent (string1, string6)`);
  console.assert (equivalent (string6, string7), `equivalent (string6, string7)`);
  console.log ('-- Ok');
  
  console.log ('Number wrapper should be compared as a number');
  // jshint -W053
  var number1 = new Number (10.10);
  var number2 = number1;
  var number3 = new Number (20.20);
  var number4 = new Number (10.10);
  // jshint +W053
  var number5 = 10.10;
  var number6 = 10;
  var number7 = 10;
  console.assert (equivalent (number1, number2), `equivalent (number1, number2)`);
  console.assert (!equivalent (number1, number3), `!equivalent (number1, number3)`);
  console.assert (equivalent (number1, number4), `equivalent (number1, number4)`);
  console.assert (equivalent (number1, number5), `equivalent (number1, number5)`);
  console.assert (!equivalent (number1, number6), `!equivalent (number1, number6)`);
  console.assert (equivalent (number6, number7), `equivalent (number6, number7)`);
  console.log ('-- Ok');
  
  console.log ('Boolean wrapper should be compared as a boolean');
  // jshint -W053
  var boolean1 = new Boolean (false);
  var boolean2 = boolean1;
  var boolean3 = new Boolean (true);
  var boolean4 = new Boolean (false);
  // jshint +W053
  var boolean5 = false;
  var boolean6 = true;
  var boolean7 = true;
  console.assert (equivalent (boolean1, boolean2), `equivalent (boolean1, boolean2)`);
  console.assert (!equivalent (boolean1, boolean3), `!equivalent (boolean1, boolean3)`);
  console.assert (equivalent (boolean1, boolean4), `equivalent (boolean1, boolean4)`);
  console.assert (equivalent (boolean1, boolean5), `equivalent (boolean1, boolean5)`);
  console.assert (!equivalent (boolean1, boolean6), `!equivalent (boolean1, boolean6)`);
  console.assert (equivalent (boolean6, boolean7), `equivalent (boolean6, boolean7)`);
  console.log ('-- Ok');
  
  
  var date5   = new Date ();
  var numDate = date5.valueOf ();
  console.assert (!equivalent (date5, numDate), `!equivalent (date5, numDate)`);
  
  console.log ('-- Ok');
  
  
  // jshint -W053
  var number10 = new Number (99);
  var number11 = 99;
  var string10 = new String ("99");
  var string11 = "99";
  // jshint +W053
  console.assert (!equivalent (number10, string10), `!equivalent (number10, string10)`);
  
  console.assert (!equivalent (number10, string11), `!equivalent (number10, string11)`);
  
  console.log ('-- Ok');
  
  console.log ('Two simple objects should be compared by its properties');
  var obj1 = {a : 0, b : 1, c : 3, d : 4, e : 5, f : 6, g : 7, h : 8, i : 9, j : 10, k : 11};
  var obj2 = obj1;
  var obj3 = {a : 1, b : 1, c : 3, d : 4, e : 5, f : 6, g : 7, h : 8, i : 9, j : 10, k : 11};
  var obj4 = {a : 0, b : 1, c : 3, d : 4, e : 5, f : 6, g : 7, h : 8, i : 9, j : 10, m : 11};
  var obj5 = {a : 0, b : 1, c : 3, d : 4, e : 5, f : 6, g : 7, h : 8, i : 9, j : 10, k : 11};
  console.assert (equivalent (obj1, obj2), `equivalent (obj1, obj2)`);
  console.assert (!equivalent (obj1, obj3), `!equivalent (obj1, obj3)`);
  console.assert (!equivalent (obj1, obj4), `!equivalent (obj1, obj4)`);
  console.assert (equivalent (obj1, obj5), `equivalent (obj1, obj5)`);
  
  
  console.log ('-- Ok');
  
  console.log ('The object constructor should is revelant for the comparison');
  var emptyObject1 = {};
  var emptyObject2 = emptyObject1;
  var emptyObject3 = {a : null};
  var emptyObject4 = Object.create ({});
  var emptyObject5 = Object.create (null);
  console.assert (equivalent (emptyObject1, emptyObject2), `equivalent (emptyObject1, emptyObject2)`);
  console.assert (!equivalent (emptyObject1, emptyObject3), `!equivalent (emptyObject1, emptyObject3)`);
  console.assert (equivalent (emptyObject1, emptyObject4), `equivalent (emptyObject1, emptyObject4)`);
  console.assert (!equivalent (emptyObject1, emptyObject5), `!equivalent (emptyObject1, emptyObject5)`);
  console.log ('-- Ok');
  
  console.log ('Two deep objects should be compared by its properties');
  var nestedObject1  = {o1 : {a : 1, b : true, c : 'hello', d : {n : [ 99 ]}}, o2 : [ 0, 1, 2, 3 ]};
  var nestedObject2  = nestedObject1;
  var nestedObject3  = {o1 : {a : 1, b : true, c : 'hello', d : {n : [ 100 ]}}, o2 : [ 0, 1, 2, 3 ]};
  var nestedObject4  = {o1 : {a : 1, b : true, c : 'hello', d : {n : [ 99 ]}}, o2 : [ 0, 1, 2, 3 ]};
  var nestedObject5  = Object.create (null);
  nestedObject5.o1   = {a : 1, b : true, c : 'hello'};
  nestedObject5.o1.d = {n : [ 99 ]};
  nestedObject5.o2   = [ 0, 1, 2, 3 ];
  console.assert (equivalent (nestedObject1, nestedObject2), `equivalent (nestedObject1, nestedObject2)`);
  console.assert (!equivalent (nestedObject1, nestedObject3), `!equivalent (nestedObject1, nestedObject3)`);
  console.assert (equivalent (nestedObject1, nestedObject4), `equivalent (nestedObject1, nestedObject4)`);
  console.assert (!equivalent (nestedObject1, nestedObject5), `!equivalent (nestedObject1, nestedObject5)`);
  
  
  console.log ('-- Ok');
  
  console.log ('Two simple arrays should be compared by its content');
  var array1 = [ 0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11 ];
  var array2 = array1;
  var array3 = [ 0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 10 ];
  var array4 = [ 0, 1, 3, 4, 5, 6, 7, 8, 9, 10 ];
  var array5 = [ 0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11 ];
  console.assert (equivalent (array1, array2), `equivalent (array1, array2)`);
  console.assert (!equivalent (array1, array3), `!equivalent (array1, array3)`);
  console.assert (!equivalent (array1, array4), `!equivalent (array1, array4)`);
  console.assert (equivalent (array1, array5), `equivalent (array1, array5)`);
  var tmpDate = new Date ();
  var multi1  = [ 0, true, false, tmpDate, [ 0, 1, 2, 3 ], {a : 1}, 'hello', [ [ true, false ], [ {b : 2}, {b : 3} ] ] ];
  var multi2  = multi1;
  var multi3  = [ 0, true, false, tmpDate, [ 0, 1, 2, 3 ], {a : 1}, 'hello', [ [ true, false ], [ {b : 2}, {b : 4} ] ] ];
  var multi4  = [ 0, 1, 2, 3, 4, 5, 6, 7 ];
  var multi5  = [ 0, true, false, tmpDate, [ 0, 1, 2, 3 ], {a : 1}, 'hello', [ [ true, false ], [ {b : 2}, {b : 3} ] ] ];
  console.assert (equivalent (multi1, multi2), `equivalent (multi1, multi2)`);
  console.assert (!equivalent (multi1, multi3), `!equivalent (multi1, multi3)`);
  console.assert (!equivalent (multi1, multi4), `!equivalent (multi1, multi4)`);
  console.assert (equivalent (multi1, multi5), `equivalent (multi1, multi5)`);
  
  
  console.log ('-- Ok');
  
  console.log ('Two arrays should be compared by its content and properties');
  var arrObj1      = [ 1, 2, 3, 4, 5 ];
  arrObj1.property = 'hello';
  var arrObj2      = [ 1, 2, 3, 4, 5 ];
  arrObj2.property = 'hello';
  var arrObj3      = [ 1, 2, 3, 4, 5 ];
  arrObj3.property = 'Bye';
  var arrObj4      = [ 1, 2, 3, 4, 5 ];
  console.assert (equivalent (arrObj1, arrObj2), `equivalent (arrObj1, arrObj2)`);
  console.assert (!equivalent (arrObj1, arrObj3), `!equivalent (arrObj1, arrObj3)`);
  console.assert (!equivalent (arrObj1, arrObj4), `!equivalent (arrObj1, arrObj4)`);
  console.log ('-- Ok');
  
  console.log ('Sparse array must be managed without problems');
  // jshint -W128
  var sparse1 = [ 0, , 3, , 5, , 7, , 9, , 11 ];
  // jshint +W128
  var sparse2 = sparse1;
  var sparse3 = [ 0, 1, 3, 4, 5, 6, 7, 8, 9, 10 ];
  var sparse4 = [ 0, undefined, 3, undefined, 5, undefined, 7, undefined, 9, undefined, 11 ];
  var sparse5 = [ 0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11 ];
  delete sparse5[ 1 ];
  delete sparse5[ 3 ];
  delete sparse5[ 5 ];
  delete sparse5[ 7 ];
  delete sparse5[ 9 ];
  console.assert (equivalent (sparse1, sparse2), `equivalent (sparse1, sparse2)`);
  console.assert (!equivalent (sparse1, sparse3), `!equivalent (sparse1, sparse3)`);
  console.assert (!equivalent (sparse1, sparse4), `!equivalent (sparse1, sparse4)`);
  console.assert (equivalent (sparse1, sparse5), `equivalent (sparse1, sparse5)`);
  console.log ('-- Ok');
  
  
  var array10    = [ 0, 1, 2 ];
  var arrayLike1 = {'0' : 0, '1' : 1, '2' : 2};
  Object.defineProperty (arrayLike1, 'length', {enumerable : false, configurable : false, writable : true, value : 3});
  var arrayLike2 = {'0' : 0, '1' : 1, '2' : 2, 'length' : 3};
  console.assert (!equivalent (array10, arrayLike1), `!equivalent (array10, arrayLike1)`);
  
  
  console.log ('-- Ok');
  
  console.log ('Objects from function constructor with private properties (obj._b)');
  
  function Constructor1 (a) {
    this.a  = a;
    this._b = a * 2;
  }
  
  function Constructor2 (a) {
    this.a  = a;
    this._b = a * 2;
  }
  
  function Constructor3 (a) {
    this.a  = a;
    this._b = a * 3;
  }
  
  var instance11  = new Constructor1 (1);
  var instance11b = instance11;
  var instance11d = new Constructor1 (1);
  var instance12  = new Constructor1 (2);
  var instance21  = new Constructor2 (1);
  var instance22  = new Constructor2 (2);
  var instance31  = new Constructor3 (1);
  var instance32  = new Constructor3 (2);
  console.assert (equivalent (instance11, instance11b), `equivalent (instance11, instance11b)`);
  console.assert (equivalent (instance11, instance11d), `equivalent (instance11, instance11d)`);
  console.assert (!equivalent (instance11, instance21), `!equivalent (instance11, instance21)`);
  
  
  console.assert (!equivalent (instance11, instance31), `!equivalent (instance11, instance31)`);
  
  
  console.assert (!equivalent (instance11, instance12), `!equivalent (instance11, instance12)`);
  console.assert (!equivalent (instance21, instance22), `!equivalent (instance21, instance22)`);
  console.assert (!equivalent (instance12, instance22), `!equivalent (instance12, instance22)`);
  
  
  console.assert (!equivalent (instance12, instance32), `!equivalent (instance12, instance32)`);
  
  
  console.log ('-- Ok');
  
  console.log ('Object with enumerate and not enumerate properties');
  var notEnumerable = {};
  Object.defineProperties (notEnumerable, {
    "a"  : {value : 1, enumerable : false},
    "b"  : {value : 2, enumerable : false},
    "_d" : {value : 3, enumerable : false}
  });
  var enumerableEmpty = {};
  var enumerable      = {a : 1, b : 2, _d : 3};
  console.assert (equivalent (notEnumerable, enumerable), `equivalent (notEnumerable, enumerable)`);
  console.assert (!equivalent (notEnumerable, enumerableEmpty), `!equivalent (notEnumerable, enumerableEmpty)`);
  
  console.assert (!equivalent (enumerable, enumerableEmpty), `!equivalent (enumerable, enumerableEmpty)`);
  console.assert (equivalent ({}, enumerableEmpty), `equivalent ({}, enumerableEmpty)`);
  
  
  console.log ('-- Ok');
  
  console.log ('Objects from class properties created in different levels');
  var priv = new WeakMap ();
  
  class Parent {
    constructor (x) {
      this.x = x;
      priv.set (this, {});
    }
    
    get a () {
      return priv.get (this).a;
    }
    
    set a (value) {
      var tmp = priv.get (this);
      tmp.a   = value;
      priv.set (this, tmp);
    }
  }
  
  class Child extends Parent {
    constructor (x, y) {
      super (x);
      this.y = y;
      priv.set (this, {});
    }
    
    get b () {
      return priv.get (this).b;
    }
    
    set b (value) {
      var tmp = priv.get (this);
      tmp.b   = value;
      priv.set (this, tmp);
    }
  }
  
  var c1 = new Child (10, 20);
  c1.a   = 1;
  c1.b   = 2;
  var c2 = new Child (10, 20);
  c2.a   = 1;
  c2.b   = 2;
  var c3 = new Child (-10, 20);
  c3.a   = 0;
  c3.b   = 2;
  var c4 = new Child (10, -20);
  c4.a   = 1;
  c4.b   = 0;
  console.assert (equivalent (c1, c2), `equivalent (c1, c2)`);
  console.assert (!equivalent (c1, c3), `equivalent (c1, c3)`);
  console.assert (!equivalent (c1, c4), `!equivalent (c1, c4)`);
  
  console.log ('-- Ok');
  
  
  console.log ('Object with writable and not writable, configurable and not configurable properties ');
  var notWritable = {};
  Object.defineProperties (notWritable, {a : {value : 1, writable : false, enumerable : true}, b : {value : 2, writable : false, enumerable : true}});
  var writable = {a : 1, b : 2};
  console.assert (equivalent (notWritable, writable), `equivalent (notWritable, writable)`);
  
  
  var notConfigurable = {};
  Object.defineProperties (notConfigurable, {a : {value : 1, configurable : false, enumerable : true}, b : {value : 2, configurable : false, enumerable : true}});
  var configurable = {a : 1, b : 2};
  console.assert (equivalent (notConfigurable, configurable), `equivalent (notConfigurable, configurable)`);
  
  
  console.log ('-- Ok');
  
  console.log ('Object with self reference (circular reference)');
  var circular1 = {
    a : [ 1, 2, 3 ],
    b : new Date (2016, 11, 24),
    c : "Hello",
    d : {
      a : [ 1, 2, 3 ]
    }
  };
  circular1.e   = circular1;
  var circular2 = circular1;
  var circular3 = {
    a : [ 1, 2, 3 ],
    b : new Date (2016, 11, 24),
    c : "Hello",
    d : {
      a : [ 1, 2, 3 ]
    }
  };
  circular3.e   = circular3;
  var circular4 = {
    a : [ 1, 2, 3 ],
    b : new Date (2016, 11, 24),
    c : "Hello",
    d : {
      a : [ 1, 2, 3 ]
    },
    e : {}
  };
  console.assert (equivalent (circular1, circular2), `equivalent (circular1, circular2)`);
  console.assert (equivalent (circular1, circular3), `equivalent (circular1, circular3)`);
  console.assert (!equivalent (circular1, circular4), `!equivalent (circular1, circular4)`);
  var ref1    = {
    a : 1
  };
  var ref2    = {
    a : 1
  };
  var ref3    = {
    a : 1
  };
  ref1.parent = ref3;
  ref2.parent = ref1;
  ref3.parent = ref2;
  ref1.child  = ref2;
  ref2.child  = ref3;
  ref3.child  = ref1;
  console.assert (equivalent (ref1, ref2), `equivalent (ref1, ref2)`);
  console.log ('--- Ok');
  
  console.log ('Compare RegExp');
  var reg1 = /ab+c/i;
  var reg2 = reg1;
  var reg3 = /\w+/i;
  var reg4 = new RegExp ("ab+c", "i");
  var reg5 = new RegExp ("\\w+", "i");
  console.assert (equivalent (reg1, reg2), `equivalent (reg1, reg2)`);
  console.assert (!equivalent (reg1, reg3), `!equivalent (reg1, reg3)`);
  console.assert (equivalent (reg1, reg4), `equivalent (reg1, reg4)`);
  console.assert (!equivalent (reg1, reg5), `!equivalent (reg1, reg5)`);
  console.assert (equivalent (reg3, reg5), `equivalent (reg3, reg5)`);
  
  
  console.log ('-- Ok');
  
  console.log ('Compare Errors');
  var err1 = new Error ('One');
  var err2 = err1;
  var err3 = new Error ('Two');
  var err4 = new Error ('One');
  var err5 = new TypeError ('One');
  console.assert (equivalent (err1, err2), `equivalent (err1, err2)`);
  console.assert (!equivalent (err1, err3), `!equivalent (err1, err3)`);
  console.assert (equivalent (err1, err4), `equivalent (err1, err4)`);
  console.assert (!equivalent (err1, err5), `!equivalent (err1, err5)`);
  
  console.log ('-- Ok');
  
  if (typeof Map !== 'undefined') {
    console.log ('Compare Map content');
    var map1   = new Map ();
    var keyObj = {};
    map1.set ('a', "value associated with a string");
    map1.set (1, "value associated with a number");
    map1.set (keyObj, "value associated with keyObj");
    var map2 = map1;
    var map3 = new Map ();
    map3.set ('a', "value associated with a string");
    map3.set (1, "value associated with a number");
    var map4 = new Map ();
    map4.set ('a', "other value");
    map4.set (1, "other value");
    map4.set (keyObj, "other value");
    var map5 = new Map ();
    map5.set (keyObj, "value associated with keyObj");
    map5.set (1, "value associated with a number");
    map5.set ('a', "value associated with a string");
    var map6 = new Map ();
    map6.set ('a', "value associated with a string");
    map6.set (1, "value associated with a number");
    map6.set ({}, "value associated with keyObj");
    console.assert (equivalent (map1, map2), `equivalent (map1, map2)`);
    console.assert (!equivalent (map1, map3), `!equivalent (map1, map3)`);
    console.assert (!equivalent (map1, map4), `!equivalent (map1, map4)`);
    console.assert (equivalent (map1, map5), `equivalent (map1, map5)`);
    console.assert (!equivalent (map1, map6), `!equivalent (map1, map6)`);
    
    
    console.log ('-- Ok');
  }
  if (typeof Set !== 'undefined') {
    console.log ('Compare Set content');
    var set1 = new Set ();
    set1.add ('a');
    set1.add (1);
    set1.add ({});
    var set2 = set1;
    var set3 = new Set ();
    set3.add ('a');
    set3.add (1);
    var set4 = new Set ();
    set4.add ('a');
    set4.add (1);
    set4.add (false);
    var set5 = new Set ();
    set5.add ({});
    set5.add (1);
    set5.add ('a');
    console.assert (equivalent (set1, set2), `equivalent (set1, set2)`);
    console.assert (!equivalent (set1, set3), `!equivalent (set1, set3)`);
    console.assert (!equivalent (set1, set4), `!equivalent (set1, set4)`);
    console.assert (equivalent (set1, set5), `equivalent (set1, set5)`);
    
    
    console.log ('-- Ok');
  }
  if (typeof ArrayBuffer !== 'undefined') {
    console.log ('Compare ArrayBuffer');
    var buffer1 = new ArrayBuffer (8);
    var view1   = new Int32Array (buffer1);
    view1[ 0 ]  = 1;
    view1[ 1 ]  = 2;
    var buffer2 = new ArrayBuffer (8);
    var view2   = new Int32Array (buffer2);
    view2[ 0 ]  = 1;
    view2[ 1 ]  = 3;
    var buffer3 = new ArrayBuffer (8);
    var view3   = new Int32Array (buffer3);
    view3[ 0 ]  = 1;
    view3[ 1 ]  = 2;
    console.assert (!equivalent (buffer1, buffer2), `!equivalent (buffer1, buffer2)`);
    console.assert (equivalent (buffer1, buffer3), `equivalent (buffer1, buffer3)`);
    console.assert (!equivalent (view1, view2), `!equivalent (view1, view2)`);
    console.assert (equivalent (view1, view3), `equivalent (view1, view3)`);
    console.log ('-- Ok');
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof DataView !== 'undefined') {
    console.log ('Compare DataView');
    var buffer10 = new ArrayBuffer (8);
    var view10   = new DataView (buffer10);
    view10.setInt32 (0, 1);
    view10.setInt32 (1, 2);
    var buffer20 = new ArrayBuffer (8);
    var view20   = new DataView (buffer20);
    view20.setInt32 (0, 1);
    view20.setInt32 (1, 3);
    var buffer30 = new ArrayBuffer (8);
    var view30   = new DataView (buffer30);
    view30.setInt32 (0, 1);
    view30.setInt32 (1, 2);
    var buffer40 = new ArrayBuffer (10);
    var view40   = new DataView (buffer40);
    view40.setInt32 (0, 1);
    view40.setInt32 (1, 2);
    var buffer50 = new ArrayBuffer (10);
    var view50   = new DataView (buffer50);
    view50.setInt32 (0, 1);
    view50.setInt32 (1, 2);
    console.assert (!equivalent (buffer10, buffer20), `!equivalent (buffer10, buffer20)`);
    console.assert (equivalent (buffer10, buffer30), `equivalent (buffer10, buffer30)`);
    console.assert (!equivalent (buffer10, buffer40), `!equivalent (buffer10, buffer40)`);
    console.assert (equivalent (buffer40, buffer50), `equivalent (buffer40, buffer50)`);
    console.assert (!equivalent (view10, view20), `!equivalent (view10, view20)`);
    console.assert (equivalent (view10, view30), `equivalent (view10, view30)`);
    console.assert (!equivalent (view10, view40), `!equivalent (view10, view40)`);
    console.assert (equivalent (view40, view50), `equivalent (view40, view50)`);
    
    console.log ('-- Ok');
  }
  if (typeof Uint8Array !== 'undefined') {
    console.log ('Compare Typed Array');
    var typedArray1 = new Uint8Array ([ 0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]);
    var typedArray2 = typedArray1;
    var typedArray3 = new Uint8Array ([ 0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 10 ]);
    var typedArray4 = new Uint8Array ([ 0, 1, 3, 4, 5, 6, 7, 8, 9, 10 ]);
    var typedArray5 = new Uint8Array ([ 0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]);
    var typedArray6 = new Uint16Array ([ 0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]);
    var typedArray7 = new Int8Array ([ 0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]);
    console.assert (equivalent (typedArray1, typedArray2), `equivalent (typedArray1, typedArray2)`);
    console.assert (!equivalent (typedArray1, typedArray3), `!equivalent (typedArray1, typedArray3)`);
    console.assert (!equivalent (typedArray1, typedArray4), `!equivalent (typedArray1, typedArray4)`);
    console.assert (equivalent (typedArray1, typedArray5), `equivalent (typedArray1, typedArray5)`);
    console.assert (!equivalent (typedArray1, typedArray6), `!equivalent (typedArray1, typedArray6)`);
    console.assert (equivalent (typedArray1.buffer, typedArray7.buffer), `equivalent (typedArray1.buffer, typedArray7.buffer)`);
    
    
    console.log ('-- Ok');
  }
  
  console.log ('Compare functions');
  var func1 = function func (a) {
    return true;
  };
  var func2 = func1;
  var func3 = function func (a) {
    return false;
  };
  var func4 = function func (a) {
    return true;
  };
  var func5 = new Function ('a', 'return true;');
  var func6 = function func (a) {
    return true;
  };
  
  console.assert (!equivalent (Number.isNaN, String.prototype.indexOf), `!equivalent (Number.isNaN, String.prototype.indexOf)`);
  
  console.assert (!equivalent (Number.prototype.valueOf, String.prototype.valueOf), `!equivalent (Number.prototype.valueOf, String.prototype.valueOf)`);
  
  console.assert (!equivalent ((100).toString, true.toString), `!equivalent ((100).toString, true.toString)`);
  
  
  console.assert (equivalent (func1, func2), `equivalent (func1, func2)`);
  console.assert (!equivalent (func1, func3), `!equivalent (func1, func3)`);
  
  
  console.log ('-- Ok');
  
  console.log ('Compare Arrow function');
  var arrow1 = (a) => true;
  var arrow2 = arrow1;
  var arrow3 = (a) => false;
  var arrow4 = function func (a) {
    return true;
  };
  var arrow5 = new Function ('a', 'return true;');
  var arrow6 = function func (a) {
    return true;
  };
  
  console.assert (equivalent (arrow1, arrow2), `equivalent (arrow1, arrow2)`);
  console.assert (!equivalent (arrow1, arrow3), `!equivalent (arrow1, arrow3)`);
  console.assert (!equivalent (arrow1, arrow4), `!equivalent (arrow1, arrow4)`);
  console.assert (!equivalent (arrow1, arrow5), `!equivalent (arrow1, arrow5)`);
  console.assert (!equivalent (arrow1, arrow6), `!equivalent (arrow1, arrow6)`);
  
  
  console.log ('-- Ok');
  
  console.log ('Static Class');
  var Static1 = class Static {
    static get c () {
      return 100;
    }
    
    static sum (a, b) {
      return a + b;
    }
  };
  var Static2 = Static1;
  
  class Static3 {
    static get c () {
      return 100;
    }
    
    static sum (a, b) {
      return a + b;
    }
  }
  
  var Static4 = class Static {
    static get c () {
      return 100;
    }
    
    static sum (a, b) {
      return a + b;
    }
  };
  console.assert (equivalent (Static1, Static2), `equivalent (Static1, Static2)`);
  
  console.assert (!equivalent (Static1, Static3), `!equivalent (Static1, Static3)`);
  
  console.assert (!equivalent (Static1, Static4), `!equivalent (Static1, Static4)`);
  
  
  console.log ('-- Ok');
  
  console.log ('Fix problem with object created with Object.create(null)');
  var nonConstructor1  = Object.create (null);
  var nonConstructor2  = Object.create (null);
  var withConstructor3 = Object.create ({});
  console.assert (equivalent (nonConstructor1, nonConstructor2), `equivalent (nonConstructor1, nonConstructor2)`);
  
  
  console.assert (!equivalent (nonConstructor1, withConstructor3), `!equivalent (nonConstructor1, withConstructor3)`);
  
  
  var nonConstructor4  = Object.create (null);
  nonConstructor4.a    = 1;
  nonConstructor4.b    = false;
  nonConstructor4.c    = "Hello";
  var nonConstructor5  = Object.create (null);
  nonConstructor5.a    = 1;
  nonConstructor5.b    = false;
  nonConstructor5.c    = "Hello";
  var withConstructor6 = Object.create ({});
  withConstructor6.a   = 1;
  withConstructor6.b   = false;
  withConstructor6.c   = "Hello";
  console.assert (equivalent (nonConstructor4, nonConstructor5), `equivalent (nonConstructor4, nonConstructor5)`);
  
  
  console.assert (!equivalent (nonConstructor4, withConstructor6), `!equivalent (nonConstructor4, withConstructor6)`);
  
  
  console.log ('-- Ok');
  
  if (typeof process !== 'undefined' && typeof process.exit !== 'undefined') {
    process.exit (0);
  }
}
