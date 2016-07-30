function ItemService($http){
  this.getItems = function (params) {
    if(params['userId'] === undefined){
      params['userId']='1'
    }
    return $http.post('http://localhost:3000/items/index', params);
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

  this.deleteItem = function(id){
    return $http.delete("http://localhost:3000/items/" + id)
  }
}

angular
      .module('app')
      .service("ItemService", ItemService);
