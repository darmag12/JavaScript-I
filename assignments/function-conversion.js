// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

let myFunction = () => {
    console.log("Function was invoked!");
};
     myFunction();




let anotherFunction =  param => {
    return param;

}
   anotherFunction("Example");

let add =  (param1, param2) => {
  return param1 + param2;
};
add(1,2);

let subtract =  (param1, param2) => {
  return param1 - param2;
};
subtract(1,2);


// Stretch

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);
//1. Write a HOF (higher order function) which can take in two parameters and a callback function.
let multipliesNums = (num1, num2, cb) => {

   return cb (num1 * num2);
}
//2. Write a function which will be fed to the HOF as a callback.
       (multiply) => {
    //console.log(multiply);
  };
  let callBack = (multiply) => {
    console.log(multiply);
  };

//3. Invoke the HOF, passing two arguments and the callback function.
multipliesNums(20, 40, callBack); 