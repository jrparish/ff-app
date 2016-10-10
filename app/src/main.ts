import 'zone.js/dist/zone';
import 'reflect-metadata';
import 'angular';

import adapter from './adapter';
import ffApp from './app';

adapter.bootstrap(document.body, [ ffApp ], { strictDi: true });
