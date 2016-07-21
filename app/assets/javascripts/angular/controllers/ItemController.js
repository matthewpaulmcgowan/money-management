function ItemController(item, ItemService, $state){
  var ctrl = this;
  ctrl.data=item.data;

  this.editItem = function(id){
    var params = {
      name: ctrl.name
    }

    ItemService
         .updateItem(params, id)
         .then(function(response){
           $state.reload(id);
         })
  }
}

ItemController.$inject = ['item', 'ItemService', '$state'];

angular
      .module("app")
      .controller("ItemController", ItemController);
