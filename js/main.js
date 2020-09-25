import { Cards } from './components/cards';

const cards = document.querySelectorAll('.c-card');
[...cards].forEach(elm => new Cards(elm));