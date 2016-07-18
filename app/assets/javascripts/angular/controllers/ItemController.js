function ItemController(item){
  debugger;
  this.data = item.data;
}

angular
        .module("app")
        .controller("ItemController", ItemController);
