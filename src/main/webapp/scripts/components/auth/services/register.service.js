'use strict';

angular.module('agendadaniApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


