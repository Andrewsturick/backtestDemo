(function() {
    'use strict';

    angular
        .module('pt.Admin')
        .controller('InstructorDetailsController', fnCtrl);

    /* @ngInject */
    function fnCtrl( $stateParams, instructorService,$state,breezeService) {
        var vm = this;
        vm.closeItem = closeItem;
        vm.deleteEmail = deleteEmail;

        vm.item = instructorService.getDetail($stateParams.id)[0];

        function closeItem() {
            $state.go("triangular-no-scroll.admin-default-no-scroll.instructor");
        }

        function deleteEmail() {
            $scope.$emit('deleteEmail');
        }

        vm.columns = [{
            title: '',
            field: 'thumb',
            filter: 'tableImage'
        },{
            title: 'Name',
            field: 'firstName'
        },{
            title: 'contact no',
            field: 'contactNo'
        },{
            title: 'City',
            field: 'City'
        }];


        breezeService.getEntities('students').then(function (data) {
            vm.students = data.results;
        });
    }

})();
