function ItemController(item, ItemService, $state, EditCheckService) {
  var ctrl = this;
  ctrl.data = item.data;

  ctrl.editItem = function (id) {
    var params = {};

    if (EditCheckService.checkIfChanged(form.amount.classList)) {
      params['amount'] = ctrl.amount;
    }

    if (EditCheckService.checkIfChanged(form.name.classList)) {
      params['name'] = ctrl.name;
    }

    if (EditCheckService.checkIfChanged(form.category.classList)) {
      params['category'] = ctrl.category;
    }

    ItemService
      .updateItem(params, id)
      .then( function (response) {
        ctrl.updateTemplate(response);
        ctrl.clearForm();
      })
  }

  ctrl.updateTemplate = function (response) {
    ctrl.data.amount = response.data.amount;
    ctrl.data.name = response.data.name;
    ctrl.data.category = response.data.category;
  }

  ctrl.clearForm = function () {
    ctrl.amount = null;
    ctrl.name = null;
    ctrl.category = null;
  }
}

ItemController.$inject = ['item', 'ItemService', '$state', 'EditCheckService'];

angular
      .module("app")
      .controller("ItemController", ItemController);
