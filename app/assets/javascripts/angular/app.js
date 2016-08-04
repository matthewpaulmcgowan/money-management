angular
      .module("app", ['ui.router', 'ngCookies', 'ngMessages', 'ng-token-auth'])
      .config(function($stateProvider, $urlRouterProvider, $httpProvider, $authProvider){

        token = $("meta[name=\"csrf-token\"]").attr("content")
        $httpProvider.defaults.headers.common['X-CSRF-TOKEN'] = token

        $authProvider.configure({
          apiUrl:                  '/api',
          tokenValidationPath:     '/auth/validate_token',
          signOutUrl:              '/auth/sign_out',
          emailRegistrationPath:   '/auth',
          accountUpdatePath:       '/auth',
          accountDeletePath:       '/auth',
          confirmationSuccessUrl:  window.location.href,
          passwordResetPath:       '/auth/password',
          passwordUpdatePath:      '/auth/password',
          passwordResetSuccessUrl: window.location.href,
          emailSignInPath:         '/auth/sign_in',
          storage:                 'cookies',
          forceValidateToken:      false,
          validateOnPageLoad:      true,
          proxyIf:                 function() { return false; },
          proxyUrl:                '/proxy',
          omniauthWindowType:      'sameWindow',
          authProviderPaths: {
            github:   '/auth/github',
            facebook: '/auth/facebook',
            google:   '/auth/google'
          },
          tokenFormat: {
            "access-token": "{{ token }}",
            "token-type":   "Bearer",
            "client":       "{{ clientId }}",
            "expiry":       "{{ expiry }}",
            "uid":          "{{ uid }}"
          },
          cookieOps: {
            path: "/",
            expires: 9999,
            expirationUnit: 'days',
            secure: false,
            domain: 'domain.com'
          },
          createPopup: function(url) {
            return window.open(url, '_blank', 'closebuttoncaption=Cancel');
          },
          parseExpiry: function(headers) {
            // convert from UTC ruby (seconds) to UTC js (milliseconds)
            return (parseInt(headers['expiry']) * 1000) || null;
          },
          handleLoginResponse: function(response) {
            return response.data;
          },
          handleAccountUpdateResponse: function(response) {
            return response.data;
          },
          handleTokenValidationResponse: function(response) {
            return response.data;
          }
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
