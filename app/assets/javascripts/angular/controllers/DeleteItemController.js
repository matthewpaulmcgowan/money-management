function DeleteItemController($state, CookieService){
    var ctrl = this;
    $state.go("items");
}

DeleteItemController.$inject = ['$state', 'CookieService'];

angular
        .module('app')
        .controller("DeleteItemController", DeleteItemController);
