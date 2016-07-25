function CreateItemController(ItemService, $state, CookiesService){
  var ctrl = this;

  CookiesService.checkCookie();

  ctrl.createItem = function(){
    var userId = CookiesService.getCookie();

    var params = {
      name: ctrl.name,
      userId: userId
    }
  
    ItemService
         .createItem(params)
         .then(function(response){
           $state.reload();
         })
  }

  //this.redirectToIndex = function(){
  //  $state.href("items");
  //}
}

CreateItemController.$inject = ['ItemService', '$state', 'CookiesService'];



angular
      .module("app")
      .controller("CreateItemController", CreateItemController);
