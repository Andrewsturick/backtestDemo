(function() {
    'use strict';

    angular
        .module('pt.Admin')
        .controller('InstructorDetailsController', fnCtrl);

    /* @ngInject */
    function fnCtrl( $stateParams,$mdDialog, instructorService,$state,breezeService) {
        var vm = this;
        vm.closeItem = closeItem;
        vm.deleteEmail = deleteEmail;
        vm.composeClick=composeClick;

        vm.item = instructorService.getDetail($stateParams.id)[0];

        function closeItem()
        {
            $state.go("triangular-no-scroll.admin-default-no-scroll.instructor");
        }

        function deleteEmail()
        {
            $scope.$emit('deleteEmail');
        }
        function composeClick()
        {
            $mdDialog.show({
                controller: 'instructor_dialogController',
                controllerAs: 'vm',
                templateUrl: 'app/pt/Admin/instructor_info/instructor_dialog.tmpl.html',
            })
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
