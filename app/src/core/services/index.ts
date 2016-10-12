import RankingsService from './rankings.service';
import adapter from '../../adapter';

const services = angular
  .module('core.services', [])
  .service('Rankings', RankingsService)
  .name;

adapter.upgradeNg1Provider('Rankings');

export default services;
