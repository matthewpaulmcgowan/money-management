angular
      .module("myapp", ['ui.router'])
      .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('home', {
              url: home,
              templateUrl: 'views/home'
              controller: "HomeController as home"
            })

        urlRouterProvider.otherwise("home");
            
      })
