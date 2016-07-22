function HomeSignupController - function(UserService, $state){
  var ctrl = this;

  ctrl.userSignup(){
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
