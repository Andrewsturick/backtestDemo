(function () {
    'use strict';

    angular
        .module('pt.Admin')
        .controller('studentController', fnCtrl);


    function fnCtrl(breezeService,$scope, $state,$mdMedia,$mdDialog) {
        var vm = this;
        vm.getDetail = getDetail;


        breezeService.getEntities('students').then(function (data) {
            vm.items = data.results;
        });

        function openlist()
        {
            vm.isViewMobile = false;
            $state.go("triangular-no-scroll.admin-default-no-scroll.student");
        }



        function getDetail(test)
        {
            vm.isViewMobile = $mdMedia('xs');
            $state.go("triangular-no-scroll.admin-default-no-scroll.student.studentDetails",
                {
                    id: test.Id
                });

        }
        $scope.$on('closeItem', openlist);





    }
})();
