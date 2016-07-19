function ItemController(items){
  this.data = items.data;
}

ItemController.$inject = ['items'];

angular
        .module("app")
        .controller("ItemController", ItemController);
