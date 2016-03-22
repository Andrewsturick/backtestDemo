(function () {
    'use strict';

    angular
        .module('pt.Admin')
        .controller('InstructorController', fnCtrl);


    function fnCtrl(breezeService,$scope, $state,$mdMedia,$mdDialog,$rootScope,$window,excelService) {
        var vm = this;
        vm.getDetail = getDetail;
        vm.Add_instructor=Add_instructor;

        vm.export = exportToExcel;
        vm.cells = [];
        function exportToExcel()
        {
            excelService.getRangeValues("A1:B2").then(function (rows) {
                vm.cells = [];
                var cells = [];
                for (var r = 0; r < rows.length; r++) {
                    for (var c = 0; c < rows[r].length; c++) {
                        cells.push({
                            row: r + 1,
                            col: $scope.getColumnLetter(c),
                            value: (rows[r][c].length > 0) ? rows[r][c] : 'empty'
                        });
                    }
                }
                vm.cells = cells;
            }).catch(function (err) {
                console.log(err);
            }).finally(function () {
                console.log("done");
            });
        }

        function Add_instructor()
        {
            $state.go("triangular-no-scroll.admin-default-no-scroll.instructor.insAdd");
        }


        function getDetail(item)
        {
            vm.isViewMobile = $mdMedia('xs');
            $state.go("triangular-no-scroll.admin-default-no-scroll.instructorList.read",
                {
                id: item.Id
            });

        }
        //private
        function init() {
            vm.windowHeight = $window.innerHeight - 70 ;
            $rootScope.$emit('startProcess')
            breezeService.getEntities('instructors',"","Instructor").then(function (data) {
                if(data.results)
                {
                    vm.items = data.results;
                }
                else {
                    vm.items = data;
                }

                $rootScope.$emit('endProcess')
            });
        }

        init();
        $scope.$on('backbutton', openlist);
        function openlist()
        {
            vm.isViewMobile = false;
            $state.go("triangular-no-scroll.admin-default-no-scroll.instructorList");
        }

    }
})();
