import { UpgradeAdapter } from '@angular/upgrade';
import AppModule from './app.module';

const adapter = new UpgradeAdapter(AppModule);

export default adapter;
