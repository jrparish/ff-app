// Framework
import angular from 'angular';
import 'angular-route';
import 'angular-resource';
import 'angular-local-storage';

// App Modules
import ffControllers from './controllers';
import ffFilters from './filters';
import ffServices from './services';
import ffResources from './resources';

// Styles
import './bootstrap.less';
import './app.scss';

// Templates
import RankingsTpl from 'templates/rankings.html';
import DraftAidTpl from 'templates/draft-aid.html';
import AboutTpl from 'templates/about.html';
import DraftHistoryTpl from 'templates/partials/draft-history.html';
import OverallRankingsTpl from 'templates/partials/overall-rankings.html';
import PositionRankingsTpl from 'templates/partials/position-rankings.html';

// Utility
import 'lodash'; // bad to use global - but using for now to get app running

/* App Module */

const ffApp = angular
  .module('ffApp', [
    'ngRoute',
    'ngResource',

    'LocalStorageModule',

    ffControllers,
    ffFilters,
    ffServices,
    ffResources
  ])

  // Constants
  .constant('REMOTE_HOST_URL', 'https://draftaid-api.herokuapp.com/')
  .constant('LOCAL_HOST_URL', 'http://localhost:9292/')
  .constant('USE_LOCAL_HOST', false)

  // Routes
  .config(['$routeProvider',
    function ($routeProvider) {
      $routeProvider.
        when('/rankings', {
          template: RankingsTpl,
          controller: 'RankingsCtrl'
        }).
        when('/draft-aid', {
          template: DraftAidTpl,
          controller: 'DraftAidCtrl'
        }).
        when('/about', {
          template: AboutTpl
        }).
        otherwise({
          redirectTo: '/draft-aid'
        });
    }])

  // Local Storage Prefix
  .config(['localStorageServiceProvider',
    function (localStorageServiceProvider) {
      localStorageServiceProvider.setPrefix('jayzhengff_');
    }])

  // TODO - Refactor this using ui-router or something.
  // Loads partials into cache to be used with ngInclude
  .run(['$templateCache', function ($templateCache) {
    const urls = [
      {
        tpl: DraftHistoryTpl,
        url: 'draft-history.html'
      },
      {
        tpl: OverallRankingsTpl,
        url: 'overall-rankings.html'
      },
      {
        tpl: PositionRankingsTpl,
        url: 'position-rankings.html'
      }
    ];
    urls.forEach(obj => {
      $templateCache.put(obj.url, obj.tpl);
    });
  }]);
