class NavBarController {

  /* @ngInject */
  constructor($location) {
    this.$location = $location;
  }

  getClass(path) {
    if (this.$location.path().substr(0, path.length) === path) {
      return 'active';
    }
    return '';
  }
}

export default NavBarController;
