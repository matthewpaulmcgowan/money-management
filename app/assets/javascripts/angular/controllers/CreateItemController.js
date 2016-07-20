function CreateItemController(ItemService, $state){
  var ctrl = this;

  ctrl.createItem = function(){

    var params = {
      name: ctrl.name
    }
    debugger;
    ItemService
         .createItem()
  }

  var redirectToIndex = function(){
    $state.href("items");
  }
  //redirectToIndex();
}

CreateItemController.$inject = ['ItemService', '$state'];



angular
      .module("app")
      .controller("CreateItemController", CreateItemController);
