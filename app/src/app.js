// Framework
import uiRouter from 'angular-ui-router';
import 'angular-resource';
import 'angular-local-storage';

// Components
import Core from './core';
import { DraftAid, Rankings, About } from './components';

// Styles
import './bootstrap.less';
import './app.less';

const ffApp = angular
  .module('ffApp', [
    uiRouter,
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

  // Local Storage Prefix
  .config((localStorageServiceProvider, $stateProvider, $urlRouterProvider) => {
    localStorageServiceProvider.setPrefix('ffApp_');
    $urlRouterProvider.otherwise('/draft-aid');
  })
  .name;

export default ffApp;
