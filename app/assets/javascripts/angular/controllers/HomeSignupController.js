function HomeSignupController (UserService, $state, $window, CookiesService){
  var ctrl = this;

  ctrl.signout = function(){
    CookiesService.redirectIfSignedIn()
  }

  ctrl.signup = function (){
    var params = {
      username: this.username,
      password: this.password
    }

    UserService
              .userSignup(params)
              .then(function(response){
                if(response.data.id){
                  CookiesService.setCookie(response.data.id);
                  $state.go("items");
                }
                else{
                  $state.reload();
                  $window.alert("User Creation Failed, Please Try Again")
                }
              })
  }
}

HomeLoginController.$inject = ['UserService', '$state', "$window", "CookiesService"];

angular
      .module("app")
      .controller("HomeSignupController", HomeSignupController);
