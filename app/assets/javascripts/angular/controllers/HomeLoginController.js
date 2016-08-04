function HomeLoginController (UserService, $state, $window, CookiesService, $auth){
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
    $auth.submitLogin(params)
        .then(function(resp) {
          debugger;
          // handle success response
        })
        .catch(function(resp) {
          debugger
          // handle error response
        });


    //UserService
    //  .userLogin(params)
    //  .then(function(response){
    //    if(response.data.id){
    //      CookiesService.setCookie(response.data.id);
    //      $state.go("items");
    //    }
    //    else{
    //      $state.reload();
    //      $window.alert("User Login Failed, Please Try Again")
    //    }
    //  })
  }
}

HomeLoginController.$inject = ['UserService', '$state', "$window", 'CookiesService', '$auth'];

angular
      .module('app')
      .controller("HomeLoginController", HomeLoginController);
