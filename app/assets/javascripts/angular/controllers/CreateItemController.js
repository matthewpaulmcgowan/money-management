function CreateItemController(ItemService, $state){
  var ctrl = this;

  ctrl.createItem = function(){

    var params = {
      name: ctrl.name
    }

    ItemService
         .createItem(params)
         .then(function(response){
           $state.reload();
         })
  }

  this.redirectToIndex = function(){
    $state.href("items");
  }

}

CreateItemController.$inject = ['ItemService', '$state'];



angular
      .module("app")
      .controller("CreateItemController", CreateItemController);
