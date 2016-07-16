function HomeController(){
  this.person = "Matt";
}

angular
      .module("app")
      .controller("HomeController", HomeController);
