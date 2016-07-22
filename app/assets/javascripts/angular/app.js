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
            .state("home.login", {
              url: "/login",
              templateUrl: "/templates/home/login.html",
              controller: "HomeLoginController as user"
            })
            .state("home.signup", {
              url: "/signup",
              templateUrl: "/templates/home/signup.html",
              controller: "HomeSignupController as user"
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
            .state("searchItems", {
              url: '/items/search',
              templateUrl: '/templates/items/search.html',
              controller: "ItemsController as items",
              resolve: {
                      items: function(ItemService){
                        return ItemService.getItems();
                      }
              }
            })

        $urlRouterProvider.otherwise("/home");

      })
