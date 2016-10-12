import { Component, Inject } from '@angular/core';
import RankingsService from '../../core/services/rankings.service';
import RankingService from '../../core/resources/ranking.service';

@Component({
  selector: 'ff-rankings',
  templateUrl: './rankings.tpl.html'
})
export class RankingsComponent {

  // Initializations
  Ranking: RankingService;
  formats: Array<string> = [];
  format: string  = 'standard';
  predicate: string = 'rank';
  reverse: boolean = false;
  loading: boolean = false;
  rankings: Array<any> = [];

  constructor(@Inject('Ranking') Ranking: RankingService, @Inject('Rankings') Rankings: RankingsService) {
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
