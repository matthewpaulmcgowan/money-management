function ItemsController(items, $state, $filter, ItemService, UserService, CategoryService, $scope, categoryData){
  var ctrl = this;
  ctrl.data = items.data;
  ctrl.chartData = categoryData[1];
  ctrl.chartLabels = categoryData[0];

  ctrl.signOut = function(){
    UserService
      .signOut()
      .then(function(response){
        $state.go("home");
      })
  }

  ctrl.createItem = function(form){

    ctrl.form = form;

    var params = {
      name: ctrl.name,
      category_name: ctrl.category,
      amount: ctrl.amount
    }

    ItemService
      .createItem(params)
      .then(function (response) {
        ctrl.data.push(response.data)
        ctrl.addToChart(response.data)
        ctrl.resetForm(form);
      })
  }

  ctrl.resetForm = function (){
    ctrl.name = null;
    ctrl.category = null;
    ctrl.amount = null;
    ctrl.form.$setPristine();
    ctrl.form.$setUntouched();
  }

  ctrl.addToChart = function (data){
      var index = CategoryService.getCategoryIndex(data.category.name, ctrl.chartLabels);
      if(index !== null){
        ctrl.chartData[index] += data.amount
      } else {
        ctrl.chartLabels.push(data.category.name);
        ctrl.chartData.push(data.amount)
      }
  }

  ctrl.chartClick = function (points){
    ctrl.data = items.data;
    var index = points[0]._index
    var category = ctrl.chartLabels[index];
    ctrl.data = $filter('byCategory')(ctrl.data, category);
    $scope.$apply();
  }

  ctrl.resetCategoryFilter = function (){
    ctrl.data = items.data;
  }

  ctrl.filteredList = $filter('largeAmount')(ctrl.data);
}

ItemsController.$inject = ['items', '$state', '$filter', 'ItemService', 'UserService', 'CategoryService', '$scope', 'categoryData'];

angular
        .module("app")
        .controller("ItemsController", ItemsController);
