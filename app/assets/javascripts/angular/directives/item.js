function Item()  {
  return {
    templateUrl: "/templates/items/item.html",
    scope: {},
    controllerAs: "item",
    bindToController: {
      id: '=', name: '=', category: '=', amount: '=', index: "=", items: "=", chartLabels: "=", chartData: "="
    },
    controller:  function (ItemService, CategoryService) {
      var ctrl = this;

      ctrl.delete = function (id) {
        debugger;
        ItemService
          .deleteItem(id)
          .then(function (response){
            ctrl.items.splice(ctrl.index,1);
            ctrl.deleteFromChart(id);
          })
      }

      ctrl.deleteFromChart = function (id){
        debugger;
        var index = CategoryService.getCategoryIndex(ctrl.category.name, ctrl.chartLabels);
        debugger;
          if(ctrl.chartData[index] - amount === 0){
            ctrl.chartLabels.splice(index, 1);
            ctrl.chartData.splice(index, 1);
          } else {
            ctrl.chartData[index] -= amount;
          }
      }
    }
  }
}

angular
      .module("app")
      .directive("item", Item)
