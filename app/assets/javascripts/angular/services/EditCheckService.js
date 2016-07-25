function EditCheckService(){
  var ctrl = this;

  ctrl.checkIfChanged = function(attribute){
    var checked = false;
    for(var i=0;i<attribute.length;i++){
      if(attribute[i] === 'ng-empty'){
        checked = true;
      }
    }
    if(checked === true){
      return false;
    } else{
      return true;
    }
  }

}

angular
      .module("app")
      .service("EditCheckService", EditCheckService);
