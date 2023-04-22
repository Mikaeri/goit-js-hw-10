import './css/styles.css';
import refs from './js/refs';
import { onSearchBox } from './js/onSearchBox';

const DEBOUNCE_DELAY = 300;
const debounce = require('lodash.debounce');

refs.searchBox.addEventListener('input', debounce(onSearchBox, DEBOUNCE_DELAY));
