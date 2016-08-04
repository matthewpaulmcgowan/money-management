function UserService($http, $auth){
  this.userLogin = function (params) {
  return $auth.submitLogin(params)
        //.then(function(resp) {
        //  debugger;
        //  // handle success response
        //})
        //.catch(function(resp) {
        //  debugger
        //  // handle error response
        //});
    //return $http.post('http://localhost:3000/login', params);
  }

  this.userSignup = function (params) {
    return $http.post("http://localhost:3000/signup", params)
  }
}

angular
      .module('app')
      .service("UserService", UserService);
