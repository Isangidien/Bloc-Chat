(function() {
    function message($cookies,$firebaseArray) {
        var firebaseRef = firebase.database().ref('Rooms');
        var rooms = $firebaseArray(firebaseRef);
        var messages = $firebaseArray(firebase.database().ref('messages'));
        var userName = $cookies.get('userName');
        
    console.log(userName);
        return {
            send: function(newMessage, roomId, resetMessage) {
                messages.$add({
                    content: newMessage,
                    userId: userName,
                    roomId: roomId,             createdAt:firebase.database.ServerValue.TIMESTAMP
                });
                resetMessage();
            }
        };
    }
    
    angular
        .module('blocChat')
        .factory('message', ['$cookies', '$firebaseArray', message]);
})();