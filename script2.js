var s = "Having global scope"
{
    let x = "Variables declared inside block cannot be accessed from outside the block";
    console.log("Block Scope: ", x);
}

function f1() {
    let m = "Variables defined inside a function are not accessible from outside the function.";
    console.log("Function scope: ", m);
}
f1();

console.log("Global Scope: ", s);
