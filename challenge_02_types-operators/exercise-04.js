/*
    What would each of these lines of code do:

    1. true && console.log("moo");
    2. false && console.log("moo moo?")
    3. true || console.log("hello friend");
    4. false || console.log("bye friend");

    Once you see the results, write in a comment why it works that way
*/

//true && console.log("moo");: Logs "moo" to the console because both operands are evaluated, and console.log("moo") is executed since true is truthy.

//false && console.log("moo moo?");: Doesn't log anything because the left operand is false, and the right operand is not evaluated due to short-circuiting.

//true || console.log("hello friend");: Doesn't log anything because the left operand is true, and the right operand is not evaluated due to short-circuiting.

//false || console.log("bye friend");: Logs "bye friend" to the console because both operands are evaluated, and console.log("bye friend") is executed since false is falsy.
