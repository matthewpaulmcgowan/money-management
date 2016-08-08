function CategoryService ($http){
  this.getCategoryData = function () {
    return $http.get('http://localhost:3000/api/categories');
  }
}

angular
        .module("app")
        .service("CategoryService", CategoryService);
