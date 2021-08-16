import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'register' }, 
  { path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule) }, 
  { path: 'photos', loadChildren: () => import('./pages/photos/photos.module').then(m => m.PhotosModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
