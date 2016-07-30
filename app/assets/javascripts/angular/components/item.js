var Item = {
  templateUrl: "/templates/items/item.html",
  bindings: {
    id: '=', name: '=', category: '=', amount: '='
  },
  controllerAs: "item",
}

angular
      .module("app")
      .component("item", Item)
