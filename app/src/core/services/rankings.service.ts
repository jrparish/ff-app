class RankingsService {

  formats: Array<any> = [
    { label: 'Standard', value: 'standard' },
    { label: 'PPR', value: 'ppr' },
    { label: '0.5 PPR', value: 'half_ppr' }
  ];

  positions: Array<string> = ['RB', 'WR', 'QB', 'TE', 'DST'];

}

export default RankingsService;
