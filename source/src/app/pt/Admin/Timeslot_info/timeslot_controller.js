/**
 * Created by Admin on 3/7/2016.
 */
(function () {
    'use strict';

    angular
        .module('pt.Admin')
        .controller('TimeslotController', fnCtrl);

    /* @ngInject */
    function fnCtrl(instructorService,$scope, $state,$mdMedia,$mdDialog) {
        var vm = this;
        vm.items = instructorService.getData();
        vm.getDetail = getDetail;


        function openlist()
        {
            vm.isViewMobile = false;
            $state.go("triangular-no-scroll.admin-default-no-scroll.location");
        }


        function getDetail(test)
        {
            vm.isViewMobile = $mdMedia('xs');
            $state.go("triangular-no-scroll.admin-default-no-scroll.instructor.locDetails",
                {
                    id: test.id
                });

        }



    }
})();
