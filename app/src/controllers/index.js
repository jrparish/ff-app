import DraftAidController from './draft-aid.controller';
import NavBarController from './nav-bar.controller';
import RankingsController from './rankings.controller';

/* Controllers */

const ffControllers = angular
  .module('ffControllers', [])
  .controller('DraftAidCtrl', DraftAidController)
  .controller('NavBarCtrl', NavBarController)
  .controller('RankingsCtrl', RankingsController)
  .name;

export default ffControllers;
