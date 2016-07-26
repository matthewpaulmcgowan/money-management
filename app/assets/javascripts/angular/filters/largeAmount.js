function largeAmount(){

  return function (items) {
        return items.filter(function (item) {
            return item.amount.to_i < 99;
        });
    };

}

angular
      .module('app')
      .filter("largeAmount", largeAmount);
