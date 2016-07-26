function ItemsController(items, CookiesService, $window, $state){
  var ctrl = this;

  CookiesService.checkCookie();

  ctrl.signout = function(){
    debugger;
    CookiesService.signout();
  }

  ctrl.data = items.data;
}

ItemsController.$inject = ['items', 'CookiesService', '$window', '$state'];

angular
        .module("app")
        .controller("ItemsController", ItemsController);
