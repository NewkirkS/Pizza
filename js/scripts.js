//Back-End
function Pizza(size) {
  this.pSize= size;
  this.toppings = [];
}

Pizza.prototype.price = function() {
  var sizePrice = (Math.round(this.pSize * 1.5));
  var numOfToppings = this.toppings.length;
  var totalPrice = sizePrice + (numOfToppings * 2);
  return totalPrice;
}

//Front-End
$(function(){

  $("form").submit(function(event){
    event.preventDefault();
    var pizzaSize = $("select#pizza-size").val();
    var newPizza = new Pizza(pizzaSize);
  });
});
