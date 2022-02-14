// JS Module imports
import initPage from './modules/scrollAnimation.js';
import initTab from './modules/tabAnimation.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropDown from './modules/dropdown.js';
import initMenuMobile from './modules/menuMobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initAnimaisFetch from './modules/animaisFetch.js';
import initBtcFetch from './modules/btcFetch.js';
import Accordion from './modules/accordion.js';


const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();



// Function callers
initPage();
initTab();
initModal();
initTooltip();
initDropDown();
initMenuMobile();
initFuncionamento();
initAnimaisFetch();
initBtcFetch();