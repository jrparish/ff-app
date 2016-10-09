import DraftAidComponent from './draft-aid.component';
import DraftAidService from './draft-aid.service';
import DraftHistoryTpl from 'components/draft-aid/partials/draft-history.html';
import OverallRankingsTpl from 'components/draft-aid/partials/overall-rankings.html';
import PositionRankingsTpl from 'components/draft-aid/partials/position-rankings.html';

const DraftAid = angular
  .module('DraftAid', [])
  .component('ffDraftAid', DraftAidComponent)
  .factory('DraftAid', DraftAidService)
  .config($stateProvider => {
    $stateProvider.state({
      name: 'draft-aid',
      component: 'ffDraftAid'
    })
    .state({
      name: 'draft-aid.views',
      url: '/draft-aid',
      views: {
        'overall-rankings': {
          template: OverallRankingsTpl
        },
        'draft-history': {
          template: DraftHistoryTpl
        },
        'position-rankings': {
          template: PositionRankingsTpl
        }
      }
    });
  })
  .name;

export default DraftAid;
