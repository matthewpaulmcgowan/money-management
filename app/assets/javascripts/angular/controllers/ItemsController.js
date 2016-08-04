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

  ctrl.createItem = function(){
    var userId = CookiesService.getCookie();
    var params = {
      name: ctrl.name,
      category: ctrl.category,
      amount: ctrl.amount,
      userId: userId
    }

    ItemService
      .createItem(params)
      .then(function (response) {
        ctrl.data.push(response.data)
        ctrl.resetForm();
      })
  }

  ctrl.resetForm = function (){
    ctrl.name = null;
    ctrl.category = null;
    ctrl.amount = null;
  }

  ctrl.filteredList = $filter('largeAmount')(ctrl.data);
}

ItemsController.$inject = ['items', 'CookiesService', '$window', '$state', '$filter', 'ItemService', 'UserService'];

angular
        .module("app")
        .controller("ItemsController", ItemsController);
