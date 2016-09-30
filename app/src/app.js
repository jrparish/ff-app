// Framework
import angular from 'angular';
import 'angular-route';
import 'angular-resource';
import 'angular-local-storage';

// Components
import Core from './core';
import { DraftAid, Rankings, About } from './components';

// Styles
import './bootstrap.less';
import './app.less';

angular
  .module('ffApp', [
    'ngRoute',
    'ngResource',
    'LocalStorageModule',
    Core,
    DraftAid,
    Rankings,
    About
  ])

  // Constants
  .constant('REMOTE_HOST_URL', 'https://draftaid-api.herokuapp.com/')
  .constant('LOCAL_HOST_URL', 'http://localhost:9292/')
  .constant('USE_LOCAL_HOST', false)

  // Routes
  .config(function ($routeProvider) {
    $routeProvider
      .when('/rankings', {
        template: '<ff-rankings></ff-rankings>'
      })
      .when('/draft-aid', {
        template: '<ff-draft-aid></ff-draft-aid>'
      })
      .when('/about', {
        template: '<ff-about></ff-about>'
      })
      .otherwise({
        redirectTo: '/draft-aid'
      });
  })

  // Local Storage Prefix
  .config(function (localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('jayzhengff_');
  });
