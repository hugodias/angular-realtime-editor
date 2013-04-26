'use strict';

var app = angular.module('angularApp', ['ui','firebase']);


app.value('ui.config', {
    codemirror: {
        mode: 'text/x-php',
        lineNumbers: true,
        matchBrackets: true
    }
});

app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
