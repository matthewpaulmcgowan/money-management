function HomeController(CookiesService){
  var ctrl = this;
  CookiesService.redirectIfSignedIn();
}

HomeController.$inject = ["CookiesService"];

angular
      .module("app")
      .controller("HomeController", HomeController);
