export class CategoriaModel {
	public codigo: number;
	public nome: string;
	public descricao: string;
	public imagem: File;
	public dataDeCriacao: Date;
    public dataDeAtualizacao: Date;
    
    public constructor(init?: Partial<CategoriaModel>) {
		Object.assign(this, init);
	}
}

export class EventoModel {
	public codigo: number;
	public categoria: CategoriaModel;
	public titulo: string;
	public descricao: string;
	public apresentacao: string;
	public imagem: File;
	public precoUnitario: number;
	public quantidadeDeVagas: number;
	public urlDoGoogleMaps: string;
	public dataDeCriacao: Date;
    public dataDeAtualizacao: Date;
    
    public constructor(init?: Partial<EventoModel>) {
		Object.assign(this, init);
	}
}

export class PresencaModel {
	public codigo: number;
	public evento: EventoModel;
	public nome: string;
	public sobrenome: string;
	public email: string;
	public telefone: string;
	public cpf: string;
	public status: string;
	public dataDeCriacao: Date;
    public dataDeAtualizacao: Date;
    
    public constructor(init?: Partial<PresencaModel>) {
		Object.assign(this, init);
	}
}

export class AdministradorModel {
	public codigo: number;
	public nome: string;
	public usuario: string;
	public senha: string;
	public imagem: File;
	public dataDeCriacao: Date;
    public dataDeAtualizacao: Date;
    
    public constructor(init?: Partial<AdministradorModel>) {
		Object.assign(this, init);
	}
}