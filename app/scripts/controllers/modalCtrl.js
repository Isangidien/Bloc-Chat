(function() {
    function modalCtrl(room, $uibModalInstance) {
        this.newRoomName;
        
        this.addRoom = function() {
            room.addRoom(this.newRoomName, this.cancel);
         }
       
        this.cancel = function () {
            $uibModalInstance.dismiss();
        };
   
 }
    
    
angular
    .module('blocChat')
    .controller('modalCtrl', ['room', '$uibModalInstance', modalCtrl]);
    
})();