(function() {
    'use strict';

    angular
        .module('pt.Admin')
        .controller('LocationDetailsController', fnCtrl);

    /* @ngInject */
    function fnCtrl( $stateParams, instructorService,instructormodel,$state,breezeService) {
        var vm = this;
        vm.backbutton=backbutton;
        vm.item = instructorService.getDetail($stateParams.id)[0];
        function backbutton() {
            $state.go("triangular-no-scroll.admin-default-no-scroll.location");
        }

        instructormodel.getData().then(function (data)
        {
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
