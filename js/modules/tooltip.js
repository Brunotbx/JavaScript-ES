export default class Tooltip {
  constructor(tooltips){
    this.tooltips = document.querySelectorAll(tooltips);

    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  onMouseMove(e) {
      this.tooltipBox.style.top = e.pageY + 20 + "px";
      if(e.pageX + 240 > window.innerWidth) {
        this.tooltipBox.style.left = e.pageX - 180 + "px";
      } else {
        this.tooltipBox.style.left = e.pageX + 20 + "px";
      }
  }

  onMouseLeave({ currentTarget }) {
      this.tooltipBox.remove();
      currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
      currentTarget.removeEventListener("mouseleave", this.onMouseMove);
  }

  // Cria o elemento da tooltip
  CriaTooltipBox(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  onMouseOver({ currentTarget }) {
    this.CriaTooltipBox(currentTarget);
    currentTarget.addEventListener("mousemove", this.onMouseMove);
    currentTarget.addEventListener("mouseleave", this.onMouseLeave);
  }

  addTooltipEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener("mouseover", this.onMouseOver);
    });
  }

  init(){
    if(this.tooltips.length) {
      this.addTooltipEvent();
    }
    return this;
  }
}
