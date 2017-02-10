(function() {
    function homeCtrl(room) {
       this.chatRooms = room.all; 
    }
    
angular
    .module('blocChat')
    .controller('homeCtrl', ['room', homeCtrl]);
    
})();