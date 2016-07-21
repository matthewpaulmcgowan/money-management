function DeleteItemController($state){
    var ctrl = this;
    $state.go("items");
}

DeleteItemController.$inject = ['$state'];

angular
        .module('app')
        .controller("DeleteItemController", DeleteItemController)
