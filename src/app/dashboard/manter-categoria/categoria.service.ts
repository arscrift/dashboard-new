import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriaModel } from './categoria.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoriaService {

	private route: string;

	constructor(private http: HttpClient) {
		this.route = `http://api.arscrift.digital/`;
	}

	listarCategorias(): Observable<CategoriaModel[]> {
        return this.http.get<CategoriaModel[]>(this.route);
	}

	buscarCategoria(id: number): Observable<CategoriaModel> {
        return this.http.get<CategoriaModel>(`${this.route}/${id}`);
	}

	inserirCategoria(categoria: CategoriaModel): Observable<any> {
		const formData: FormData = this.montarFormDataDaCategoria(categoria);
		return this.http.post(this.route, formData);
	}

	alterarCategoria(categoria: CategoriaModel): Observable<any> {
		const formData: FormData = this.montarFormDataDaCategoria(categoria);
		return this.http.put(this.route, formData);
	}

	excluirCategoria(id: number): Observable<any> {
		return this.http.delete(`${this.route}/${id}`);
	}

	montarFormDataDaCategoria(categoria: CategoriaModel): FormData {
		const formData = new FormData();
		if (categoria.codigo) {
			formData.append('codigo', categoria.codigo.toString());
		}
		if (categoria.nome) {
			formData.append('nome', categoria.nome);
		}
		if (categoria.descricao) {
			formData.append('descricao', categoria.descricao);
		}
		if (categoria.imagem) {
			formData.append('imagem', categoria.imagem);
		}

		return formData;
	}

}