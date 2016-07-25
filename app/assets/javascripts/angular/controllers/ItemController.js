function ItemController(item, ItemService, $state, CookiesService){
  var ctrl = this;
  ctrl.data=item.data;

  CookiesService.checkCookie();

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

ItemController.$inject = ['item', 'ItemService', '$state', 'CookiesService'];

angular
      .module("app")
      .controller("ItemController", ItemController);
