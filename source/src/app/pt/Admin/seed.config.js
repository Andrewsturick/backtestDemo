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

            .state('triangular-no-scroll.admin-default-no-scroll.Location', {
                url: '/Admin/location/',
                templateUrl: 'app/pt/Admin/Location_info/location.tmpl.html',
                controller: 'LocationController',
                controllerAs: 'vm'
            })
            .state('triangular-no-scroll.admin-default-no-scroll.Location.locDetails', {
                url: 'Details/:id',
                templateUrl: 'app/pt/Admin/Location_info/location_Details.tmpl.html',
                controller: 'LocationDetailsController',
                controllerAs: 'vm'
            })
            .state('triangular-no-scroll.admin-default-no-scroll.Timeslot', {
            url: '/Admin/timeslot/',
            templateUrl: 'app/pt/Admin/Timeslot_info/timeslot.tmpl.html',
            controller: 'TimeslotController',
            controllerAs: 'vm'
        })
            .state('triangular-no-scroll.admin-default-no-scroll.Timeslot.time_Details', {
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
                state: 'triangular-no-scroll.admin-default-no-scroll.Location',
                icon: 'zmdi zmdi-globe-alt',
                type: 'link'
            },{
                name: 'Timeslot',
                state: 'triangular-no-scroll.admin-default-no-scroll.Timeslot',
                icon: 'zmdi zmdi-time',
                type: 'link'
            }]
        });

        $authProvider.facebook({
            clientId: '255268371341858'

        });

    }
})();
