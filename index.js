function receivesAFunction(callback){
    callback()
}

function returnsANamedFunction() {

    return namedFunction = () => console.log('This is a named function')
    // function namedFunction() {
    //     console.log("This is a named function");
    //   }
    //   return namedFunction;
      
}

function returnsAnAnonymousFunction() {
    return function() {
      console.log("This is an anonymous function");
    };
  }
  