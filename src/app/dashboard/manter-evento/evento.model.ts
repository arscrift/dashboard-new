import { CategoriaModel } from '../manter-categoria/categoria.model';

export class EventoModel {
	public codigo?: number;
	public categoria?: CategoriaModel;
	public titulo?: string;
	public descricao?: string;
	public apresentacao?: string;
	public imagem?: File;
	public precoUnitario?: number;
	public quantidadeDeVagas?: number;
	public urlDoGoogleMaps?: string;
	public dataDeCriacao?: Date;
    public dataDeAtualizacao?: Date;
    
    public constructor(init: Partial<EventoModel>) {
		Object.assign(this, init);
	}
}