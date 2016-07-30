function DeleteItemController($state, CookiesService){
  var ctrl = this;
  $state.go("items");
}

DeleteItemController.$inject = ['$state', 'CookiesService'];

angular
      .module('app')
      .controller("DeleteItemController", DeleteItemController);
