(function (){
    function cookieModalCtrl ($uibModalInstance,$cookies) {
        this.userNameInput;
        this.error;
        /**
        *@function this.setUserName
        *@desc public function that sets a username to a cookie
        *@param {string} userNameInput
        **/
        this.setUserName = function (userNameInput,elem) {
            if(this.userNameInput && this.userNameInput !=""){
              
          
           $cookies.put('userName',this.userNameInput);
           this.closeModal();
            } else {
                this.error = "Hey, John or Jane Doe, fill in the blank";
            }
        }
        
        this.closeModal = function () {
            $uibModalInstance.close();
            
            //checks if cookie holds the username
            var theCookie = $cookies.get('userName');
             console.log(theCookie);

        }
        
    }
    
    angular
        .module('blocChat')
        .controller('cookieModalCtrl',['$uibModalInstance','$cookies', cookieModalCtrl]);
    
})();