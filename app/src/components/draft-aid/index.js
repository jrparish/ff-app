import DraftAidComponent from './draft-aid.component';
import DraftAidService from './draft-aid.service';
import DraftHistoryTpl from 'components/draft-aid/partials/draft-history.html';
import OverallRankingsTpl from 'components/draft-aid/partials/overall-rankings.html';
import PositionRankingsTpl from 'components/draft-aid/partials/position-rankings.html';

const DraftAid = angular
  .module('DraftAid', [])
  .component('ffDraftAid', DraftAidComponent)
  .factory('DraftAid', DraftAidService)
  .run($templateCache => {

    // TODO - Refactor this using ui-router or something.
    // Loads partials into cache to be used with ngInclude
    const urls = [
      {
        tpl: DraftHistoryTpl,
        url: 'draft-history.html'
      },
      {
        tpl: OverallRankingsTpl,
        url: 'overall-rankings.html'
      },
      {
        tpl: PositionRankingsTpl,
        url: 'position-rankings.html'
      }
    ];

    urls.forEach(obj => {
      $templateCache.put(obj.url, obj.tpl);
    });
  })
  .name;

export default DraftAid;
