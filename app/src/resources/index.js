import RankingService from './ranking.service';

/* Resources */

const ffResources = angular
  .module('ffResources', [])
  .factory('Ranking', RankingService)
  .name;

export default ffResources;
