import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { LoginGoogleComponent } from './login-google/login-google.component';
import { LoginFormComponent } from './users/login-form/login-form.component';


const routes: Routes = [
  { path: 'login-google', component: LoginGoogleComponent },
  { path: 'login-mail', component: LoginFormComponent },
 //   // { path: 'detail/:id', component: DetailComponent }
 // { path: 'capacitacion/:tallerKey', component: CapacitacionComponent },
 // { path: 'capacitaciones', component: CapacitacionesComponent },
 // { path: 'ofertas-laborales-detalle', component: OfertasLaboralesDetalleComponent },
 // { path: 'ofertas-laborales', component: OfertasLaboralesComponent },
 // { path: 'usuarios', component: UsuariosComponent },
 // { path: 'postulaciones', component: PostulacionesComponent },

 // { path: 'talleres', component: TalleresListComponent },
 //    { path: 'talleres-add', component: TalleresCrearComponent },
 //    { path: 'talleres-modificar/:tallerKey', component: TalleresModificarComponent }
 // // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
 // // { path: 'detail/:id', component: HeroDetailComponent }
];



@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
