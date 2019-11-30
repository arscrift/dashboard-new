import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalvarComponent } from './salvar/salvar.component';
import { ManterCategoriaComponent } from './manter-categoria.component';

const routes: Routes = [
	{ path: 'listar', component: ManterCategoriaComponent },
	{ path: 'cadastrar', component: SalvarComponent },
	{ path: 'alterar/:codigo-da-categoria', component: SalvarComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CategoriaRoutingModule { }