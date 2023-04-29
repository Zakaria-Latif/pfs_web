import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: "", redirectTo: "/welcome", pathMatch: 'full' },
  { path: "test", component: TestComponent },
  { 
    path: "welcome", 
    loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule)
  },
  { 
    path: "home",
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  { 
    path: "**", 
    loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule)
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
