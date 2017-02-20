(function () {
    function blocChatCookies($cookies,$uibModal){
       if(!$cookies.blocChatCurrentUser || $cookies.blocChatCurrentUser =="") {
           $uibModal.open({
               controller: 'cookieModalCtrl as cookieModal',
               templateUrl: '/templates/cookieModal.html' 
           })
       } 
       function setUserName (userNameInput,closeModal) {
           $cookies.put(userName,userNameInput);
           closeModal();
           
       } 
        
        return {
            setUserName: setUserName,
                }
    }
    
    
    
    angular 
        .module('blocChat')
        .run(['$cookies', '$uibModal', blocChatCookies]);    
    
})();