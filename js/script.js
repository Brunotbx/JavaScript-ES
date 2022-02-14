// JS Module imports
import Accordion from './modules/accordion.js';
import TabNav from './modules/tabAnimation';
import Modal from './modules/modal.js';
import initPage from './modules/scrollAnimation.js';
import initTooltip from './modules/tooltip.js';
import initDropDown from './modules/dropdown.js';
import initMenuMobile from './modules/menuMobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initAnimaisFetch from './modules/animaisFetch.js';
import initBtcFetch from './modules/btcFetch.js';


const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();


// Function callers
initPage();
initTooltip();
initDropDown();
initMenuMobile();
initFuncionamento();
initAnimaisFetch();
initBtcFetch();