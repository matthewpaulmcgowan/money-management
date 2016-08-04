function HomeLoginController (UserService, $state, $window, CookiesService){
  var ctrl = this;

  ctrl.signout = function(){
    CookiesService.redirectIfSignedIn();
  }

  ctrl.login = function(){
    var params = {
      email: this.email,
      password: this.password
    }
    debugger;
    UserService
      .userLogin(params)
      .then(function(response){
        if(response.data.id){
          CookiesService.setCookie(response.data.id);
          $state.go("items");
        }
        else{
          $state.reload();
          $window.alert("User Login Failed, Please Try Again")
        }
      })
  }
}

HomeLoginController.$inject = ['UserService', '$state', "$window", 'CookiesService'];

angular
      .module('app')
      .controller("HomeLoginController", HomeLoginController);
