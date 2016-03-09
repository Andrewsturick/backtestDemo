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

            .state('triangular-no-scroll.admin-default-no-scroll.location', {
                url: '/Admin/location/',
                templateUrl: 'app/pt/Admin/Location_info/location.tmpl.html',
                controller: 'LocationController',
                controllerAs: 'vm'
            })
            .state('triangular-no-scroll.admin-default-no-scroll.location.locDetails', {
                url: 'Details/:id',
                templateUrl: 'app/pt/Admin/Location_info/location_Details.tmpl.html',
                controller: 'LocationDetailsController',
                controllerAs: 'vm'
            })
            .state('triangular-no-scroll.admin-default-no-scroll.timeslot', {
            url: '/Admin/timeslot/',
            templateUrl: 'app/pt/Admin/Timeslot_info/timeslot.tmpl.html',
            controller: 'TimeslotController',
            controllerAs: 'vm'
        })
            .state('triangular-no-scroll.admin-default-no-scroll.timeslot.timeDetails', {
                url: '/Details/:id/',
                templateUrl: 'app/pt/Admin/Timeslot_info/timeslot_Details.tmpl.html',
                controller: 'TimeslotDetailsController',
                controllerAs: 'vm'
            })


        triMenuProvider.addMenu({
            name: 'Admin',
            icon: 'zmdi zmdi-view-list-alt',
            type: 'dropdown',
            priority: 1.5,
            children: [{
                name: 'Instructor',
                state: 'triangular-no-scroll.admin-default-no-scroll.instructor',
                icon: 'zmdi zmdi-account-box',
                type: 'link'
            },{
                name: 'Location',
                state: 'triangular-no-scroll.admin-default-no-scroll.location',
                icon: 'zmdi zmdi-globe-alt',
                type: 'link'
            },{
                name: 'Timeslot',
                state: 'triangular-no-scroll.admin-default-no-scroll.timeslot',
                icon: 'zmdi zmdi-time',
                type: 'link'
            }]
        });

        $authProvider.facebook({
            clientId: '255268371341858'

        });

    }
})();
