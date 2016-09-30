export default function RankingsService() {
  var formats = [ {label: 'Standard', value: 'standard'},
                  {label: 'PPR', value: 'ppr'},
                  {label: '0.5 PPR', value: 'half_ppr'} ];

  var positions = ['RB', 'WR', 'QB', 'TE', 'DST'];

  return {
    formats: formats,
    positions: positions
  };
}
