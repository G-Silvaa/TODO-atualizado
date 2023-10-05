import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/initial-page/initial-page.module').then(m => m.InitialPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register-page/register-page/register-page.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'content',
    loadChildren: () => import('./pages/content-page/content-page.module').then(m => m.ContentPageModule)
  },
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
