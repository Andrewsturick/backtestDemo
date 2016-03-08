/**
 * Created by Admin on 3/7/2016.
 */
(function () {
    'use strict';

    angular
        .module('pt.Admin')
        .controller('LocationController', fnCtrl);

    /* @ngInject */
    function fnCtrl(locationmodel,contactmodel, $scope, $timeout,$mdMedia, $mdToast,$state, instructormodel, breezeService,Upload) {
        var vm = this;
        vm.getDetail = getDetail;


        function openlist()
        {
            vm.isViewMobile = false;
            $state.go("triangular-no-scroll.admin-default-no-scroll.location");
        }


        function getDetail(test)
        {
            vm.isViewMobile = $mdMedia('xs');
            $state.go("triangular-no-scroll.admin-default-no-scroll.location.locDetails",
                {
                    id: test.id
                });

        }

        breezeService.getEntities('location').then(function (data)
        {
            vm.items = data.results;
        });
    }


})();
