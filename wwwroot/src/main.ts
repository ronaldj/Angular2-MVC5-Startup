import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { TabService } from './app/tab/tab.service';

import './style/app.css';

// depending on the env mode, enable prod mode or add debugging modules
if (process.env.ENV === 'build') {
  enableProdMode();
}

platformBrowserDynamic()
    .bootstrapModule(AppModule, [TabService])
    .catch((err: any) => console.error(err));