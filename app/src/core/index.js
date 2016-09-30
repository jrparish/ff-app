import NavBar from './navbar';
import Resources from './resources';
import Services from './services';

const core = angular
  .module('core', [
    NavBar,
    Resources,
    Services
  ])
  .name;

export default core;