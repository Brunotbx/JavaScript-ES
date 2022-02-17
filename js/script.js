// JS Module imports
import Accordion from './modules/accordion.js';
import TabNav from './modules/tabAnimation';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import fetchAnimais from './modules/animaisFetch.js';
import btcFetch from './modules/btcFetch.js';
import ScrollAnima from './modules/scrollAnima.js';
import DropdownMenu from './modules/dropdown.js';

import initMenuMobile from './modules/menuMobile.js';
import initFuncionamento from './modules/funcionamento.js';

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

const dropdownMenu = new DropdownMenu('[data-dropdown]');
dropdownMenu.init();

// Function callers
fetchAnimais("..//animaisApi.json",".numeros-grid")
btcFetch("https://blockchain.info/ticker", ".btc-preco");

initMenuMobile();
initFuncionamento();