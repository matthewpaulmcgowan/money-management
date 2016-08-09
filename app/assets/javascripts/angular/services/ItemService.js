function ItemService($http) {
  this.getItems = function (params) {
    return $http.get('http://localhost:3000/api/items');
  }

  this.createItem = function(params) {
    debugger;
    return $http.post("http://localhost:3000/api/items", params);
  }

  this.editItem = function(id) {
    return $http.get("http://localhost:3000/api/items/" + id + "/edit")
  }

  this.updateItem = function(params, id) {
    return $http.put("http://localhost:3000/api/items/" + id, params)
  }

  this.deleteItem = function(id) {
    return $http.delete("http://localhost:3000/api/items/" + id)
  }
}

angular
      .module('app')
      .service("ItemService", ItemService);
