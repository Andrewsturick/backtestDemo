(function () {
    'use strict';

    angular
        .module('pt.contact')
        .controller('contactController', fn);

    /* @ngInject */
    function fn(contactmodel, $scope, $timeout, $mdToast, instructormodel, breezeService,Upload) {
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
        vm.upload = upload;


        instructormodel.getData().then(function (data) {
            vm.data.instructor = data.results;
        });

        breezeService.getEntities('TimeSlot').then(function (data) {
            vm.data.timeslot = data.results;
        });

        breezeService.getEntities('location').then(function (data) {
            vm.data.location = data.results;
        });


        var fileList;

        function upload($files) {
            if ($files !== null && $files.length > 0) {
                fileList = $files;

                uploadStarted();

                $timeout(uploadComplete, 4000);
            }
        }

        function uploadStarted() {
            vm.status = 'uploading';
        }

        function uploadComplete() {
            vm.status = 'complete';
            var message = 'Thanks for ';
            for (var file in fileList) {
                message += fileList[file].name + ' ';
            }
            $mdToast.show({
                template: '<md-toast><span flex>' + message + '</span></md-toast>',
                position: 'bottom right',
                hideDelay: 5000
            });

            $timeout(uploadReset, 3000);
        }

        function uploadReset() {
            vm.status = 'idle';
        }


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
                zip: parseInt(formData.address.zip) ,
                state: formData.address.State,
                country: formData.address.country,
                InstructorId: parseInt(formData.confirm.instuctor),
                locationId: parseInt(formData.confirm.location),
                TimeslotId: parseInt(formData.confirm.timeslot)
            }
            breezeService.createEntity('Student_Registration', data);
            uploadFiles(formData.student.file);

        }

        function uploadFiles(files) {
            Upload.upload({
                url: 'http://localhost:60305/breeze/home/',
                data: { file: files }
            })
                .then(function(response) {
                    console.log(response)


                }, function(err) {
                    console.log(err)
                });


        }
    }
})();
