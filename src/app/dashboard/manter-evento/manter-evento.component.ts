import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { EventoModel } from './evento.model';
import { EventoService } from './evento.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-manter-evento',
	templateUrl: './manter-evento.component.html',
	styleUrls: ['./manter-evento.component.css']
})
export class ManterEventoComponent implements OnInit, OnDestroy {

	public displayedColumns: string[] = ['titulo', 'descricao', 'precoUnitario', 'quantidadeDeVagas'];
	public eventos: EventoModel[];
	private subscription: Subscription;

	constructor(
		private eventoService: EventoService,
		private toastrService: ToastrService,
	) { }

	ngOnInit() {
		this.subscription = this.eventoService.listarEventos().subscribe(
            (res) => {
				//this.toastrService.success('Mensagem', res.mensagem);
				this.eventos = res;
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