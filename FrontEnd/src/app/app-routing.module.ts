import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'site',
    pathMatch: 'full'
  },
  {
    path: 'site',
    loadChildren: () => import('./modules/site/site.module').then(m => m.SiteModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
