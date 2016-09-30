import AboutComponent from './about.component';

const about = angular
  .module('about', [])
  .component('ffAbout', AboutComponent)
  .name;

export default about;
