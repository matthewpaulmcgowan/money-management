function CategoryService ($http){
  this.getCategoryData = function () {
    return $http.get('http://localhost:3000/api/categories');
  }

  this.addItemToChart = function (data, chartLabels) {
    debugger;
    var found = null;
    for(var i=0;i<chartLabels.length;i++){
      if(chartLabels[i] === data.category.name){
        found = i;
      }
    }
    debugger;
    return found;
  }
}

angular
        .module("app")
        .service("CategoryService", CategoryService);
