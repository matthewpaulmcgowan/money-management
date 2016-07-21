function ItemController(item){
  var ctrl = this;
  ctrl.data=item.data;

  this.editItem(){
    var params = {
      name: ctrl.name
    }

    ItemService
         .updateItem(params)
         .then(function(response){
           $state.reload();
         })
  }
}

angular
      .module("app")
      .controller("ItemController", ItemController);
