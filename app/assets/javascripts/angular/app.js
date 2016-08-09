angular
      .module("app", ['ui.router', 'ngCookies', 'ngMessages', 'ng-token-auth', 'chart.js'])
      .config(function($stateProvider, $urlRouterProvider, $httpProvider, $authProvider){

        //token = $("meta[name=\"csrf-token\"]").attr("content")
        //$httpProvider.defaults.headers.common['X-CSRF-TOKEN'] = token

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
              auth: function($auth) {
                return $auth.validateUser();
              },

              items: function(ItemService){
                return ItemService.getItems();
              },

              categoryData: function(CategoryService){
                return CategoryService.getCategoryData().then(function (response) {
                    var chartLabels = Object.keys(response.data);
                    var chartData = [];
                    for (var category in response.data) {
                       chartData.push(response.data[category]);
                    }
                    return [chartLabels, chartData];
                })
              }
            }
          })
          .state('editItem', {
            url: '/items/:id/edit',
            templateUrl: '/templates/items/edit.html',
            controller: "ItemController as item",
            resolve: {
              auth: function($auth) {
                return $auth.validateUser();
              },

              item: function(ItemService, $stateParams){
                return ItemService.editItem($stateParams.id)
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
              auth: function($auth) {
                return $auth.validateUser();
              },

              items: function(ItemService){
                return ItemService.getItems();
              }
            }
          })
          .state("largeAmountItems", {
            url: '/items/large',
            templateUrl: '/templates/items/large.html',
            controller: "ItemsController as items",
            resolve: {
              auth: function($auth) {
                return $auth.validateUser();
              },

              items: function(ItemService){
                return ItemService.getItems();
              }
            }
          })

        $urlRouterProvider.otherwise("/home");
      })
