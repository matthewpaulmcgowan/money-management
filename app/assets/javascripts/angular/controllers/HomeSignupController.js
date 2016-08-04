function HomeSignupController (UserService, $state, $window, CookiesService){
  var ctrl = this;

  ctrl.signout = function(){
    CookiesService.redirectIfSignedIn()
  }

  ctrl.signup = function (){
    var params = {
      email: this.email,
      password: this.password
    }

    UserService
      .userSignup(params)
      .then(function(response){
        $state.go("items");
      })
      .catch(function(response){
        debugger;
      })
  }
}

HomeLoginController.$inject = ['UserService', '$state', '$window', 'CookiesService'];

angular
      .module("app")
      .controller("HomeSignupController", HomeSignupController);
