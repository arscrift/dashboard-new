import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalvarComponent } from './salvar/salvar.component';
import { ManterAdministradorComponent } from './manter-administrador.component';

const routes: Routes = [
	{ path: 'listar', component: ManterAdministradorComponent },
	{ path: 'cadastrar', component: SalvarComponent },
	{ path: 'alterar/:codigo-do-administrador', component: SalvarComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AdministradorRoutingModule { }