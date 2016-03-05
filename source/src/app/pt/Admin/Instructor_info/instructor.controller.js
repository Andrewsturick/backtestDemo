(function () {
    'use strict';

    angular
        .module('pt.Admin')
        .controller('InstructorController', fnCtrl);

    /* @ngInject */
    function fnCtrl(instructorService,$scope, $state,$mdMedia,$mdDialog) {
        var vm = this;
        vm.items = instructorService.getData();
        vm.getDetail = getDetail;
        vm.composeClick = composeClick;


        function openlist()
        {
            vm.isViewMobile = false;
            $state.go("triangular-no-scroll.admin-default-no-scroll.instructor");
        }
        function composeClick()
        {
            $mdDialog.show({
                controller: 'instructor_dialogController',
                controllerAs: 'vm',
                templateUrl: 'app/pt/Admin/instructor_info/instructor_dialog.tmpl.html',
            })
        }



        function getDetail(test)
        {
            vm.isViewMobile = $mdMedia('xs');
            $state.go("triangular-no-scroll.admin-default-no-scroll.instructor.insDetails",
                {
                id: test.id
            });

        }
        $scope.$on('closeItem', openlist);



    }
})();
