(function() {
    function room($firebaseArray) {
        var firebaseRef = firebase.database().ref('Rooms');
        var rooms = $firebaseArray(firebaseRef);
    console.log(rooms);
        return {
            all: rooms
        };
    }
    
angular
    .module('blocChat')
    .factory('room', ['$firebaseArray', room]);
})();
