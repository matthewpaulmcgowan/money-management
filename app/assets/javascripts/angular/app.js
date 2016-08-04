angular
      .module("app", ['ui.router', 'ngCookies', 'ngMessages', 'ng-token-auth'])
      .config(function($stateProvider, $urlRouterProvider, $httpProvider, $authProvider){

        token = $("meta[name=\"csrf-token\"]").attr("content")
        $httpProvider.defaults.headers.common['X-CSRF-TOKEN'] = token

        $authProvider.configure({
          apiUrl:                  'http://localhost:3000/api'
        });

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
              items: function(ItemService, CookiesService){
                var userId = {userId: CookiesService.getCookie()};
                return ItemService.getItems(userId);
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
              items: function(ItemService, CookiesService){
                var userId = {userId: CookiesService.getCookie()};
                return ItemService.getItems(userId);
              }
            }
          })
          .state("largeAmountItems", {
            url: '/items/large',
            templateUrl: '/templates/items/large.html',
            controller: "ItemsController as items",
            resolve: {
              items: function(ItemService, CookiesService){
                var userId = {userId: CookiesService.getCookie()};
                return ItemService.getItems(userId);
              }
            }
          })

        $urlRouterProvider.otherwise("/home");
      })
