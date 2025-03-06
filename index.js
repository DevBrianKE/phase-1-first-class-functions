function receivesAFunction(callback) {
    callback()
}


function returnsANamedFunction() {
    return function namedFunction() {  // The function has a name
      console.log("I am a named function");
    };
  }


function returnsAnAnonymousFunction() {
    return (x => x * 2)
}
