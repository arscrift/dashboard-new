import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHeaders, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError, EMPTY, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';


@Injectable()
export class HttpResponseInterceptor implements HttpInterceptor {

    constructor(
        private toastrService: ToastrService
    ) { }

    private addExtraHeaders(url: string, headers: HttpHeaders): HttpHeaders {
        headers = headers.append('Authorization', 'Bearer ' + sessionStorage.getItem('token'))
        return headers;
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
        return next
            .handle(
                request.clone({
                    headers: this.addExtraHeaders(request.url, request.headers)
                })
            ).pipe(
                tap(evt => {
                    if (evt instanceof HttpResponse) {
                        if(evt.body && evt.body.success){
                            this.toastrService.success(evt.body.success.message, evt.body.success.title, { positionClass: 'toast-bottom-center' });
                        }
                    }
                }),
                catchError((err: any) => {
                    if(err instanceof HttpErrorResponse) {
                        switch (err.status) {
                            case 0: {
                                this.toastrService.warning('Conecção recusada', err.statusText);
                                break;
                            }
                            case 400: {
                                this.toastrService.warning('Solicitação incorreta', err.statusText);
                                break;
                            }
                            case 401: {
                                this.toastrService.error('Não autorizado', err.statusText);
                                break;
                            }
                            case 403: {
                                this.toastrService.error('Proibido', err.statusText);
                                //window.top.location.href = `${environment.URL_PORTAL_LOGIN}?mensagem=${err.error.mensagem}`;
                                break;
                            }
                            case 404: {
                                this.toastrService.warning('Não encontrado', err.statusText);
                                break;
                            }
                            case 409: {
                                this.toastrService.warning('Conflito', err.statusText);
                                break;
                            }
                            case 500: {
                                this.toastrService.error('Erro interno no servidor', err.error.message);
                                break;
                            }
                            default: {
                                this.toastrService.error('Erro não identificado', err.statusText);
                            }
                        }
                    }
                    return of(err);
                })
            );
    }
}