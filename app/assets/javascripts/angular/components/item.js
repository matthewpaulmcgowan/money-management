var Item = {
  templateUrl: "/templates/items/item.html",
  bindings: {
    id: '=', name: '=', category: '=', amount: '=', index: "=", deleteItem: "&"
  },
  controllerAs: "item",
  controller:
    function (ItemService, $scope) {
      var ctrl = this;

      ctrl.delete = function (identifier) {
        debugger;
        ctrl.deleteItem({id: identifier});
        debugger;
        //ItemService
        //  .deleteItem(id)
        //  .then(function (response){

        //  })
        };
      }
}

//Item.$inject = ['ItemsController'];

angular
      .module("app")
      .component("item", Item)
