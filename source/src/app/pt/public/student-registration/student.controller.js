(function () {
    'use strict';

    angular
        .module('pt.student')
        .controller('Controller', fn);

    /* @ngInject */
    function fn( $scope, $timeout, $mdToast, instructormodel, breezeService,Upload) {
        var vm = this;
        vm.data = {};
        //todo:put it on vm
        $scope.myDate = new Date();
        $scope.minDate = new Date(
            $scope.myDate.getFullYear(),
            $scope.myDate.getMonth() - 2,
            $scope.myDate.getDate());
        $scope.maxDate = new Date(
            $scope.myDate.getFullYear(),
            $scope.myDate.getMonth() + 2,
            $scope.myDate.getDate());
        $scope.onlyWeekendsPredicate = function (date) {
            var day = date.getDay();
            return day === 0 || day === 6;
        }

        vm.status = 'idle';  // idle | uploading | complete

        instructormodel.getData().then(function (data) {
            vm.data.instructor = data.results;
        });

        breezeService.getEntities('TimeSlot').then(function (data) {
            vm.data.timeslot = data.results;
        });

        breezeService.getEntities('location').then(function (data) {
            vm.data.location = data.results;
        });


        vm.myfunc = function myfun(studentInfo) {
            var formData = studentInfo.data;

            var data = {
                firstName: formData.student.firstName,
                lastName: formData.student.lastName,
                gender: formData.student.Gender,
                email: formData.student.email,
                dob: formData.student.dob,
                ContactNo: formData.student.phno,
                address: formData.address.line1,
                City: formData.address.town,
                zip: parseInt(formData.address.zip),
                state: formData.address.State,
                country: formData.address.country,
                InstructorId: parseInt(formData.confirm.instuctor),
                locationId: parseInt(formData.confirm.location),
                TimeslotId: parseInt(formData.confirm.timeslot)
            }
            breezeService.createEntity('Student_Registration', data).then(function (data) {
                var entityId = data.entities[0].Id;
                uploadFiles(formData.student.file, entityId);
            });
        }

        function uploadFiles(files, entityId) {
            Upload.upload({
                url: 'http://w2idemo.azurewebsites.net/breeze/home/Upload',
                data: {
                    file: files,
                    entityId: entityId
                }
            })
                .then(function (response) {
                    console.log(response)


                }, function (err) {
                    console.log(err)
                });
        }
    }
})();
