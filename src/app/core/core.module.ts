import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '@core/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';


import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';


const COMPONENTS = [
  HeaderComponent,
];


const MODULES = [
  MatToolbarModule,
  MatButtonModule,

  AngularFirestoreModule, // imports firebase/firestore, only needed for database features
  AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
  AngularFireStorageModule, // imports firebase/storage only needed for storage features
];

@NgModule({
  imports: [
    CommonModule,
    ...MODULES
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS, ...MODULES]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

}
