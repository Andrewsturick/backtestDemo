(function () {
    'use strict';

    angular
        .module('pt.Admin')
        .controller('InstructorController', fnCtrl);

    /* @ngInject */
    function fnCtrl(instructorService,$scope, $state,$mdMedia) {
        var vm = this;
        vm.items = instructorService.getData();
        vm.getDetail = getDetail;


        function openlist()
        {
            vm.isViewMobile = false;
            $state.go("triangular-no-scroll.admin-default-no-scroll.instructor");
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
