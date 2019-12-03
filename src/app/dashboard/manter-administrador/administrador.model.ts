export class AdministradorModel {
	public codigo?: number;
	public nome?: string;
	public usuario?: string;
	public senha?: string;
	public imagem?: File;
	public dataDeCriacao?: Date;
    public dataDeAtualizacao?: Date;
    
    public constructor(init: Partial<AdministradorModel>) {
		Object.assign(this, init);
	}
}