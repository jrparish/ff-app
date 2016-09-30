/* Filters */

const ffFilters = angular
  .module('ffFilters', [])
  .filter('interpolate', ['version', function (version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  }])
  .name;

export default ffFilters;
