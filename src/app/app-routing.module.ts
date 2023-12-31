import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_guard/autorizado.guard';



const routes: Routes = [
  {
  path:'',
  redirectTo: 'initialpage',
  pathMatch: 'full'

  },
  
  {
    path: 'initialpage',
    loadChildren: () => import('./pages/initial-page/initial-page.module').then(m => m.InitialPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register-page/register-page/register-page.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'content', 
    loadChildren: () => import('./pages/content-page/content-page.module').then(m => m.ContentPageModule),
    canActivate: [AuthGuard]
    
  },
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
