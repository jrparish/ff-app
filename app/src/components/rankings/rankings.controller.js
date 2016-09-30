class RankingsController {

  // Initializations
  format = 'standard';
  predicate = 'rank';
  reverse = false;

  /* @ngInject */
  constructor(Ranking, Rankings) {
    this.Ranking = Ranking;
    this.formats = Rankings.formats;
    this.loadRankings(this.format);
  }

  loadRankings(format, week) {
    this.loading = true;
    this.format = format;
    this.Ranking.index(format, week || 0)
      .success(data => {
        this.rankings = data.rankings;
        this.loading = false;
      })
      .error(() => {
        this.loading = false;
      });
  }

}

export default RankingsController;
