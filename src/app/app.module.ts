import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AcessoComponent } from './acesso/acesso.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpResponseInterceptor } from './interceptors/http-response-interceptor';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
	declarations: [
		AppComponent,
		AcessoComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		ToastrModule.forRoot()
	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: HttpResponseInterceptor, multi: true },
		//{ provide: LocationStrategy, useClass: HashLocationStrategy }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }