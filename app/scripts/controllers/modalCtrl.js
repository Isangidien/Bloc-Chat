(function() {
    function modalCtrl(room, $uibModalInstance) {
        
       this.rooms = room.all;
        this.getRoomName = function () {
        var newRoomName = document.getElementById('roomName').value;
            console.log(newRoomName);
            return newRoomName;
        }
        
         this.addRoom = function () {
             console.log(this.rooms);
           var newRoomName = this.getRoomName();
                          console.log(this.getRoomName());

             this.add = this.rooms.$add({
                 $value: newRoomName
        });
             $uibModalInstance.close(event);
             alert('Your new chat room,' + " " +  newRoomName  +  " " + 'has been created!');
         }
       
        this.cancel = function () {
            $uibModalInstance.dismiss();
        };
   
 }
    
    
angular
    .module('blocChat')
    .controller('modalCtrl', ['room', '$uibModalInstance', modalCtrl]);
    
})();