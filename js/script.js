// JS Module imports
import initPage from './modules/scrollAnimation.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropDown from './modules/dropdown.js';
import initMenuMobile from './modules/menuMobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initAnimaisFetch from './modules/animaisFetch.js';
import initBtcFetch from './modules/btcFetch.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tabAnimation';


const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();


// Function callers
initPage();
initModal();
initTooltip();
initDropDown();
initMenuMobile();
initFuncionamento();
initAnimaisFetch();
initBtcFetch();