function ItemsController(items, $state, $filter, ItemService, UserService, CategoryService){
  var ctrl = this;
  ctrl.data = items.data;

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
        debugger;
        ctrl.chartData[index] += data.amount
      } else {
        ctrl.chartLabels.push(data.category.name);
        ctrl.chartData.push(data.amount)
      }
  }

  ctrl.getCategoryData = function (){
    CategoryService
      .getCategoryData()
      .then(function (response){
        ctrl.chartLabels = Object.keys(response.data);
        ctrl.chartData = [];
        for (var category in response.data) {
          ctrl.chartData.push(response.data[category]);
        }
      })
  }

  ctrl.filteredList = $filter('largeAmount')(ctrl.data);

  ctrl.getCategoryData();
}

ItemsController.$inject = ['items', '$state', '$filter', 'ItemService', 'UserService', 'CategoryService'];

angular
        .module("app")
        .controller("ItemsController", ItemsController);
