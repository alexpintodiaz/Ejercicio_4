let A = parseInt(prompt("Ingrese el primer número"));
let B = parseInt(prompt("Ingrese el segundo número"));
let C = parseInt(prompt("Ingrese el tercer número"));

if(A > B && B > C)
    console.log(`El numero ${A} es el mayor y el número ${C} es el menor`)

else if(B > A && A > C)
    console.log(`El numero ${B} es el mayor y el número ${C} es el menor`)

else if(C > A && A > B)
    console.log(`El numero ${C} es el mayor y el número ${B} es el menor`)

 else if(A > C && C > B)
    console.log(`El numero ${A} es el mayor y el número ${B} es el menor`)

else if(B > C && C > A)
    console.log(`El numero ${B} es el mayor y el número ${A} es el menor`)

else if(C > B && B > A)
    console.log(`El numero ${C} es el mayor y el número ${A} es el menor`)

else(console.log("ERROR"))
