function HomeSignupController (UserService, $state, $window, CookiesService){
  var ctrl = this;
  ctrl.registration_error = "";

  ctrl.signout = function(){
    CookiesService.redirectIfSignedIn()
  }

  ctrl.signup = function (){
    var params = {
      email: ctrl.email,
      password: ctrl.password,
      password_confirmation: ctrl.password_confirmation
    }

    UserService
      .userSignup(params)
      .then(function(response){
        $state.go("items");
      })
      .catch(function(response){
        ctrl.registration_error = response["data"]['errors']['full_messages'][0]
      })
  }
}

HomeLoginController.$inject = ['UserService', '$state', '$window', 'CookiesService'];

angular
      .module("app")
      .controller("HomeSignupController", HomeSignupController);
