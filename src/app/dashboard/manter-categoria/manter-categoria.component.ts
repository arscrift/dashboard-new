import { Component, OnInit, ViewChild, OnDestroy, ViewChildren, QueryList } from '@angular/core';
import { PopoverDirective } from 'ngx-bootstrap/popover';
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

	@ViewChildren(PopoverDirective) popovers: QueryList<PopoverDirective>;

	public displayedColumns: string[] = ['nome', 'descricao', 'popover'];
	public categorias: CategoriaModel[];
	private subscription: Subscription;

	constructor(
		private categoriaService: CategoriaService,
		private toastrService: ToastrService,
	) { }

	ngOnInit() {
		// this.subscription = this.categoriaService.listarCategorias().subscribe(
        //     (res) => {
		// 		//this.toastrService.success('Mensagem', res.mensagem);
		// 		this.categorias = res;
        //     },
        //     (err: HttpErrorResponse) => {
        //         this.toastrService.warning('Erro', err.error.stack || err.statusText);
        //     },
        //     () => {}
		// );
		this.categorias = [
			{ codigo: 1, nome: 'Tallys', descricao: 'açsldkjfaçsldfjk' },
			{ codigo: 1, nome: 'Tallys', descricao: 'açsldkjfaçsldfjk' },
			{ codigo: 1, nome: 'Tallys', descricao: 'açsldkjfaçsldfjk' },
			{ codigo: 1, nome: 'Tallys', descricao: 'açsldkjfaçsldfjk' }
		];
	}

	ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
	}

	excluirCategoria(codigo: number): void {
		this.categoriaService.excluirCategoria(codigo).subscribe(
			(res) => {
				this.toastrService.success('Mensagem', res.mensagem);
            },
            (err: HttpErrorResponse) => {
                this.toastrService.warning('Erro', err.error.stack || err.statusText);
            },
            () => {}
		);
	}
	
	onShownPopover(): void {
        this.popovers.forEach((popover: PopoverDirective) => {
            popover.onShown.subscribe(() => {
                this.popovers.filter(p => p !== popover).forEach(p => p.hide());
            });
        });
    }

}