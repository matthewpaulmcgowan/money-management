function CreateItemController(ItemService){
  var ctrl = this;

  var createItem = function(form){
    debugger;
    ItemService
         .createItem()
  }

  var redirectToIndex = function(){
    $state.href("items");
  }
  redirectToIndex();
}

CreateItemController.$inject = ['ItemService'];



angular
      .module("app")
      .controller("CreateItemController", CreateItemController);
