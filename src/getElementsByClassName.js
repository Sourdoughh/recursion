// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var answer = [];

  var traverse = function(start){
  	for(var i = 0; i < start.children.length; i++){
  		if(start.children[i].classList.contains(className)){
  			answer.push(start.children[i]);
  		}
  		if(start.children[i].hasChildNodes()){
  			traverse(start.children[i]);
  		}
  	}
  }
  
  traverse(document);
  return answer;
};


// notes:
// somethingGeneric.children[i].className will return the classname could probably compare but the function's
// parameter already uses className. Tried to change it but it doesn't work with the test
// if(start.children[i].className === classNameBeingCalled)
// the recursive part probably happens when there are nested elements, so if an element has more children
// then call traverse again on that element.