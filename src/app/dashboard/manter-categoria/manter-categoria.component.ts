import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { CategoriaModel } from './categoria.model';
import { CategoriaService } from './categoria.service';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
	selector: 'app-manter-categoria',
	templateUrl: './manter-categoria.component.html',
	styleUrls: ['./manter-categoria.component.css']
})
export class ManterCategoriaComponent implements OnInit, OnDestroy {

	public displayedColumns: string[] = ['nome', 'descricao'];
	public categorias: CategoriaModel[];
	private subscription: Subscription;

	constructor(
		private categoriaService: CategoriaService,
		private toastrService: ToastrService,
	) { }

	ngOnInit() {
		this.subscription = this.categoriaService.listarCategorias().subscribe(
            (res) => {
				//this.toastrService.success('Mensagem', res.mensagem);
				this.categorias = res;
            },
            (err: HttpErrorResponse) => {
                this.toastrService.warning('Erro', err.error.stack || err.statusText);
            },
            () => {}
        );
	}

	ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

}