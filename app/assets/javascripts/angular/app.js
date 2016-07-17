angular
      .module("app", ['ui.router'])
      .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('home', {
              url: '/home',
              templateUrl: '/templates/home/home.html',
              controller: "HomeController as home"
            })
            .state('item', {
              url: '/item',
              templactUrl: '/templates/item/show.index.html',
              controller: "ItemController as item",
              resolve{
                //add in service http call to get list of items
              }
            })

        $urlRouterProvider.otherwise("/home");

      })
