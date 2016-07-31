function ItemsController(items, CookiesService, $window, $state, $filter){
  var ctrl = this;

  CookiesService.checkCookie();

  ctrl.signout = function(){
    CookiesService.signout();
  }

  ctrl.data = items.data;

  ctrl.filteredList = $filter('largeAmount')(ctrl.data);
}

ItemsController.$inject = ['items', 'CookiesService', '$window', '$state', '$filter'];

angular
        .module("app")
        .controller("ItemsController", ItemsController);
