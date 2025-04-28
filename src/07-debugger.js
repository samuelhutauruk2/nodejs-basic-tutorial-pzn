// Debug with command: node inspect 07-debugger.js
// watch('variableName') to watch the value of specificied variable
// .exit to exit from debug session


function sayHello(name) {
    // Breakpoint
    debugger;
    console.log(`Hello ${name}!`);
}

const firstName = 'Sam';
// Breakpooint
debugger;
sayHello(firstName);