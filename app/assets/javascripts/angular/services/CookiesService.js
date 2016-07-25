function CookiesService($cookies, $state, $window){

  this.setCookie = function(id){
    $cookies.put("userId", id);
  }

  this.getCookie = function(){
    return $cookies.get('userId');
  }

  this.checkCookie = function(){
    if(!this.getCookie()){
      $state.go("home")
      $window.alert("Not Logged In, Please Sign In or Create a New Profile")
    }
  }
}



angular
      .module("app")
      .service("CookiesService", CookiesService);
