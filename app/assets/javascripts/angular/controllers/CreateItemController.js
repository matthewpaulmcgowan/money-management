function CreateItemController(ItemService, $state, CookiesService){
  var ctrl = this;

  CookiesService.checkCookie();

  ctrl.createItem = function(){
    var userId = CookiesService.getCookie();

    var params = {
      name: ctrl.name,
      category: ctrl.category,
      amount: ctrl.amount,
      userId: userId
    }
    ItemService
      .createItem(params)
      .then(function(response){
        debugger;
        //response {name: ""}
        // ctrl.items.data.push(response)
      })
  }
}

CreateItemController.$inject = ['ItemService', '$state', 'CookiesService'];

angular
      .module("app")
      .controller("CreateItemController", CreateItemController);
