 'use strict';

angular.module('agendadaniApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-agendadaniApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-agendadaniApp-params')});
                }
                return response;
            }
        };
    });
