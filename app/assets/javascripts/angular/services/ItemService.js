function ItemService($http){
  this.getItems = function () {
        return $http.get('http://localhost:3000/items');
    }

  this.createItem = function(params){
        return $http.post("http://localhost:3000/items", params);
  }

  this.getItem = function(id){
      return $http.get("http://localhost:3000/items/" + id)
  }

  this.updateItem = function(params, id){
      return $http.put("http://localhost:3000/items/" + id, params)
  }
}


angular
      .module('app')
      .service("ItemService", ItemService);
