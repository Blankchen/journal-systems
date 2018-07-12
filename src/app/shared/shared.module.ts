import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@shared/material.module';

const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];

const SHARED_MODULES = [
  FlexLayoutModule,
  MaterialModule,
];

const COMPONENTS = [];

const ENTRY_COMPONENTS = [];

const PIPES = [];

const ROOT_PROVIDERS = [];

@NgModule({
  imports: [...BASE_MODULES, ...SHARED_MODULES],
  exports: [...BASE_MODULES, ...SHARED_MODULES, ...COMPONENTS, ...PIPES],
  declarations: [...COMPONENTS, ...PIPES],
  entryComponents: [...ENTRY_COMPONENTS],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: SharedModule,
      providers: [...ROOT_PROVIDERS]
    };
  }
}
