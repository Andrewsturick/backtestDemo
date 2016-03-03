(function () {
    'use strict';

    angular
        .module('pt.instructor')
        .controller('instructorDetailController', fn);

    /* @ngInject */
    function fn($stateParams)
    {
        var vm = this;


        function init()
        {
            vm.id = $stateParams.id;
        }

        init();
    }
})();
