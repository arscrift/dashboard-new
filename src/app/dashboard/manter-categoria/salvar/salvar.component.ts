import { Component, OnInit, OnDestroy } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriaModel } from 'src/app/model/models.model';
import { Subscription } from 'rxjs';

@Component({
	selector: 'salvar',
	templateUrl: './salvar.component.html',
	styleUrls: ['./salvar.component.css']
})
export class SalvarComponent implements OnInit, OnDestroy {

    private categoria: CategoriaModel;

	public arquivo: File;
    public temArquivo: boolean = false;
    public btnAcionado: boolean = false;
	public arquivoCarregado: boolean = false;
    public nomeDoArquivo: string;

    public formulario: FormGroup;
    private subscription: Subscription;

	constructor(
        private notification: ToastrService,
        private formBuilder: FormBuilder
	) { }

	ngOnInit() {
        this.initForm();
    }

    ngOnDestroy(): void { }
    
    initForm(): void {
        this.formulario = this.formBuilder.group({
            nome: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(200)]],
            descricao: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(400)]]
        });
    }

    limpar(): void {
        this.initForm();
        this.formulario.reset();
    }

    popularFormulario(valor: any): void {
        this.formulario.get('nome').setValue(valor.nome);
        this.formulario.get('descricao').setValue(valor.descricao);
    }

    salvar(): void {
        if (this.formulario.valid) {
            this.btnAcionado = true;
            const categoria = new CategoriaModel(this.formulario.value);
            if (this.arquivo) {
                categoria.imagem = this.arquivo;
            }
            if (this.categoria.codigo) {
                categoria.codigo = this.categoria.codigo;
                this.alterar(categoria);
            } else {
                if (this.arquivo) {
                    this.inserir(categoria);
                } else {
                    this.notification.warning('Mensagem', 'Formulário invalido. É preciso fazer upload de uma foto.');
                    this.btnAcionado = false;
                }
            }
        } else {
            this.notification.warning('Mensagem', 'Formulário invalido. Preencha os campos corretamente.');
        }
    }

    inserir(categoria: CategoriaModel): void {
        // this.subscription = this.categoriaServico.inserirConsulta(categoria).subscribe(
        //     (res) => {
        //         this.notification.success('Mensagem', res.mensagem);
        //         this.btnAcionado = false;
        //     },
        //     (err: HttpErrorResponse) => {
        //         this.btnAcionado = false;
        //         this.notification.warning('Erro', err.error.stack || err.statusText);
        //     },
        //     () => {}
        // );
    }

    alterar(categoria: CategoriaModel): void {
        // this.subscription = this.categoriaServico.alterarConsulta(categoria).subscribe(
        //     (res) => {
        //         this.notification.success('Mensagem', res.mensagem);
        //         this.btnAcionado = false;
        //     },
        //     (err: HttpErrorResponse) => {
        //         this.btnAcionado = false;
        //         this.notification.warning('Erro', err.error.stack || err.statusText);
        //     },
        //     () => {}
        // );
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