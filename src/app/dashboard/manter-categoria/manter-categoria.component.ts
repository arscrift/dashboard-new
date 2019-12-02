import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { CategoriaModel } from 'src/app/model/models.model';

const ELEMENT_DATA: CategoriaModel[] = [
	{ nome: 'Teste', descricao: 'Testando' },
	{ nome: 'Teste', descricao: 'Testando' },
	{ nome: 'Teste', descricao: 'Testando' },
	{ nome: 'Teste', descricao: 'Testando' },
	{ nome: 'Teste', descricao: 'Testando' },
	{ nome: 'Teste', descricao: 'Testando' },
	{ nome: 'Teste', descricao: 'Testando' },
	{ nome: 'Teste', descricao: 'Testando' },
];

@Component({
	selector: 'app-manter-categoria',
	templateUrl: './manter-categoria.component.html',
	styleUrls: ['./manter-categoria.component.css']
})
export class ManterCategoriaComponent implements OnInit {

	public displayedColumns: string[] = ['nome', 'descricao'];
	public dataSource = new MatTableDataSource(ELEMENT_DATA);

	@ViewChild(MatSort, { static: true }) sort: MatSort;

	constructor() { }

	ngOnInit() {
		this.dataSource.sort = this.sort;
	}

}