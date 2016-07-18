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
              templactUrl: '/templates/items/index.html',
              controller: "ItemController as item",
              resolve: {
                      items: function(ItemService){
                        return ItemService.getItems();
                      }
              }
            })

        $urlRouterProvider.otherwise("/home");

      })
