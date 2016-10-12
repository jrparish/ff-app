import { RankingsComponent } from './rankings.component';
import adapter from '../../adapter';

const rankings = angular
  .module('rankings', [])
  .directive('ffRankings', <angular.IDirectiveFactory> adapter.downgradeNg2Component(RankingsComponent))
  .config($stateProvider => {
    $stateProvider.state({
      name: 'rankings',
      url: '/rankings',
      component: 'ffRankings'
    });
  })
  .name;

export default rankings;
