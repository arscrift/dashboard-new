import { Component, OnInit, OnDestroy } from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Component({
	selector: 'salvar',
	templateUrl: './salvar.component.html',
	styleUrls: ['./salvar.component.css']
})
export class SalvarComponent implements OnInit, OnDestroy {

	public arquivo: File;
	public temArquivo: boolean = false;
	public arquivoCarregado: boolean = false;
    public nomeDoArquivo: string;

	constructor(
		private notification: ToastrService
	) { }

	ngOnInit() { }

	ngOnDestroy(): void { }

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