function ItemService($http){
  this.getItems = function () {
        return $http.get('http://localhost:3000/items');
    }

  this.createItem = function(params){
    debugger;
        return $http.post("http://localhost:3000/items", params);
  }
}


angular
      .module('app')
      .service("ItemService", ItemService);
