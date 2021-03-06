(function() {
    function room($firebaseArray) {
        var firebaseRef = firebase.database().ref('Rooms');
        var rooms = $firebaseArray(firebaseRef);
        var messageRef = firebase.database().ref('messages');
        
        function addRoom(newRoomName, closeModal) {
            rooms.$add({
                $value: newRoomName
            });
            closeModal();
        }
        
        function getMessages(roomId) {
            var roomMessages = $firebaseArray(messageRef.ref.orderByChild('roomId').equalTo(roomId));
            return roomMessages;
        }
        
        return {
            all: rooms,
            addRoom: addRoom,
            getMessages: getMessages
        };
    }
    
angular
    .module('blocChat')
    .factory('room', ['$firebaseArray', room]);
})();
