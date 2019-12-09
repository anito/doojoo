import '../node_modules/bulma/css/bulma.min.css';
import '@sveltejs/site-kit/base.css';
import './style.css';
import * as sapper from '@sapper/app';

sapper.start({
	target: document.querySelector('#sapper'),
	props:  {
		op: 60
	},
	op: 80
});