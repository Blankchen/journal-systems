import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];

const SHARED_MODULES = [
  MatToolbarModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
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
