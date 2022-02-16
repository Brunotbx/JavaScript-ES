//Fuction to animate the elements in browser during scroll.
import debounce from "./debounce.js";
export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowBreak = window.innerHeight * 0.6;
    this.checkDistance = debounce(this.checkDistance.bind(this));
  }

  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowBreak)
      };
    });
  }

  checkDistance() {
    this.distance.forEach((item) => {
      if(window.pageYOffset > item.offset) {
        item.element.classList.add('ativo');
      } else if (item.element.classList.contains('ativo')) {
        item.element.classList.remove('ativo');
      }
    });
  }

  init(){
    if(this.sections.length) {
      this.getDistance()
      this.checkDistance();
      window.addEventListener("scroll", this.checkDistance);
    }
    return this;
  }

  stop() {
    window.removeEventListener("scroll", this.checkDistance);
  }
}
