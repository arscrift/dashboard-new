export class CategoriaModel {
	public codigo?: number;
	public nome?: string;
	public descricao?: string;
	public imagem?: File;
	public dataDeCriacao?: Date;
    public dataDeAtualizacao?: Date;
    
    public constructor(init: Partial<CategoriaModel>) {
		Object.assign(this, init);
	}
}