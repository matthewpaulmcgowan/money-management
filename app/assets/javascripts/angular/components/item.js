function Item()  {
  return {
  templateUrl: "/templates/items/item.html",
  scope: {

  },
  controllerAs: "item",
  bindToController: {
          id: '=', name: '=', category: '=', amount: '=', index: "=", items: "="
       },
  controller:
    function (ItemService, $scope) {
      var ctrl = this;

      ctrl.delete = function (id) {
        //ctrl.items.splice(ctrl.index,1);
        ItemService
          .deleteItem(id)
          .then(function (response){
            ctrl.items.splice(ctrl.index,1);
          })
        };
      }
    }
}

//Item.$inject = ['ItemsController'];

angular
      .module("app")
      .directive("item", Item)
