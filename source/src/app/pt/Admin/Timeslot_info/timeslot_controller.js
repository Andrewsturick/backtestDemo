/**
 * Created by Admin on 3/7/2016.
 */
(function () {
    'use strict';

    angular
        .module('pt.Admin')
        .controller('TimeslotController', fnCtrl);

    /* @ngInject */
    function fnCtrl(locationmodel,contactmodel, $scope, $timeout,$mdMedia, $mdToast,$state, instructormodel, breezeService,Upload) {
        var vm = this;
        vm.getDetail = getDetail;


        function openlist()
        {
            vm.isViewMobile = false;
            $state.go("triangular-no-scroll.admin-default-no-scroll.timeslot");
        }


        function getDetail(test)
        {
            vm.isViewMobile = $mdMedia('xs');
            $state.go("triangular-no-scroll.admin-default-no-scroll.timeslot.locDetails",
                {
                    id: test.id
                });

        }

        breezeService.getEntities('TimeSlot').then(function (data)
        {
            vm.items = data.results;
        });
    }


})();
