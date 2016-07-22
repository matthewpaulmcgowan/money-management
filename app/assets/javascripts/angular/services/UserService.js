function UserService($http){
  this.userLogin = function (params) {
        return $http.post('http://localhost:3000/login', params);
    }
}

angular
      .module('app')
      .service("UserService", UserService);
