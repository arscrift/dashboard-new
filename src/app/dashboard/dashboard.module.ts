import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatIconModule, MatButtonModule, MatTooltipModule, MatTreeModule, MatCardModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DashboardComponent } from './dashboard.component';
import { NavegacaoComponent } from './navegacao/navegacao.component';
import { PresencaComponent } from './presenca/presenca.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpResponseInterceptor } from './http-response-interceptor';

@NgModule({
	declarations: [
		DashboardComponent,
		NavegacaoComponent,
		PresencaComponent
	],
	imports: [
		CommonModule,
		HttpClientModule,
		DashboardRoutingModule,
		MatIconModule,
		MatButtonModule,
		MatTooltipModule,
		MatSidenavModule,
		MatTreeModule,
		MatCardModule
	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: HttpResponseInterceptor, multi: true },
	]
})
export class DashboardModule { }