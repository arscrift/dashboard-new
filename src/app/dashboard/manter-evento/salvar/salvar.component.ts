import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { EventoModel } from '../evento.model';
import { EventoService } from '../evento.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CategoriaService } from '../../manter-categoria/categoria.service';
import { CategoriaModel } from '../../manter-categoria/categoria.model';

@Component({
	selector: 'salvar',
	templateUrl: './salvar.component.html',
	styleUrls: ['./salvar.component.css']
})
export class SalvarComponent implements OnInit, OnDestroy {

	private evento: EventoModel;

	public arquivo: File;
	public temArquivo: boolean = false;
	public btnAcionado: boolean = false;
	public arquivoCarregado: boolean = false;
	public nomeDoArquivo: string;
	public categorias: CategoriaModel[];

	public formulario: FormGroup;
	private subscription: Subscription;

	constructor(
		private notification: ToastrService,
		private formBuilder: FormBuilder,
		private toastrService: ToastrService,
		private eventoService: EventoService,
		private categoriaService: CategoriaService
	) { }

	ngOnInit() {
		this.initForm();
		this.subscription = this.categoriaService.listarCategorias().subscribe(
            (res) => {
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

	initForm(): void {
		this.formulario = this.formBuilder.group({
			titulo: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(200)]],
			descricao: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(400)]],
			apresentacao: [null, [Validators.required, Validators.minLength(50), Validators.maxLength(2000)]],
			precoUnitario: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(200)]],
			quantidadeDeVagas: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(200)]],
			urlDoGoogleMaps: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(1000)]],
		});
	}

	limpar(): void {
		this.initForm();
		this.formulario.reset();
	}

	popularFormulario(valor: any): void {
		this.formulario.get('titulo').setValue(valor.titulo);
		this.formulario.get('descricao').setValue(valor.descricao);
		this.formulario.get('apresentacao').setValue(valor.descricao);
		this.formulario.get('precoUnitario').setValue(valor.descricao);
		this.formulario.get('quantidadeDeVagas').setValue(valor.descricao);
		this.formulario.get('urlDoGoogleMaps').setValue(valor.descricao);
	}

	salvar(): void {
		if (this.formulario.valid) {
			this.btnAcionado = true;
			this.evento = new EventoModel(this.formulario.value);
			if (this.arquivo) {
				this.evento.imagem = this.arquivo;
			}
			if (this.evento.codigo) {
				this.evento.codigo = this.evento.codigo;
				this.alterar(this.evento);
			} else {
				if (this.arquivo) {
					this.inserir(this.evento);
				} else {
					this.notification.warning('Mensagem', 'Formulário invalido. É preciso fazer upload de uma foto.');
					this.btnAcionado = false;
				}
			}
		} else {
			this.notification.warning('Mensagem', 'Formulário invalido. Preencha os campos corretamente.');
		}
	}

	inserir(evento: EventoModel): void {
		this.subscription = this.eventoService.inserirEvento(evento).subscribe(
		    (res) => {
		        this.notification.success('Mensagem', res.mensagem);
		        this.btnAcionado = false;
		    },
		    (err: HttpErrorResponse) => {
		        this.btnAcionado = false;
		        this.notification.warning('Erro', err.error.stack || err.statusText);
		    },
		    () => {}
		);
	}

	alterar(evento: EventoModel): void {
		this.subscription = this.eventoService.alterarEvento(evento).subscribe(
		    (res) => {
		        this.notification.success('Mensagem', res.mensagem);
		        this.btnAcionado = false;
		    },
		    (err: HttpErrorResponse) => {
		        this.btnAcionado = false;
		        this.notification.warning('Erro', err.error.stack || err.statusText);
		    },
		    () => {}
		);
	}

	onDrop(file: FileList): void {
		if (file[0].size > 1024 * 2048) { // LIMITE DE 2MB
			this.notification.warning('Mensagem', 'O arquivo excede o limite de 2MB');
			this.arquivo = null;
		} else if (file[0].size == 0) {
			this.notification.warning('Mensagem', 'O arquivo é muito pequeno');
			this.arquivo = null;
		} else if (file[0].type != 'image/jpeg') { // TIPO DO ARQUIVO
			this.notification.warning('Mensagem', 'Formato de arquivo invalido');
			this.arquivo = null;
		} else {
			this.notification.success('Mensagem', 'Arquivo carregado com sucesso');
			this.arquivo = file[0];
			this.temArquivo = true;
			this.arquivoCarregado = true;
			this.nomeDoArquivo = file[0].name;
		}
	}

	apagarArquivo(): void {
		this.arquivo = null;
		this.temArquivo = false;
	}

}