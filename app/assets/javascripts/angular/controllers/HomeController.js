function HomeController(CookiesService){
  var ctrl = this;
  this.person = "Matt";

  ctrl.signout = function(){
    CookiesService.redirectIfSignedIn();
  }
}

HomeController.$inject = ["CookiesService"];

angular
      .module("app")
      .controller("HomeController", HomeController);
