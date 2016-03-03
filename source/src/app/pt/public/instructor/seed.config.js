(function () {
    'use strict';

    angular
        .module('pt.instructor')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider) {
        $translatePartialLoaderProvider.addPart('app/instructor');

        $stateProvider
            .state('triangular.admin-default.teamList', {
                url: '/instructor',
                templateUrl: 'app/pt/public/instructor/instructor.tmpl.html',
                // set the controller to load for this page
                controller: 'instructorController',
                controllerAs: 'vm'
            })
            .state('triangular.admin-default.teamList.teamDetail', {
                url: '/:id',
                templateUrl: 'app/pt/public/instructor/instructor.detail.tmpl.html',
                controller: 'instructorDetailController',
                controllerAs: 'vm'
            });

        triMenuProvider.addMenu({
            name: 'Team',
            icon: 'zmdi zmdi-accounts',
            priority: 1.2,
            state: 'triangular.admin-default.teamList',
            type: 'link'

        });
    }
})();
