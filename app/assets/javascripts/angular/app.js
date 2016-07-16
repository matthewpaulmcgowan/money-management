angular
      .module("app", ['ui.router'])
      .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('home', {
              url: '/home',
              templateUrl: '/templates/home/home.html',
              controller: "HomeController as home"
            })

        $urlRouterProvider.otherwise("/home");

      })
