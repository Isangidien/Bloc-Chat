(function() {
    function room($firebaseArray) {
        var firebaseRef = firebase.database().ref().child('room');
        var rooms = $firebaseArray(firebaseRef);
        
        return {
            "all": rooms
        };
    }
    
angular
    .module('blocChat')
    .factory('room', ['$firebaseArray', room]);
})();
