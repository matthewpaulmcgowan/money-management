function Item()  {
  return {
    templateUrl: "/templates/items/item.html",
    scope: {},
    controllerAs: "item",
    bindToController: {
      id: '=', name: '=', category: '=', amount: '=', index: "=", items: "="
    },
    controller:  function (ItemService, $scope) {
      var ctrl = this;

      ctrl.delete = function (id) {
        ItemService
          .deleteItem(id)
          .then(function (response){
            ctrl.items.splice(ctrl.index,1);
          })
      };
    }
  }
}

angular
      .module("app")
      .directive("item", Item)
