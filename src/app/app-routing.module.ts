import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'home',
    loadChildren: () => import('./home/home.module').then(module => module.HomeModule)
  },
  { path:'catalogo',
    loadChildren: () => import('./catalogo/catalogo.module').then(module => module.CatalogoModule)
  },
  {
    path: '',
    redirectTo: '/home/main-page',
    pathMatch: 'full', // full => /abc - prefix => /abc/a/d/asdasd/dasd
  },
  {
    path: '**',
    redirectTo: '/home/main-page',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
