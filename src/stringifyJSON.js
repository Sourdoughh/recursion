// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// - You can stringify strings, numbers, bools, arrays 
// (probably the hardercase for nested stuff), objects (same here), and 

// - you can't stringify undefined, null, and functions?

var stringifyJSON = function(obj) {
  if(typeof obj === 'string'){
  	return '"' + obj.toString() + '"';
  }
  
  if(typeof obj === 'boolean'){
  	return obj.toString()
  }

  if(typeof obj === 'number'){
  	return (obj).toString();
  }

  if(obj === null){
    return 'null';
  }

  if(typeof obj === 'function' || typeof obj === 'undefined' || obj === 'function'){
  	return '';
  }


  if(Array.isArray(obj)){
  	for(var i  = 0; i < obj.length; i++){
  		obj[i] = stringifyJSON(obj[i]);
  	}
  	return '[' + obj + ']';
  }

  if(typeof obj === 'object'){
  	var objStringing = [];
    //if either the key or value are not undefined then call stringifyJSON on the key and value
    for(var key in obj){
    	if(key === 'functions' || key === 'undefined'){
    		return '{}';
    	} else {
    		objStringing.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    	}
    }
    return '{' + objStringing + '}';
  }
};
