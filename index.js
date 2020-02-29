function scr_principal(my) {
	my.render= function () {
		return {cmp: 'div', children:([
			h('h1',{},'Podemos Aprender'),	
			h('img',{src:'imagenes/logo.png'}),
		]};
	};
}
