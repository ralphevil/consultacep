import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ConsultaComponent } from './pages/consulta/consulta.component';
import { AuthGuardService } from './guards/auth.guard';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'consulta', canActivate: [AuthGuardService], component: ConsultaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
