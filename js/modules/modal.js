export default class Modal {
  constructor(btnAbrir, btnFechar, modal){
    this.botaoAbrir = document.querySelector(btnAbrir);
    this.botaoFechar = document.querySelector(btnFechar);
    this.modalContainer = document.querySelector(modal);

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.fecharForaModal = this.fecharForaModal.bind(this);
  }

  toggleModal() {
    this.modalContainer.classList.toggle("ativo");
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }
  
  fecharForaModal(event) {
    if (event.target === this.modalContainer) {
      this.toggleModal(event);
    }
  }

  addModalEvent(){
    this.botaoAbrir.addEventListener("click", this.eventToggleModal);
    this.botaoFechar.addEventListener("click", this.eventToggleModal);
    this.modalContainer.addEventListener("click", this.fecharForaModal)
  }

  init(){
    if (this.botaoAbrir && this.botaoFechar && this.modalContainer) {
      this.addModalEvent();
    }
    return this;
  }
}
