import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalvarComponent } from './salvar/salvar.component';
import { CategoriaRoutingModule } from './categoria-routing.module';
import { ManterCategoriaComponent } from './manter-categoria.component';
import { MatFormFieldModule, MatInputModule, MatCardModule, MatTableModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
	declarations: [SalvarComponent, ManterCategoriaComponent],
	imports: [
		CommonModule,
		CategoriaRoutingModule,
		MatFormFieldModule,
		MatInputModule,
		MatCardModule,
		MatTableModule,
		FormsModule,
        ReactiveFormsModule
	]
})
export class CategoriaModule { }