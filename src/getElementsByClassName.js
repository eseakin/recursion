// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// h};

//if i am only checking 1 layer

//search each child in parent for className
//if (class === className)
//push element to newArr
//getElementsByClassName()


// Obj = { a:[[1,2], [1,2]],
//         b:[[2,3], [2,3]]
//       };

//       for(key in Obj)
//        for(var i=0;i<key.length;i++)
//         if(key[i] === className)


// /But instead we're going to implement it from scratch:

function getElementsByClassName(className, currElem, matches) {
  // your     c here
    //comment easy
  // tesest comment!
  currElem = currElem || document;
  matches = matches || [];

	if(currElem.classList){
    currElem.classList.forEach(function(ele,i,col){
    	if(ele === className)
        {matches.push(currElem);}
    });
  }

  if(currElem.childNodes.length >= 1){
   currElem.childNodes.forEach(function(childElem){
     getElementsByClassName(className, childElem, matches);
   });
  }

  return matches;

};


