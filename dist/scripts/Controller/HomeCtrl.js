(function() {
    function HomeCtrl(Room) {
       this.chatRoom = Room.all; 
    }
    
angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', HomeCtrl]);
    
})();