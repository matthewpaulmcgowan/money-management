function ItemService = function ($http){
  this.getItems = function () {
        return $http.get('/items');
    };
}

angular
      .module('app')
      .service("ItemService", ItemService);
