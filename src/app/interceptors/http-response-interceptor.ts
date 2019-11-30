import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHeaders, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError, EMPTY } from 'rxjs';
import { tap } from 'rxjs/operators';


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
                tap((ev: HttpEvent<any>) => {
                    if (ev instanceof HttpResponse) {
                        console.log('processing response', ev);
                    }
                })
            )/*.catch((err: HttpErrorResponse) => {
                if (err.error.ex && err.error.ex.codigoErro) {
                    return throwError(err);
                } else if (err.error instanceof Error) {
                    console.error('An error occurred:', err.error.message);
                } else if (err.error.stack && err.error.printStackTrace.startsWith('br.com.memora.arq.rs.security')) {
                    //this.toastrService.warning("Mensagem", err.error.stack);
                    return throwError(err);
                } else {
                    switch (err.status) {
                        case 0: {
                            this.toastrService.info('Conecção recusada', err.error.stack || err.statusText);
                            break;
                        }
                        case 400: {
                            this.toastrService.warning('Solicitação incorreta', err.error.stack || err.statusText);
                            break;
                        }
                        case 401: {
                            this.toastrService.error('Não autorizado', err.error.stack || err.statusText);
                            break;
                        }
                        case 403: {
                            this.toastrService.error('Proibido', err.error.stack || err.statusText || err.error.mensagem);
                            //window.top.location.href = `${environment.URL_PORTAL_LOGIN}?mensagem=${err.error.mensagem}`;
                            break;
                        }
                        case 404: {
                            this.toastrService.warning('Não encontrado', err.error.stack || err.statusText);
                            break;
                        }
                        case 409: {
                            this.toastrService.warning('Conflito', err.error.stack || err.statusText);
                            break;
                        }
                        case 500: {
                            this.toastrService.error('Erro interno no servidor', err.error.stack || err.error.message);
                            break;
                        }
                        default: {
                            this.toastrService.error('Erro não identificado', err.error.stack || err.statusText);
                        }
                    }
                }

                return EMPTY;
            });*/
    }
}