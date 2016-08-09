function HomeController(UserService, $state) {
  var ctrl = this;

  ctrl.checkIfLoggedIn = function () {
    UserService
      .checkIfLoggedIn()
      .then(function (response) {
        $state.go("items")
      })
      .catch(function (response) {
      })
  }

  ctrl.checkIfLoggedIn();
}

HomeController.$inject = ['UserService', '$state'];

angular
      .module("app")
      .controller("HomeController", HomeController);
