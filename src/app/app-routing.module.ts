import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'home',
    loadChildren: () => import('./home/home.module').then(module => module.HomeModule)
  },
  { path:'catalogo',
    loadChildren: () => import('./catalogo/catalogo.module').then(module => module.CatalogoModule)
  },
  { path:'personas',
    loadChildren: () => import('./personas/personas.module').then(module => module.PersonasModule)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full', // full => /abc - prefix => /abc/a/d/asdasd/dasd
  },
  {
    path: '**',
    redirectTo: '/home',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
