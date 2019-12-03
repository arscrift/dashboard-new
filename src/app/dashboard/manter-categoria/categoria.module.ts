import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { SalvarComponent } from './salvar/salvar.component';
import { CategoriaRoutingModule } from './categoria-routing.module';
import { ManterCategoriaComponent } from './manter-categoria.component';
import { MatFormFieldModule, MatInputModule, MatCardModule, MatTableModule, MatButtonModule, MatIconModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CategoriaService } from './categoria.service';

@NgModule({
	declarations: [SalvarComponent, ManterCategoriaComponent],
	imports: [
		CommonModule,
		CategoriaRoutingModule,
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
		MatButtonModule,
		MatCardModule,
		MatTableModule,
		FormsModule,
		ReactiveFormsModule,
		PopoverModule.forRoot()
	],
	providers: [
		CategoriaService
	]
})
export class CategoriaModule { }