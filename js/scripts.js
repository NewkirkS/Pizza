function Pizza(size, toppings) {
  this.mass = size;
  this.toppings = toppings;
}

Pizza.prototype.price = function() {
  return (Math.round(this.mass * 1.3)) + (this.toppings * 2)
}

var newPizza = new Pizza(2, 5);

console.log(newPizza);
var finalPrice = newPizza.price();
console.log(finalPrice);
