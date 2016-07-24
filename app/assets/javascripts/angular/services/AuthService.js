function AuthService(){

  this.loggedInCheck = function($http){
          return $http.get('http://localhost:3000/users/loggedIn');
      }
  }

}

angular
        .module("app")
        .service("AuthService", AuthService)
