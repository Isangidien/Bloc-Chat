(function() {
   function homeCtrl(room,$uibModal, message, $cookies) {
       this.rooms = room.all;
       this.activeRoom;
       this.newMessage;
       
       this.userName = $cookies.get('userName');
       
       this.sendMessage = function() {
           message.send(this.newMessage, this.activeRoom.room.$id,this.reset);
       };
       
       this.createActive = function (Room) {
           this.activeRoom = Room;
           this.messages = room.getMessages(this.activeRoom.room.$id);
           return this.activeRoom;
       };
       
       this.reset = function(){       angular.element(document.querySelector('#newMessage')).val("");
       };
       
       this.open = function (){    
           var modalInstance = $uibModal.open({
                controller: 'modalCtrl as modal',
               templateUrl: '/templates/modal.html'
           });
       };
            
    }
    
angular
    .module('blocChat')
    .controller('homeCtrl',['room', '$uibModal','message', '$cookies', homeCtrl]);
    
})();