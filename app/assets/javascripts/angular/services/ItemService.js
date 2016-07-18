ItemService = function ($http){
  this.getItems = function () {
        return $http.get('http://localhost:3000/items');
    }
}

angular
      .module('app')
      .service("ItemService", ItemService);
