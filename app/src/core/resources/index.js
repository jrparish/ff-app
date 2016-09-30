import RankingService from './ranking.service';

const resources = angular
  .module('core.resources', [])
  .factory('Ranking', RankingService)
  .name;

export default resources;
