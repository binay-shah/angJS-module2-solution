
(function(){
  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyShoppingController', ToBuyShoppingController)
  .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyShoppingController(ShoppingListCheckOffService){
    var buyList = this;
    buyList.items = ShoppingListCheckOffService.getBuyItems();

    buyList.removeItem = function(itemIndex){
        ShoppingListCheckOffService.removeItem(itemIndex);
        if(buyList.items.length == 0)
            buyList.message = "Everything is bought!";
        else {
          buyList.message = "";
        }

    }
  }
  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtShoppingController(ShoppingListCheckOffService){
    var boughtList = this;
    boughtList.items = ShoppingListCheckOffService.getBoughtItems();
    boughtList.message =  ShoppingListCheckOffService.getBoughtItemsMessage(); 
  }


  function ShoppingListCheckOffService(){

    var service = this;

    var buyItems = [{
      name: "cookies",
      quantity: "10"
    },

    {  name: "Milk",
      quantity: "2"
    },

    {
      name: "Donuts",
      quantity: "200"
    },

    {
      name: "Cookies",
      quantity: "300"
    },

    {
      name: "Chocolate",
      quantity: "5"
    }
  ];

    var boughtItems = [];

    service.getBuyItems = function(){
      return buyItems;
    }

    service.getBoughtItems = function(){
      return boughtItems;
    }

    service.removeItem = function(itemIndex){
      boughtItems.push(buyItems[itemIndex]);

        buyItems.splice(itemIndex, 1);

    }

    this.getBoughtItemsMessage = function(){
      if(boughtItems.length == 0)
        return "Nothing bought yet.";
      else {
        return "";
      }
    }
  }
})();
