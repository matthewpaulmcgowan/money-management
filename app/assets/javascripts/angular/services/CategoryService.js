function CategoryService ($http) {
  this.getCategoryData = function () {
    return $http.get('http://localhost:3000/api/categories')
  }

  this.getCategoryIndex = function (category, chartLabels) {
    var found = null;
    for (var i=0;i<chartLabels.length;i++) {
      if (chartLabels[i] === category) {
        found = i;
      }
    }
    return found;
  }
}

angular
        .module("app")
        .service("CategoryService", CategoryService);
