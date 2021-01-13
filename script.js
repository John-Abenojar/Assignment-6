document.getElementById("order").addEventListener("click", myOrder);

function myOrder() {
let answer1 = document.getElementById("size").value;
let answer2 = document.getElementById("toppings").value;
if (answer1 == "large" && answer2 == 1) {
  alert ("The total is $7.19");
}
if (answer1 == "large" && answer2 == 2) {
  alert ("The total is $8.76")
}
if (answer1 == "large" && answer2 == 3) {
  alert ("The total is $9.60")
}
if (answer1 == "large" && answer2 == 4) {
  alert ("The total is $10.56")
}
if (answer1 == "extra large" && answer2 == 1) {
  alert ("The total is $12.43")
}
if (answer1 == "extra large" && answer2 == 2) {
  alert ("The total is $13.27")
}
if (answer1 == "extra large" && answer2 == 3) {
  alert ("The total is $14.12")
}
if (answer1 == "extra large" && answer2 == 4) {
  alert ("The total is $15.08")
}
}