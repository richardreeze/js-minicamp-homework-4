// Do not change any of the function names

function multiplyArguments() {
  if(arguments.length === 0){
    return 0;
  } else {
    var total = arguments[0];
    for (var i = 1; i < arguments.length; i++){
      total *= arguments[i];
    }
    return total;
  }
}

function invokeCallback(cb) {
  cb();
}

function sumArray(numbers, cb) {
	var total = 0;
	for(var i = 0; i < numbers.length; i++){
		total += numbers[i];
	}
	cb(total);
}

function forEach(arr, cb) {
  arr.forEach(function(num){
    cb(num);
  });
}

function map(arr, cb) {
  var newArr = [];
  arr.forEach(function(num){
    newArr.push(cb(num));
  });
  return newArr;
}

function getUserConstructor() {
  function User(options){
    this.username = options.username;
    this.name = options.name;
    this.email = options.email;
    this.password = options.password;
    this.sayHi = function(){
      return 'Hello, my name is ' + this.name;
    };
  }
  return User;
}

function addPrototypeMethod(Constructor) {
  Constructor.prototype.sayHi = function(){
    return 'Hello World!';
  };
}

function addReverseString() {
  String.prototype.reverse = function(){
    return this.split('').reverse().join('');
  };
}

function nFactorial(n) {
  if(n < 0){
    return -1;
  }else if(n === 0){
    return 1;
  } else {
    return n * nFactorial(n - 1);
  }
}

function cacheFunction(cb) {
  var cache = null;
  function first(num){
    if(cache === null){
      cache = cb(num);
      return cb(num);
    } else {
      return cache;
    }
  }
  return first;
}


// Do not modify code below this line.
// --------------------------------

module.exports = {
  multiplyArguments: multiplyArguments,
  invokeCallback: invokeCallback,
  sumArray: sumArray,
  forEach: forEach,
  map: map,
  getUserConstructor: getUserConstructor,
  addPrototypeMethod: addPrototypeMethod,
  addReverseString: addReverseString,
  nFactorial: nFactorial,
  cacheFunction: cacheFunction
};
