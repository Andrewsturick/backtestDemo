(function () {
    'use strict';

    angular
        .module('pt.Admin')
        .controller('InstructorController', fnCtrl);


    function fnCtrl(breezeService,$scope, $state,$mdMedia,$mdDialog) {
        var vm = this;
        vm.getDetail = getDetail;
        vm.Add_instructor=Add_instructor;

        breezeService.getEntities('instructors').then(function (data) {
            vm.items = data.results;
        });

        function openlist()
        {
            vm.isViewMobile = false;
            $state.go("triangular-no-scroll.admin-default-no-scroll.instructor");
        }


        function Add_instructor()
        {
            $state.go("triangular-no-scroll.admin-default-no-scroll.instructor.insAdd");
        }


        function getDetail(test)
        {
            vm.isViewMobile = $mdMedia('xs');
            $state.go("triangular-no-scroll.admin-default-no-scroll.instructor.insDetails",
                {
                id: test.Id
            });

        }
        $scope.$on('backbutton', openlist);





    }
})();
