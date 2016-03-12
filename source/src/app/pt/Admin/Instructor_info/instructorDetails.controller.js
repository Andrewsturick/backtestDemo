(function() {
    'use strict';

    angular
        .module('pt.Admin')
        .controller('InstructorDetailsController', fnCtrl);

        function fnCtrl( $stateParams, instructorService,$state,breezeService) {
        var vm = this;

        vm.delete_instructor = delete_instructor;
        vm.backbutton=backbutton;
        vm.Edit_instructor = Edit_instructor;

        function Edit_instructor()
        {
            $state.go("triangular-no-scroll.admin-default-no-scroll.instructor.insEdit",{id:23});
        }
        vm.item = instructorService.getDetail($stateParams.id)[0];



        function backbutton() {
            $state.go("triangular-no-scroll.admin-default-no-scroll.instructor");
        }

        function delete_instructor(data) {
            breezeService.deleteinfo('Instructor', data);
            $state.go("triangular-no-scroll.admin-default-no-scroll.instructor");
        }



        breezeService.getEntities('students').then(function (data) {
            vm.students = data.results;
        });
    }

})();
