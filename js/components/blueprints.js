import simpleParallax from 'simple-parallax-js';
import graph from './../../img/graph-paper.svg'

export class Blueprints {

  // Constructor
  constructor(elm) {

    this.elm = elm;
    this.blueprint = this.createBlueprintDiv();
    this.elm.prepend(this.blueprint);

    new simpleParallax(this.blueprint, {
      // scale: 1,
      transition: 'cubic-bezier(0,0,0,1)',
      customWrapper: '.c-site-section--blueprint'
    });
  }

  createBlueprintDiv() {
    let blueprint = document.createElement('div');
    blueprint.classList.add('c-site-section__blueprint-image', 'rellax');
    blueprint.style.backgroundImage = `url(${graph})`;

    return blueprint;
  }

}
