import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalvarComponent } from './salvar/salvar.component';
import { EventoRoutingModule } from './evento-routing.module';
import { ManterEventoComponent } from './manter-evento.component';
import { MatInputModule, MatFormFieldModule, MatCardModule, MatTableModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
	declarations: [ManterEventoComponent, SalvarComponent],
	imports: [
		CommonModule,
		EventoRoutingModule,
		MatFormFieldModule,
		MatInputModule,
		MatCardModule,
		MatTableModule,
		FormsModule,
        ReactiveFormsModule
	]
})
export class EventoModule { }