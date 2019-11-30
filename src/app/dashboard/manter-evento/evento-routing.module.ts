import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalvarComponent } from './salvar/salvar.component';
import { ManterEventoComponent } from './manter-evento.component';

const routes: Routes = [
	{ path: 'listar', component: ManterEventoComponent },
	{ path: 'cadastrar', component: SalvarComponent },
	{ path: 'alterar/:codigo-do-evento', component: SalvarComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class EventoRoutingModule { }