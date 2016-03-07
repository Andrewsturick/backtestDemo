(function() {
    'use strict';

    angular
        .module('pt.Admin')
        .controller('InstructorDetailsController', fnCtrl);

    /* @ngInject */
    function fnCtrl( $stateParams, instructorService,$state,breezeService) {
        var vm = this;
        //vm.closeItem = closeItem;
        vm.deleteEmail = deleteEmail;
        vm.backbutton=backbutton;

        vm.item = instructorService.getDetail($stateParams.id)[0];



        function backbutton() {
            $state.go("triangular-no-scroll.admin-default-no-scroll.instructor");
        }

        function deleteEmail() {
            $scope.$emit('deleteEmail');
        }



        breezeService.getEntities('students').then(function (data) {
            vm.students = data.results;
        });
    }

})();
