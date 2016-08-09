function HomeLoginController (UserService, $state, $auth) {
  var ctrl = this;
  ctrl.login_error = '';

  ctrl.login = function () {

    var params = {
      email: ctrl.email,
      password: ctrl.password
    }

    UserService
      .userLogin(params)
      .then(function (response) {
        $state.go("items");
      })
      .catch(function (response) {
        ctrl.login_error = response['errors'][0]
      })
  }
}

HomeLoginController.$inject = ['UserService', '$state', '$auth'];

angular
      .module('app')
      .controller("HomeLoginController", HomeLoginController);
