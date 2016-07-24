function CookiesService($cookies){

  this.setCookie = function(id){
    $cookies.put("userId", id);
  }

  this.getCookie = function(){
    return $cookies.get('userId');
  }
}



angular
      .module("app")
      .service("CookiesService", CookiesService);
