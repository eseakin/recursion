// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;
// but you're not, so you'll write it from scratch:

// undefined , null , boolean , string , number , array , object

// '[0,3,3]'
// return [0, 3, 3]
// JSON.parse('{}');              // {}
// JSON.parse('true');            // true
// JSON.parse('"foo"');           // "foo"
// JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
// JSON.parse('null');            // null[


// [1,true,undefined,'text', [1,{a:1,b:2},[1,2]],{a:[1,2],b:{a:1,b:2}}]

// "[1,true,undefined,'text',[1 , 2 , 3],{a:1,b:2}]"
// [1, true]
// split(",") ==>

// arr[0] = "[1"
// arr[1] = "true"
// arr[2] = "undefined"
// arr[3] = "text"
// arr[4] = "[1 "
// arr[5] = " 2 "
// arr[6] = " 3]"
// arr[7] = "{a:1"
// arr[8] = "b:2}]"

// [1,true] and ["1,true"]
// if '[ {',
//   ...
//   push if at 0th level push.parse("1")

// if json === "undefined"
//   return(undefined)
// if json === "null"
//   return(null)
// if json === "true"
//   return(true)
// if json === "false"
//   return(false)
// if json === [0-9]+
//   return(parseInt(str[i]))

var parseJSON = function(json) {
console.log(json);
  // your code goes here
};
