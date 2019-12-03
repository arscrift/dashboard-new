import { EventoModel } from '../manter-evento/evento.model';

export class PresencaModel {
	public codigo?: number;
	public evento?: EventoModel;
	public nome?: string;
	public sobrenome?: string;
	public email?: string;
	public telefone?: string;
	public cpf?: string;
	public status?: string;
	public dataDeCriacao?: Date;
    public dataDeAtualizacao?: Date;
    
    public constructor(init: Partial<PresencaModel>) {
		Object.assign(this, init);
	}
}