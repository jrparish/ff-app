import AboutComponent from './about.component';

const about = angular
  .module('about', [])
  .component('ffAbout', AboutComponent)
  .config($stateProvider => {
    $stateProvider.state({
      name: 'about',
      url: '/about',
      component: 'ffAbout'
    });
  })
  .name;

export default about;
