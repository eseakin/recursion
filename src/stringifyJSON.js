// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


var stringifyJSON = function(obj) {

	//console.log("stringify ",JSON.stringify(obj));

	if(obj === null){
		return "null";
	}else if (typeof obj === "number" || typeof obj === "boolean"){
		return obj.toString();
	}else if (typeof obj === "string"){
		return '"'+ obj +'"';

	}else if (Array.isArray(obj)){
		 var inside = "";

		 	obj.forEach(function(ele,i,col){
		 		if(i>=0 && i < col.length-1){
		 			//console.log("middle ",inside);
		 			inside += stringifyJSON(ele)+","
		 		}else{
		 			//console.log("ele ",ele);
		 			inside += stringifyJSON(ele);
		 			//console.log("inside ",inside);
		 		}

		 	});
	//console.log("inside ",inside);
		 return "[" + inside + "]";

	}else if (typeof obj === "object"){
		var inObj = "";

			Object.keys(obj).forEach(function(key,i,col){
				if (obj[key] !== undefined && obj[key] !== {} && !(obj[key] instanceof Function)){
					inObj += stringifyJSON(key) + ":" + stringifyJSON(obj[key]);
					if(i >= 0 && i < Object.keys(obj).length-1){
						inObj += ",";
					}
				}
			});
		return "{" + inObj + "}";
	}

};





















// var toStr = [1,true,undefined,'text',[1,{a:1,b:2},[1,2]],{a:[1,2],b:{a:1,b:2}}];

// var stringifyJSON = function(obj, newStr) {
// 	console.log("OBJ ",obj);

// 	newStr = newStr || "";

//   if (Array.isArray(obj)){

//     obj.forEach(function(ele,i,col){

//       //adds commas
//       if(i >= 1 && i <= col.length){
//         newStr += ",";
//       }

//       //if array
//       if(Array.isArray(ele)){
//         newStr += "[";

//         stringifyJSON(ele,newStr);

//         newStr +=  "]";
//       }

//       //if object
//       else if(typeof ele === "object"){
//         newStr += "{";

//         stringifyJSON(ele,newStr);

//         newStr += "}";
//       }

//       //regular expressions
//       else if(ele === undefined || ele === null){
//         newStr += "null";
//       }else if(ele === false){
//         newStr += "false";
//       }else if(ele === true){
//         newStr += "true";
//       }else if(typeof ele === "string"){
//         newStr += "\"" + ele + "\"";
//       }else if(typeof ele === "number"){
//         newStr += ele;
//       }
//     });
//   }

//   if (obj instanceof Object){

// 		var counter = 0;

//     for(var key in obj){

//       //adds commas
//       if(counter >= 1 && counter <= obj.length){
//         newStr += ",";
//       }
// 			counter++;
//       //if array
//       if(Array.isArray(obj[key])){
//         newStr += "[";

//         stringifyJSON(obj[key],newStr);

//         newStr +=  "]";
//       }

//       //if object
//       else if(typeof obj[key] === "object"){
//         newStr += "{";

//         stringifyJSON(obj[key],newStr);

//         newStr += "}";
//       }

//       //regular expressions
//       else if(obj[key] === undefined || obj[key] === null){
//         newStr += "null";
//       }else if(obj[key] === false){
//         newStr += "false";
//       }else if(obj[key] === true){
//         newStr += "true";
//       }else if(typeof obj[key] === "string"){
//         newStr += "\"" + obj[key] + "\"";
//       }else if(typeof obj[key] === "number"){
//         newStr += obj[key];
//       }
//     }
//   }
//   return newStr;

// };
	// console.log("STRING TEST ",stringifyJSON(toStr));
	// console.log("STRINGIFY ",JSON.stringify(toStr));
