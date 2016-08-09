function Item()  {
  return {
    templateUrl: "/templates/items/item.html",
    scope: {},
    controllerAs: "item",
    bindToController: {
      id: '=', name: '=', category: '=', amount: '=', index: "=", items: "=", chartlabels: "=", chartdata: "="
    },
    controller:  function (ItemService, CategoryService) {
      var ctrl = this;

      ctrl.delete = function (id) {
        ItemService
          .deleteItem(id)
          .then(function (response){
            ctrl.items.splice(ctrl.index,1);
            ctrl.deleteFromChart(id);
          })
      }

      ctrl.deleteFromChart = function (id){
        var index = CategoryService.getCategoryIndex(ctrl.category.name, ctrl.chartlabels);
          if(ctrl.chartdata[index] - ctrl.amount === 0){
            ctrl.chartlabels.splice(index, 1);
            ctrl.chartdata.splice(index, 1);
          } else {
            ctrl.chartdata[index] -= ctrl.amount;
          }
      }
    }
  }
}

angular
      .module("app")
      .directive("item", Item)
