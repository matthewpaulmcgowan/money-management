function UserService($http, $auth) {
  this.userLogin = function (params) {
    return $auth.submitLogin(params)
  }

  this.userSignup = function (params) {
    return $auth.submitRegistration(params)
  }

  this.signOut = function () {
    return $auth.signOut();
  }

  this.checkIfLoggedIn = function () {
    return $auth.validateUser();
  }
}

angular
      .module('app')
      .service("UserService", UserService);
