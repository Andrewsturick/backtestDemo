/**
 * Created by jpathak2 on 3/7/16.
 */
(function () {
    'use strict';

    angular
        .module('pt.Admin')
        .controller('InstructorEditController', fnCtrl);

    /* @ngInject */
    function fnCtrl($state,breezeService) {
        var vm = this;
            vm.myfunc=myfunc;

        vm.backbutton=backbutton;

        function myfunc(instructorinfo)
        {
            var data={
                    Name:instructorinfo.data.instructor.Name,
                    Style:instructorinfo.data.instructor.style,
                     isopen:false
                };
            breezeService.createEntity('instructors', data);

        }



        function backbutton() {
            $state.go("triangular-no-scroll.admin-default-no-scroll.instructor.insDetails",{id:23});
        }





    }
})();
