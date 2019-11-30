import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { PresencaComponent } from './presenca/presenca.component';

const routes: Routes = [
	{
		path: '',
		component: DashboardComponent,
		children: [
			{
				path: 'presenca',
				component: PresencaComponent
			},
			{
				path: 'manter-categoria',
				loadChildren: './manter-categoria/categoria.module#CategoriaModule'
			},
			{
				path: 'manter-evento',
				loadChildren: './manter-evento/evento.module#EventoModule'
			},
            {
				path: 'manter-administrador',
				loadChildren: './manter-administrador/administrador.module#AdministradorModule'
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DashboardRoutingModule { }