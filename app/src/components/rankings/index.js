import RankingsComponent from './rankings.component';

const rankings = angular
  .module('rankings', [])
  .component('ffRankings', RankingsComponent)
  .name;

export default rankings;
