import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardRoutingModule } from './modules/dashboard/dashboard-routing.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
];
/*Cuando la URL coincide exactamente con la ruta de acceso vacía, 
se redirige al URL /dashboard. Esto significa que cuando los usuarios
 visiten la raíz de la aplicación (por ejemplo, http://tu-sitio.com/), 
 serán automáticamente redirigidos a http://tu-sitio.com/dashboard.
 */

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false, useHash: true }),
    DashboardRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
