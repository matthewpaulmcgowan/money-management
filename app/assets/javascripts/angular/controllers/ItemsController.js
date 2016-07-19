function ItemsController(items){
  var ctrl = this;
  ctrl.data = items.data;
  debugger;
}

ItemsController.$inject = ['items'];

angular
        .module("app")
        .controller("ItemsController", ItemsController);
