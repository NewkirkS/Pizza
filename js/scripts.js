//Back-End
function Pizza(size) {
  this.pSize= size;
  this.toppings = [];
}

Pizza.prototype.price = function() {
  var totalPrice = Math.round(this.pSize * 1.8) + (this.toppings.length * 2);
  return totalPrice;
}

//Front-End
$(function(){

  $("form").submit(function(event){
    event.preventDefault();
    var pizzaSize = $("select#pizza-size").val();
    var newPizza = new Pizza(pizzaSize);

    $.each($("input[name='topping']:checked"), function() {
      newPizza.toppings.push($(this).val());
    });

    $("#price-output").text("Your total is $" + newPizza.price());


    $("input:checkbox").prop("checked", false);
  });

});
