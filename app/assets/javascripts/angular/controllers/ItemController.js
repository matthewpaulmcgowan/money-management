ItemController = function(item){
  this.data = item.data;
}

angular
        .module("app")
        .controller("ItemController", ItemController);
