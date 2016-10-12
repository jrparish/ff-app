import RankingService from './ranking.service';
import adapter from '../../adapter';

const resources = angular
  .module('core.resources', [])
  .service('Ranking', RankingService)
  .name;

adapter.upgradeNg1Provider('Ranking');

export default resources;
