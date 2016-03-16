(function() {
    'use strict';

    angular
        .module('pt.Admin')
        .controller('InstructorDetailsController', fnCtrl);

        function fnCtrl( $stateParams, instructorService,$state,breezeService) {
        var vm = this;
            var vm = this;
            vm.fabDirections = ['up', 'down', 'left', 'right'];
            vm.fabDirection = vm.fabDirections[2];
            vm.fabAnimations = ['md-fling', 'md-scale'];
            vm.fabAnimation = vm.fabAnimations[1];
            vm.fabStatuses = [false, true];
            vm.fabStatus = vm.fabStatuses[0];
            vm.share = share;

            function share(message) {
                $mdToast.show({
                    template: '<md-toast><span flex>' + message + '</span></md-toast>',
                    position: 'top right',
                    hideDelay: 3000,
                    parent: $element
                });
            }

        vm.delete_instructor = delete_instructor;
        vm.backbutton=backbutton;
        vm.Edit_instructor = Edit_instructor;

        function Edit_instructor()
        {
            $state.go("triangular-no-scroll.admin-default-no-scroll.instructor.insEdit",{id:$stateParams.id});
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
