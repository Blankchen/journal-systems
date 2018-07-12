import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '@shared/shared.module';
import { AuthComponent } from './auth.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [{
  path: '',
  component: AuthComponent,
  children: [
    {
      path: 'sign-in',
      component: SignInComponent,
    },
    {
      path: 'sign-up',
      component: SignUpComponent,
    },
  ]
}
];


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    AuthComponent,
    SignInComponent,
    SignUpComponent,
  ],
})
export class AuthModule { }
