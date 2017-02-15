(function() {
   function homeCtrl(room,$uibModal) {
       this.rooms = room.all;
        this.activeRoom;
       
       this.createActive = function (chat) {
           this.activeRoom = chat;
           this.messages = room.getMessages(this.activeRoom.room.$id);
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
    .controller('homeCtrl',['room', '$uibModal', homeCtrl]);
    
})();