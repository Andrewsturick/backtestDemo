/**
 * Created by Admin on 3/3/2016.
 */
(function() {
    'use strict';

    angular
        .module('pt.Admin')
        .controller('instructor_dialogController', mycntrl);



    /* @ngInject */
    function mycntrl($stateParams,$mdDialog)
    {

            var vm = this;


            function init()
            {
                vm.id = $stateParams.id;
            }

            init();
        }










})();
