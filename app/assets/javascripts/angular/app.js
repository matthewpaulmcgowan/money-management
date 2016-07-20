angular
      .module("app", ['ui.router'])
      .config(function($stateProvider, $urlRouterProvider, $httpProvider){

        //$httpProvider.defaults.useXDomain = true;
        //delete $httpProvider.defaults.headers.common['X-Requested-With'];
        token = $("meta[name=\"csrf-token\"]").attr("content")
          $httpProvider.defaults.headers.common['X-CSRF-TOKEN'] = token
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
