function ItemController(item){
  var ctrl = this;
  ctrl.data=item.data;
}

angular
      .module("app")
      .controller("ItemController", ItemController);
