function HomeLoginController (UserService, $state){
  var ctrl = this;

  ctrl.login = function(){
    var params = {
      username: this.username,
      password: this.password
    }

    UserService
         .userLogin(params)
         .then(function(response){
            debugger;
           //$state.reload();
         })
  }
}

HomeLoginController.$inject = ['UserService', '$state'];

angular
      .module('app')
      .controller("HomeLoginController", HomeLoginController);
