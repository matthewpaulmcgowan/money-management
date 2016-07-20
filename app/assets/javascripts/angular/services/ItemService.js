function ItemService($http){
  this.getItems = function () {
        return $http.get('http://localhost:3000/items');
    }

  this.createItem = function(params){
        return $http.post("http://loclhost:3000/items", params)
  }
}


angular
      .module('app')
      .service("ItemService", ItemService);
