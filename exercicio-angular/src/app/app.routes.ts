import { Routes } from '@angular/router';
import { SignInComponent } from './views/account/sign-in/sign-in.component'
import { SignUpComponent } from './views/account/sign-up/sign-up.component'
import { HomeComponent } from './views/app/home/home.component'
import { HelpComponent } from './views/app/help/help.component'
import { NotFoundComponent } from './views/not-found/not-found.component'
import { MainComponent } from './views/app/main/main.component'

export const routes: Routes = [
   {
     path: 'account/sign-in',
     component: SignInComponent,

   },

   {
    path: 'account/sign-up',
    component: SignUpComponent,

   },

   {
     path: '',
     component: MainComponent,
     children: [

          
      {
        path: '',
        component: HomeComponent,

      },
      {
        path: 'help',
        component: HelpComponent,

      },

      {
        path: '**',
        component: NotFoundComponent,

      }


    ]
  }

];
