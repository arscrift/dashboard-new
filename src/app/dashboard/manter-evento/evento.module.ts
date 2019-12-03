import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalvarComponent } from './salvar/salvar.component';
import { EventoRoutingModule } from './evento-routing.module';
import { ManterEventoComponent } from './manter-evento.component';
import { MatInputModule, MatFormFieldModule, MatCardModule, MatTableModule, MatIconModule, MatButtonModule, MatSelectModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EventoService } from './evento.service';
import { CategoriaService } from '../manter-categoria/categoria.service';

@NgModule({
	declarations: [ManterEventoComponent, SalvarComponent],
	imports: [
		CommonModule,
		EventoRoutingModule,
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
		MatButtonModule,
		MatSelectModule,
		MatCardModule,
		MatTableModule,
		FormsModule,
        ReactiveFormsModule
	],
	providers: [
		EventoService,
		CategoriaService
	]
})
export class EventoModule { }