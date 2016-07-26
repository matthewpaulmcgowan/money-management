function largeAmount(){

  return function (items) {
    debugger;
        return items.filter(function (item) {
            return item.amount > 99;
        });
    };

}

angular
      .module('app')
      .filter("largeAmount", largeAmount);
