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
              url: '/item/:id/edit',
              templateUrl: '/templates/items/edit.html',
              controller: "ItemController as item",
              resolve: {
                      item: function(ItemService, $stateParams){
                        return ItemService.getItem($stateParams.id)
                      }
              }
            })
            .state('deleteItem', {
              params: {id: {}},
              controller: "DeleteItemController",
              resolve: {
                      item: function(ItemService, $stateParams){
                        return ItemService.deleteItem($stateParams.id)
                      }
              }
            })

        $urlRouterProvider.otherwise("/home");

      })
