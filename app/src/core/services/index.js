import RankingsService from './rankings.service';

const services = angular
  .module('core.services', [])
  .factory('Rankings', RankingsService)
  .name;

export default services;
