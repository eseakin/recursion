// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var toStr = [1,true,undefined,'text',[1,{a:1,b:2},[1,2]],{a:[1,2],b:{a:1,b:2}}];

var stringifyJSON = function(obj, newStr) {
	console.log("OBJ ",obj);

	newStr = newStr || "";

	obj.forEach(function(ele,i,col){

		//adds commas
		if(i >= 1 && i <= col.length){
			newStr += ",";
		}

		//if array
		if(Array.isArray(ele)){
			newStr += "[";

			stringifyJSON(ele,newStr);

			newStr +=  "]";
		}

		//if object
		else if(typeof ele === "object"){
			newStr += "{";

			stringifyJSON(ele,newStr);

			newStr += "}";
		}

		//regular expressions
		else if(ele === undefined || ele === null){
			newStr += "null";
		}else if(ele === false){
			newStr += "false";
		}else if(ele === true){
			newStr += "true";
		}else if(typeof ele === "string"){
			newStr += "\"" + ele + "\"";
		}else if(typeof ele === "number"){
			newStr += ele;
		}
	});
	return newStr;



};
	console.log("STRING TEST ",stringifyJSON(toStr));
	console.log("STRINGIFY ",JSON.stringify(toStr));
