function UserService($http, $auth){
  this.userLogin = function (params) {
    debugger;
    return $auth.submitLogin(params)
  }

  this.userSignup = function (params) {
    return $http.post("http://localhost:3000/signup", params)
  }

  this.signOut = function () {
    return $auth.signOut();
  }
}

angular
      .module('app')
      .service("UserService", UserService);
