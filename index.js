function receivesAFunction(callback){
    callback()
}

function returnsANamedFunction() {
    return  add = (a,b) => a + b
}

function returnsAnAnonymousFunction() {
    return  () => 'Ananymous the hacker'
}