angular
      .module("app", ['ui.router'])
      .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('home', {
              url: '/home',
              templateUrl: '/templates/home/home.html',
              controller: "HomeController as home"
            })
            .state('items', {
              url: '/items',
              templateUrl: '/templates/items/index.html',
              controller: "ItemsController as items",
              resolve: {
                      items: function(ItemService){
                        return ItemService.getItems();
                      }
              }
            })

        $urlRouterProvider.otherwise("/home");

      })
