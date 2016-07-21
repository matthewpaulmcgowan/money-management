function CreateItemController(ItemService, $state){
  var ctrl = this;

  ctrl.createItem = function(){

    var params = {
      name: ctrl.name
    }

    var redirectToIndex = function(){
      $state.reload();
    }

    ItemService
         .createItem(params)
         .then(function(response){
           redirectToIndex();
         })
  }

  this.redirectToIndex = function(){
    $state.href("items");
  }
  //redirectToIndex();
}

CreateItemController.$inject = ['ItemService', '$state'];



angular
      .module("app")
      .controller("CreateItemController", CreateItemController);
