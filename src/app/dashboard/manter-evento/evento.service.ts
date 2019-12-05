import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventoModel } from './Evento.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EventoService {

	private route: string;

	constructor(private http: HttpClient) {
		this.route = `http://api.arscrift.digital/`;
	}

	listarEventos(): Observable<EventoModel[]> {
        return this.http.get<EventoModel[]>(this.route);
	}

	buscarEvento(id: number): Observable<EventoModel> {
        return this.http.get<EventoModel>(`${this.route}/${id}`);
	}

	inserirEvento(evento: EventoModel): Observable<any> {
		const formData: FormData = this.montarFormDataDoEvento(evento);
		return this.http.post(this.route, formData);
	}

	alterarEvento(evento: EventoModel): Observable<any> {
		const formData: FormData = this.montarFormDataDoEvento(evento);
		return this.http.put(this.route, formData);
	}

	excluirEvento(id: number): Observable<any> {
		return this.http.delete(`${this.route}/${id}`);
	}

	montarFormDataDoEvento(evento: EventoModel): FormData {
		const formData = new FormData();
		if (evento.codigo) {
			formData.append('codigo', evento.codigo.toString());
		}
		if (evento.categoria) {
			formData.append('categoria', evento.categoria.codigo.toString());
		}
		if (evento.titulo) {
			formData.append('titulo', evento.titulo);
		}
		if (evento.descricao) {
			formData.append('descricao', evento.descricao);
		}
		if (evento.apresentacao) {
			formData.append('apresentacao', evento.apresentacao);
		}
		if (evento.imagem) {
			formData.append('imagem', evento.imagem);
		}
		if (evento.precoUnitario) {
			formData.append('precoUnitario', evento.precoUnitario.toString());
		}
		if (evento.quantidadeDeVagas) {
			formData.append('quantidadeDeVagas', evento.quantidadeDeVagas.toString());
		}
		if (evento.urlDoGoogleMaps) {
			formData.append('urlDoGoogleMaps', evento.urlDoGoogleMaps);
		}

		return formData;
	}

}