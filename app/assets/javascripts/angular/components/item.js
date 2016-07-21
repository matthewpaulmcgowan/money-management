var Item = {
    templateUrl: "/templates/items/item.html",
    bindings: {
                id: '=', name: '='
    },
    controllerAs: "item"
  }

angular
      .module("app")
      .component("item", Item)
