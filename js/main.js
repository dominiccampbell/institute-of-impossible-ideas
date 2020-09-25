import { Cards } from './components/cards';
import { Blueprints } from './components/blueprints';

const cards = document.querySelectorAll('.c-card');
[...cards].forEach(elm => new Cards(elm));


const blueprints = document.querySelectorAll('.c-site-section--blueprint');
[...blueprints].forEach(elm => new Blueprints(elm));

