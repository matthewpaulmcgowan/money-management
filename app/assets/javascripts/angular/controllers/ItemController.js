function ItemController(item, ItemService, $state, CookiesService, EditCheckService){
  var ctrl = this;
  ctrl.data=item.data;
  CookiesService.checkCookie();

  ctrl.editItem = function(id){
    var params = {};

    if(EditCheckService.checkIfChanged(form.amount.classList)){
      params['amount'] = ctrl.amount;
    }

    if(EditCheckService.checkIfChanged(form.name.classList)){
      params['name'] = ctrl.name;
    }

    if(EditCheckService.checkIfChanged(form.category.classList)){
      params['category'] = ctrl.category;
    }

    ItemService
         .updateItem(params, id)
         .then(function(response){
           $state.reload(id);
         })
  }

}

ItemController.$inject = ['item', 'ItemService', '$state', 'CookiesService', 'EditCheckService'];

angular
      .module("app")
      .controller("ItemController", ItemController);
