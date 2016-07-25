function ItemsController(items, CookiesService, $window, $state){
  var ctrl = this;

  ctrl.checkCookie = function(){
    //debugger;
    if(!CookiesService.getCookie()){
      $state.go("home")
      $window.alert("Not Logged In, Please Sign In or Create a New Profile")
    }
  }

  ctrl.data = items.data;
  ctrl.checkCookie();
}

ItemsController.$inject = ['items', 'CookiesService', '$window', '$state'];

angular
        .module("app")
        .controller("ItemsController", ItemsController);
