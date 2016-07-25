function EditCheckService(){
  var ctrl = this;

  ctrl.checkIfChanged = function(attribute){
    if(attribute.includes("ng-empty")){
      return false;
    } else{
      return true;
    }
  }
}

angular
      .module("app")
      .service("EditCheckService", EditCheckService);
