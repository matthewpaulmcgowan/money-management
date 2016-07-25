function HomeLoginController (UserService, $state, $window){
  var ctrl = this;

  ctrl.login = function(){
    var params = {
      username: this.username,
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

HomeLoginController.$inject = ['UserService', '$state', "$window"];

angular
      .module('app')
      .controller("HomeLoginController", HomeLoginController);
