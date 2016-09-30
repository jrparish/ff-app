import NavBarComponent from './navbar.component';

const navbar = angular
  .module('core.navbar', [])
  .component('ffNavBar', NavBarComponent)
  .name;

export default navbar;
