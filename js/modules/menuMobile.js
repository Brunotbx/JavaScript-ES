import outsideClick from "./outsideClick.js";
export default class MenuMobile {
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.events = [events];
    this.active = "active"

    this.openMenu = this.openMenu.bind(this);
  }
  
  openMenu() {
    this.menuList.classList.add(this.active);
    this.menuButton.classList.add(this.active);
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.active);
      this.menuButton.classList.remove(this.active);
    });
  }

  addMenuMobileEvents(){
    this.events.forEach((event) => {
      this.menuButton.addEventListener(event, this.openMenu);
    }
    )}

  init() {
    if(this.menuButton && this.menuList){
      this.addMenuMobileEvents();
    }
    return this;
  }
}
