function HomeController(CookiesService, UserService, $state){
  var ctrl = this;
  ctrl.checkIfLoggedIn = function () {
    UserService
      .checkIfLoggedIn()
      .then(function (response) {
        $state.go("items")
      })
      .catch(function (response) {
        debugger;
      })
  }

  ctrl.checkIfLoggedIn();


}

HomeController.$inject = ["CookiesService", 'UserService', '$state'];

angular
      .module("app")
      .controller("HomeController", HomeController);
