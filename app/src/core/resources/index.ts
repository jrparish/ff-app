import RankingService from './ranking.service';

const resources = angular
  .module('core.resources', [])
  .service('Ranking', RankingService)
  .name;

export default resources;
