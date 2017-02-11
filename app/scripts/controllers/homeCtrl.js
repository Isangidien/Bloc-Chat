(function() {
   function homeCtrl(room,$uibModal) {
       this.rooms = room.all;
       console.log(this.rooms);
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