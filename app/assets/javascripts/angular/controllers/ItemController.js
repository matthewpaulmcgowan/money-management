function ItemController(item){
  var ctrl = this;
  ctrl.data=item.data;
  debugger;
}

angular
      .module("app")
      .controller("ItemController", ItemController);
