function byCategory(){
  return function (items, input) {
    return items.filter(function (item) {
      return item.category.name === input;
    });
  };
}

angular
      .module('app')
      .filter("byCategory", byCategory);
