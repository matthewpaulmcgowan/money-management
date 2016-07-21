angular
      .module("app", ['ui.router'])
      .config(function($stateProvider, $urlRouterProvider, $httpProvider){

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
            .state('editItem', {
              url: '/item/:id/edit'
              templateUrl: '/templates/items/edit.html',
              controller: "ItemController as item",
              resolvs: {
                      item: function(ItemService, $stateParams){
                        return ItemService.getItem($stateParams.id)
                      }
              }
            })

        $urlRouterProvider.otherwise("/home");

      })
