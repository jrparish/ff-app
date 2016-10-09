class RankingsController {

  // Initializations
  Ranking;
  formats: Array<string> = [];
  format: string  = 'standard';
  predicate: string = 'rank';
  reverse: boolean = false;
  loading: boolean = false;
  rankings: Array<any> = [];

  /* @ngInject */
  constructor(Ranking, Rankings) {
    this.Ranking = Ranking;
    this.formats = Rankings.formats;
    this.loadRankings(this.format);
  }

  loadRankings(format, week = 0) {
    this.loading = true;
    this.format = format;
    this.Ranking.index(format, week)
      .then(data => {
        this.rankings = data.rankings;
        this.loading = false;
      }, () => {
        this.loading = false;
      });
  }

}

export default RankingsController;
