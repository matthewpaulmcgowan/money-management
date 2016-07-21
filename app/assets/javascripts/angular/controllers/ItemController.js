function ItemController(item, ItemService){
  var ctrl = this;
  ctrl.data=item.data;

  this.editItem = function(id){
    var params = {
      name: ctrl.name
    }

    ItemService
         .updateItem(params, id)
         .then(function(response){
           $state.reload();
         })
  }
}

ItemController.$inject = ['item', 'ItemService'];

angular
      .module("app")
      .controller("ItemController", ItemController);
