import RankingsService from './rankings.service';

const services = angular
  .module('core.services', [])
  .service('Rankings', RankingsService)
  .name;

export default services;
