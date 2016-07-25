function ItemsController(items, CookiesService, $window, $state){
  var ctrl = this;

  CookiesService.checkCookie();

  ctrl.data = items.data;
  ctrl.checkCookie();
}

ItemsController.$inject = ['items', 'CookiesService', '$window', '$state'];

angular
        .module("app")
        .controller("ItemsController", ItemsController);
