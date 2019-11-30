import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatIconModule, MatButtonModule, MatTooltipModule, MatTreeModule, MatCardModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DashboardComponent } from './dashboard.component';
import { NavegacaoComponent } from './navegacao/navegacao.component';
import { PresencaComponent } from './presenca/presenca.component';

@NgModule({
	declarations: [
		DashboardComponent,
		NavegacaoComponent,
		PresencaComponent
	],
	imports: [
		CommonModule,
		DashboardRoutingModule,
		MatIconModule,
		MatButtonModule,
		MatTooltipModule,
		MatSidenavModule,
		MatTreeModule,
		MatCardModule
	]
})
export class DashboardModule { }