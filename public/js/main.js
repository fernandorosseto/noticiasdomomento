import { openMenu, closeMenu, loadHeader } from './components/hearder.js';
//import calculateReadingTime from './utils/calculateReadingTime.js';
import fetchLatestNews  from './api/apiServices.js';

document.addEventListener('DOMContentLoaded', () => {
    fetchLatestNews();
    console.log("test fetch no main")
});

document.addEventListener("DOMContentLoaded", loadHeader);