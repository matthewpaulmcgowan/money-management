function HomeSignupController (UserService, $state){
  var ctrl = this;

  ctrl.userSignup = function (){
    var params = {
      username: this.username,
      password: this.password
    }

    UserService
              .userSignup(params)
              .then(function(response){

              })
  }
}

HomeLoginController.$inject = ['UserService', '$state'];

angular
      .module("app")
      .controller("HomeSignupController", HomeSignupController);
