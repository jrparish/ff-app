class NavBarController {

  $location: any;
  updatedAt: string;

  /* @ngInject */
  constructor($location, $scope, Ranking) {
    this.$location = $location;

    $scope.$watch(() => Ranking.updatedAt, updatedAt => (this.updatedAt = updatedAt));
  }

  getClass(path) {
    if (this.$location.path().substr(0, path.length) === path) {
      return 'active';
    }
    return '';
  }
}

export default NavBarController;
