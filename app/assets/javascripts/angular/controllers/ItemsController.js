function ItemsController(items, CookiesService, $window, $state, $filter, ItemService, UserService){
  var ctrl = this;

  ctrl.signOut = function(){
    UserService
      .signOut()
      .then(function(response){
        $state.go("home");
      })
  }

  ctrl.data = items.data;

  ctrl.createItem = function(form){

    ctrl.form = form;

    var params = {
      name: ctrl.name,
      category: ctrl.category,
      amount: ctrl.amount
    }

    ItemService
      .createItem(params)
      .then(function (response) {
        ctrl.data.push(response.data)
        ctrl.resetForm(form);
      })
  }

  ctrl.resetForm = function (){
    ctrl.name = null;
    ctrl.category = null;
    ctrl.amount = null;
    ctrl.form.$setPristine();
    ctrl.form.$setUntouched();
    debugger;
  }

  ctrl.filteredList = $filter('largeAmount')(ctrl.data);
}

ItemsController.$inject = ['items', 'CookiesService', '$window', '$state', '$filter', 'ItemService', 'UserService'];

angular
        .module("app")
        .controller("ItemsController", ItemsController);
