(function () {
    function blocChatCookies($cookies,$uibModal){
        var theCookie = $cookies.get('userName');
        console.log(theCookie);
        
        if(!theCookie || theCookie ==="") {
            $uibModal.open({
                controller: 'cookieModalCtrl as cookieModal',
                templateUrl: '/templates/cookieModal.html'
            })       
        }
    }
    
    angular 
        .module('blocChat')
        .run(['$cookies', '$uibModal', blocChatCookies]);    
    
})();