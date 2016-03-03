(function () {
    'use strict';

    angular
        .module('pt.instructor')
        .controller('instructorController', fn);
    /* @ngInject */
    function fn(instructormodel,$state) {
        var vm = this;

        //Controller Interface
         vm.getDetail = getDetail;
         vm.share = share;

        //Implementation starts here
        function getDetail(id) {
            $state.go("triangular.admin-default.teamList.teamDetail", {
                id: id
            });

        }
        function share(message) {
            $mdToast.show({
                template: '<md-toast><span flex>' + message + '</span></md-toast>',
                position: 'top right',
                hideDelay: 3000,
                parent: $element
            });
        }
        function init() {
            vm.fabDirections = ['up', 'down', 'left', 'right'];
            vm.fabDirection = vm.fabDirections[0];
            vm.fabAnimations = ['md-fling', 'md-scale'];
            vm.fabAnimation = vm.fabAnimations[0];
            vm.fabStatuses = [false, true];
            vm.fabStatus = vm.fabStatuses[0]


             instructormodel.getData().then(function(data)

             {
                 vm.items=data.results;

             });
        }
        init();
    }
})();
