export default class Header {
  constructor() {
    this.selector = '[data-component="button"]';

    const $button = document.querySelector(this.selector);

    this.classes = {
      toggleMenuActive: 'is-active',
      menuActive: 'header-menu-active',
      rootMobileClass: 'mobile-menu-visible',
    };

    this.nodes = {
      root: document.querySelector('html'),
      button: $button,
      menu: $button.querySelector('[data-element="menu"]'),
    };
  }

  // eslint-disable-next-line class-methods-use-this
  bootstrap() {
    this.addEventListeners();
  }

  addEventListeners() {
    this.nodes.toggleMenu.addEventListener('click', this.onToggleMenu.bind(this));
  }

  onToggleMenu(event) {
    event.preventDefault();

    this.nodes.root.classList.toggle(this.classes.rootMobileClass);
    this.nodes.menu.classList.toggle(this.classes.menuActive);
    this.nodes.toggleMenu.classList.toggle(this.classes.toggleMenuActive);
  }
}
