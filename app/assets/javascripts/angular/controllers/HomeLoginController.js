function HomeLoginController (UserService, $state, $window, CookiesService, $auth){
  var ctrl = this;
  ctrl.login_error = '';

  ctrl.signout = function(){
    CookiesService.redirectIfSignedIn();
  }

  ctrl.login = function(){

    var params = {
      email: ctrl.email,
      password: ctrl.password
    }

    UserService
      .userLogin(params)
      .then(function(response){
        $state.go("items");
      })
      .catch(function(response){
        debugger;
        ctrl.login_error = response['errors'][0]
      })
  }
}

HomeLoginController.$inject = ['UserService', '$state', "$window", 'CookiesService', '$auth'];

angular
      .module('app')
      .controller("HomeLoginController", HomeLoginController);
