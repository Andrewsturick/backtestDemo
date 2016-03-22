/**
 * Created by Jayant on 1/28/2016.
 */
(function() {
    'use strict';

    angular
        .module('pt.d3')
        .service('d3model', fn);

    /* @ngInject */
    function fn(breeze, $q)
    {
        this.getData = getData;
        function getData()
        {
            var a ={
               //plug in your dummy data here
            };
            return a;
        }
    }
})();
