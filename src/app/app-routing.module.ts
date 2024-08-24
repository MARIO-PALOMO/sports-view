import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { EquipoDetalleComponent } from './equipo-detalle/equipo-detalle.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'equipo-detalle/:id', component: EquipoDetalleComponent
  },
  {
    path: '',
    loadChildren: () => import('./equipo-detalle/equipo-detalle.module').then(m => m.EquipoDetalleModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
