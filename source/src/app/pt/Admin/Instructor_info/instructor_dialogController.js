/**
 * Created by Admin on 3/3/2016.
 */
(function() {
    'use strict';

    angular
        .module('pt.Admin')
        .controller('instructor_dialogController', mycntrl);

    /* @ngInject */
    function mycntrl($stateParams,instructorService,$scope)
    {

        var vm = this;
        vm.closeItem=closeItem;
        vm.deleteEmail=deleteEmail;

        vm.item =   instructorService.getDetail($stateParams.id)[0];

        function closeItem()
        {
             $scope.$emit('closeItem');
        }

        function deleteEmail() {
            $scope.$emit('deleteEmail');
        }



        }










})();
