(function() {
    'use strict';

    angular
        .module('pt.d3')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($translatePartialLoaderProvider, $stateProvider, triMenuProvider)
    {


        $stateProvider
        .state('triangular.admin-default.d3', {
            url: '/d3/',
            templateUrl: 'app/pt/public/d3/d3.tmpl.html',
           controller: 'd3Controller',
            controllerAs: 'vm'
        });

        triMenuProvider.addMenu({
            name: 'd3Demo',
            icon: 'zmdi zmdi-home',
            priority: 1.1,
                state: 'triangular.admin-default.d3',
                type: 'link'
        });
    }


})();
