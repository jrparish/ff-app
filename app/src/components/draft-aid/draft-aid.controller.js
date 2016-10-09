import { find } from 'lodash';

class DraftAidController {

  // Initializations
  format = 'standard';
  drafted = [];
  search = {};
  settings = {
    positionLimit: 15
  };

  /* @ngInject */
  constructor(Ranking, Rankings, DraftAid, localStorageService) {
    Object.assign(this, { Ranking, DraftAid, localStorageService });

    this.formats = Rankings.formats;
    this.positions = Rankings.positions;

    this.loadRankings(this.format);
  }

  draft(player) {
    this.search.name = '';

    this.drafted.push(player);
    player.drafted = this.drafted.length;

    this.localStorageService.set(`drafted_${this.format}`, this.drafted);
  }

  undraft() {
    const player = this.drafted.pop();

    const found = find(this.rankings, p => p.name === player.name);
    found.drafted = null;

    this.localStorageService.set(`drafted_${this.format}`, this.drafted);
  }

  restart() {
    this.drafted = [];
    this.DraftAid.populateDrafted(this.rankings, this.drafted);

    this.localStorageService.remove(`drafted_${this.format}`);
  }

  loadRankings(format, week) {
    this.loading = true;
    this.format = format;

    this.Ranking.index(format, week || 0)
      .then(data => {
        this.rankings = data.rankings;

        this.drafted = this.localStorageService.get(`drafted_${this.format}`) || [];
        this.DraftAid.populateDrafted(this.rankings, this.drafted);

        this.loading = false;
      }, () => {
        this.loading = false;
      });
  }

  draftGrade(player) {
    const diff = player.drafted - player.rank;
    return this.DraftAid.grade(diff);
  }

  positionFilter(position) {
    if (position === null) {
      return { drafted: null };
    }
    return { drafted: null, position };
  }

  positionText(position) {
    const positionMappings = {
      RB: 'Running Backs',
      WR: 'Wide Receivers',
      QB: 'Quarterbacks',
      DST: 'Defenses',
      TE: 'Tightends'
    };

    return positionMappings[position];
  }

}

export default DraftAidController;
