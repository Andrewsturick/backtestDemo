/**
 * Created by jpathak2 on 3/7/16.
 */
(function () {
    'use strict';

    angular
        .module('pt.Admin')
        .controller('timeslotAddController', fnCtrl);

    /* @ngInject */
    function fnCtrl($state,breezeService,timeslotService) {
        var vm = this;


        vm.backbutton=backbutton;


        vm.myfunc = function myfunc(TimeslotInfo) {
            var formData = TimeslotInfo.data;

            var data = {
                title: formData.timeslot.title,
            }


            breezeService.createEntity('timeslot', data);
            //uploadFiles(formData.instructor.file)
            timeslotService.a.push(data);
        }



        function backbutton() {
            $state.go("triangular-no-scroll.admin-default-no-scroll.timeslot.timeDetails",{id:23});
        }





    }
})();
