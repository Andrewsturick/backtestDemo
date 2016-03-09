(function() {
    'use strict';

    angular
        .module('pt.Admin')
        .controller('TimeslotDetailsController', fnCtrl);

    /* @ngInject */
    function fnCtrl( $stateParams, instructorService,instructormodel,$state,breezeService) {
        var vm = this;
        //vm.closeItem = closeItem;
        vm.deleteEmail = deleteEmail;
        vm.backbutton=backbutton;
        vm.Edit_instructor = Edit_instructor;

        function Edit_instructor()
        {
            $state.go("triangular-no-scroll.admin-default-no-scroll.timeslot.timeDetails",{id:23});
        }
        vm.item = instructorService.getDetail($stateParams.id)[0];



        function backbutton() {
            $state.go("triangular-no-scroll.admin-default-no-scroll.timeslot");
        }

        function deleteEmail() {
            $scope.$emit('deleteEmail');
        }

        instructormodel.getData().then(function (data) {
            vm.items = data.results;
        });
        //breezeService.getEntities('instructor').then(function (data)
        //{
        //    vm.instructors = data.results;
        //});

        breezeService.getEntities('students').then(function (data)
        {
            vm.students = data.results;
        });
    }

})();
