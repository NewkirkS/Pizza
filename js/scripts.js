//Back-End
function Pizza(size, toppings) {
  this.pSize= size;
  this.toppings = toppings;
}

Pizza.prototype.price = function() {
  return (Math.round(this.pSize * 1.5)) + (this.toppings * 2);
}

//Front-End
