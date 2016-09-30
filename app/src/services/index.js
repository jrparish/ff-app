import DraftAidService from './draft-aid.service';
import RankingsService from './rankings.service';

/* Services */

const ffServices = angular
  .module('ffServices', [])
  .factory('DraftAid', DraftAidService)
  .factory('Rankings', RankingsService)
  .name;

export default ffServices;
