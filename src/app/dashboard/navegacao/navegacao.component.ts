import { Component, OnInit } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material';

interface NavegacaoNode {
	name: string;
	link?: string;
	children?: NavegacaoNode[];
}

const TREE_DATA: NavegacaoNode[] = [
	{
		name: 'Controle de Presença',
		link: './presenca'
	},{
		name: 'Manter Categoria',
		link: './manter-categoria/listar',
		children: [
			{ name: 'Cadastrar', link: './manter-categoria/cadastrar' },
			{ name: 'Listar', link: './manter-categoria/listar' }
		]
	},{
		name: 'Manter Evento',
		link: './manter-evento/listar',
		children: [
			{ name: 'Cadastrar', link: './manter-evento/cadastrar' },
			{ name: 'Listar', link: './manter-evento/listar' }
		]
	},{
		name: 'Manter Administrador',
		link: './manter-administrador/listar',
		children: [
			{ name: 'Cadastrar', link: './manter-administrador/cadastrar' },
			{ name: 'Listar', link: './manter-administrador/listar' }
		]
	},
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
	expandable: boolean;
	name: string;
	level: number;
}

@Component({
	selector: 'navegacao',
	templateUrl: './navegacao.component.html',
	styleUrls: ['./navegacao.component.css']
})
export class NavegacaoComponent implements OnInit {

	private _transformer = (node: NavegacaoNode, level: number) => {
		return {
			expandable: !!node.children && node.children.length > 0,
			name: node.name,
			link: node.link,
			level: level,
		};
	}

	treeControl = new FlatTreeControl<ExampleFlatNode>(node => node.level, node => node.expandable);

	treeFlattener = new MatTreeFlattener(this._transformer, node => node.level, node => node.expandable, node => node.children);

	dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

	constructor() {
		this.dataSource.data = TREE_DATA;
	}

	hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

	ngOnInit() { }

}