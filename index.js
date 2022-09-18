/* <p>discuss about static input</p> */
// var a = 10;
// var b = 20;
// sum = a + b;
// console.log(sum);
// document.write(sum);
// document.getElementById("loki").innerHTML = sum;
// document.getElementById("loki").innerHTML = "Hello JavaScript!"

// /* <p>run time input</p> */ /,*,-,+
// let c;
// let d;
// let add;
// c = Number(prompt("enter first number"));
// d = +prompt("enter second number");
// // c = prompt("enter first number");
// // d = prompt("enter second number");
// console.log(typeof(c))
// add = c + d;
// console.log(add);
// here i face issue whwn i use prompt for give input it takes input as string
//here we pass value on run time accoring to our wish but we get only one output ,if we tty to enter new values on run time old output is washed out.
//to over come this we use function concept for sible code multible run time inputs and also we get multiable outputs.
{ /* <p>why we use functions in real time</p> */ }
// e = Number(prompt("enter first number"));
// f = Number(prompt("enter second number"));
// function loki1(e, f) {
//     sum1 = e + f;
//     console.log(sum1)
// }
// loki1(e, f);
//loop
function loki1(e, f) {
    sum1 = e + f;
    console.log(sum1)
}
for (i = 1; i < 5; i++) {
    e = Number(prompt("enter first number"));
    f = Number(prompt("enter second number"));
    loki1(e, f);
}