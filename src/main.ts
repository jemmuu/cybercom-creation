import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';




if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));



 // import practice 
  // import { testmodule } from './testmodule';

  // let testModule = new testmodule(12,88);
  // testModule.testfun();
  // testModule.X= 22;
  // let x = testModule.X;
  //   console.log(`new value of x is ${x}`);