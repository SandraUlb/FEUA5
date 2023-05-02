/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculation() {
  Calculation.prototype.sum = function (a, b) {
    return a + b;
  };
  Calculation.prototype.substraction = function (a, b) {
    return a - b;
  };
  Calculation.prototype.multiplication = function (a, b) {
    return a * b;
  };
  Calculation.prototype.division = function (a, b) {
    return a / b;
  };
}
