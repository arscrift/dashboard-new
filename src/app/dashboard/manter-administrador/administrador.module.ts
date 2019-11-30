import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalvarComponent } from './salvar/salvar.component';
import { AdministradorRoutingModule } from './administrador-routing.module';
import { ManterAdministradorComponent } from './manter-administrador.component';
import { MatFormFieldModule, MatInputModule, MatCardModule, MatTableModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [ManterAdministradorComponent, SalvarComponent],
	imports: [
		CommonModule,
		AdministradorRoutingModule,
		MatFormFieldModule,
		MatInputModule,
		FormsModule,
		MatCardModule,
		MatTableModule
	]
})
export class AdministradorModule { }