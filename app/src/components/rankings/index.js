import RankingsComponent from './rankings.component';

const rankings = angular
  .module('rankings', [])
  .component('ffRankings', RankingsComponent)
  .config($stateProvider => {
    $stateProvider.state({
      name: 'rankings',
      url: '/rankings',
      component: 'ffRankings'
    });
  })
  .name;

export default rankings;
