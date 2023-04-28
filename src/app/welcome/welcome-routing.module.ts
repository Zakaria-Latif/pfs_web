import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
    {   path: '', component: WelcomeComponent,
        children: [
            {
                path: '', 
                loadChildren: () => import('./default/default.module').then(m => m.DefaultModule)
            }, 
            {
                path: 'about', 
                loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
            },
            {
                path: 'contact', 
                loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
            }, 
            {
                path: 'login', 
                loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
            }, 
            {
                path: 'signup',
                loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule)
            }, 
        ] 
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
