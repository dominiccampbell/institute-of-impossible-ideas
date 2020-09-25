export class Cards {

  // Constructor
  constructor(elm) {

    this.elm = elm;

    // events
    window.addEventListener('scroll', () => this.scroll());
  }


  isElementInViewport() {
    var padding = 50;
    var rect = this.elm.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight + padding || document.documentElement.clientHeight + padding) && 
      rect.right <= (window.innerWidth + padding || document.documentElement.clientWidth + padding)
    );
  }

  scroll() {
    console.log(this.elm.querySelector('.c-card__meta').innerHTML, this.isElementInViewport())
    if (this.isElementInViewport()) {
        if(!this.elm.classList.contains('c-card--pulse')) 
            this.elm.classList.add('c-card--pulse');
    } else {
        if(this.elm.classList.contains('c-card--pulse')) 
            this.elm.classList.remove('c-card--pulse');
    }


  }

}
