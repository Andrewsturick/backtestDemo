(function() {
    'use strict';

    angular
        .module('pt.Admin')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider,$authProvider) {
        $translatePartialLoaderProvider.addPart('app/pt/Admin');

        $stateProvider

            .state('triangular-no-scroll.admin-default-no-scroll.instructor', {
                url: '/Admin/instructor/',
                templateUrl: 'app/pt/Admin/instructor_info/instructor.tmpl.html',
                controller: 'InstructorController',
                controllerAs: 'vm'
            })
            //Todo:rename this state to readonly
            .state('triangular-no-scroll.admin-default-no-scroll.instructor.insDetails', {
                url: 'readOnly/:id',
                templateUrl: 'app/pt/Admin/instructor_info/instructorDetails.tmpl.html',
                controller: 'InstructorDetailsController',
                controllerAs: 'vm'
            })
            .state('triangular-no-scroll.admin-default-no-scroll.instructor.insEdit', {
                url: 'edit/:id',
                templateUrl: 'app/pt/Admin/instructor_info/instructorEdit.tmpl.html',
                controller: 'InstructorEditController',
                controllerAs: 'vm'
            })
            .state('triangular-no-scroll.admin-default-no-scroll.instructor.insAdd', {
                url: 'add/',
                templateUrl: 'app/pt/Admin/instructor_info/add_instructor.tmpl.html',
                controller: 'InstructorAddController',
                controllerAs: 'vm'
            })




            .state('triangular-no-scroll.admin-default-no-scroll.student', {
                url: '/Admin/student',
                templateUrl: 'app/pt/Admin/student_info/student.tmpl.html',
                controller: 'studentController',
                controllerAs: 'vm'
            })
            .state('triangular-no-scroll.admin-default-no-scroll.student.studentDetails', {
                url: 'readOnly/:id',
                templateUrl: 'app/pt/Admin/student_info/studentDetails.tmpl.html',
                controller: 'studentDetailsController',
                controllerAs: 'vm'
            })
            .state('triangular-no-scroll.admin-default-no-scroll.student.studentEdit', {
                url: 'edit/:id',
                templateUrl: 'app/pt/Admin/student_info/studentEdit.tmpl.html',
                controller: 'studentEditController',
                controllerAs: 'vm'
            })



            .state('triangular.admin-default.new_information', {
                url: '/Admin/blank3',
                templateUrl: 'app/pt/Admin/blank3.tmpl.html'
            });


        //triMenuProvider.addMenu({
        //    name: 'Admin',
        //    icon: 'zmdi zmdi-view-list-alt',
        //    type: 'dropdown',
        //    priority: 1.5,
        //    children: [{
        //        name: 'Instructor',
        //        state: 'triangular-no-scroll.admin-default-no-scroll.instructor',
        //        icon: 'zmdi zmdi-account-box',
        //        type: 'link'
        //    },{
        //        name: 'student_information',
        //        state: 'triangular.admin-default.student_information',
        //        icon: 'zmdi zmdi-library',
        //        type: 'link'
        //    },{
        //        name: 'blank-3',
        //        state: 'triangular.admin-default.extra-blank',
        //        icon: 'zmdi zmdi-view-list-alt',
        //        type: 'link'
        //    }]
        //});

        $authProvider.facebook({
            clientId: '255268371341858'

        });

    }
})();
