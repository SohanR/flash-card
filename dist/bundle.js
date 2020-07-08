/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const cardsContainer = document.getElementById('cards-container');\nconst prevBtn = document.getElementById('prev');\nconst nextBtn = document.getElementById('next');\nconst currentEl = document.getElementById('current');\nconst showBtn = document.getElementById('show');\nconst hideBtn = document.getElementById('hide');\nconst questionEl = document.getElementById('question');\nconst answerEl = document.getElementById('answer');\nconst addCardBtn = document.getElementById('add-card');\nconst clearBtn = document.getElementById('clear');\nconst addContainer = document.getElementById('add-container');\n\n\n//current card\nlet currentActiveCard = 0;\n\n//dom card\n\nconst cardsEl = [];\n\n//store card\n\nconst cardsData = getCardData();\n\n// const cardsData = [\n//     {\n//         question: 'que 1',\n//         answer: 'ans 1'\n//     },\n//     {\n//         question: 'que 2',\n//         answer: 'ans 2'\n//     },\n//     {\n//         question: 'que 3',\n//         answer: 'ans 1'\n//     },\n// ];\n\n// create all card\n\nfunction createCards() {\n    cardsData.forEach((data, index) => createCard(data, index));\n}\n\n//single card create\n\nfunction createCard(data, index) {\n    const card = document.createElement('div');\n    card.classList.add('card');\n\n    if (index == 0) {\n        card.classList.add('active');\n    }\n\n    card.innerHTML = `\n    <div class=\"inner-card\">\n    <div class=\"inner-card-front\">\n      <p>\n       ${data.question}\n      </p>\n    </div>\n    <div class=\"inner-card-back\">\n      <p>\n        ${data.answer}\n      </p>\n    </div>\n  </div>\n    `;\n\n    card.addEventListener('click', () => card.classList.toggle('show-answer'))\n\n    //add to dom\n\n    cardsEl.push(card);\n\n    cardsContainer.appendChild(card);\n\n    updateCurrentText();\n}\n\n//number of cards\nfunction updateCurrentText() {\n    currentEl.innerText = `${currentActiveCard + 1}/${cardsEl.length}`;\n}\n\ncreateCards();\n\n// get card data from local\n\nfunction getCardData() {\n    const cards = JSON.parse(localStorage.getItem('cards'));\n    return cards == null ? [] : cards;\n}\n\n\n// add ard to local\nfunction setCardData(cards) {\n    localStorage.setItem('cards', JSON.stringify(cards));\n    window.location.reload();\n}\n//event listners\n\n//netx btn\nnextBtn.addEventListener('click', () => {\n    cardsEl[currentActiveCard].className = 'card left';\n\n    currentActiveCard = currentActiveCard + 1;\n\n    if (currentActiveCard > cardsEl.length - 1) {\n        currentActiveCard = cardsEl.length - 1;\n    }\n\n    cardsEl[currentActiveCard].className = 'card active';\n\n    updateCurrentText();\n});\n\n\n//prev btn\nprevBtn.addEventListener('click', () => {\n    cardsEl[currentActiveCard].className = 'card right';\n\n    currentActiveCard = currentActiveCard - 1;\n\n    if (currentActiveCard < 0) {\n        currentActiveCard = 0;\n    }\n\n    cardsEl[currentActiveCard].className = 'card active';\n\n    updateCurrentText();\n});\n\n//show add container\n\nshowBtn.addEventListener('click', () => addContainer.classList.add('show'));\n\n// hide \nhideBtn.addEventListener('click', () => addContainer.classList.remove('show'));\n\n\n// add new card\naddCardBtn.addEventListener('click', () => {\n    const question = questionEl.value;\n    const answer = answerEl.value;\n\n    if (question.trim() && answer.trim()) {\n\n        const newCard = { question, answer };\n\n        createCard(newCard);\n\n        question.value = '';\n        answer.value = '';\n\n        addContainer.classList.remove('show');\n\n        cardsData.push(newCard);\n        setCardData(cardsData);\n    }\n});\n\n//clear cards\nclearBtn.addEventListener('click', () => {\n    localStorage.clear();\n    cardsContainer.innerHTML = '';\n    window.location.reload();\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanM/N2JhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkcy1jb250YWluZXInKTtcbmNvbnN0IHByZXZCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldicpO1xuY29uc3QgbmV4dEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXh0Jyk7XG5jb25zdCBjdXJyZW50RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudCcpO1xuY29uc3Qgc2hvd0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG93Jyk7XG5jb25zdCBoaWRlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpZGUnKTtcbmNvbnN0IHF1ZXN0aW9uRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVlc3Rpb24nKTtcbmNvbnN0IGFuc3dlckVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fuc3dlcicpO1xuY29uc3QgYWRkQ2FyZEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtY2FyZCcpO1xuY29uc3QgY2xlYXJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xlYXInKTtcbmNvbnN0IGFkZENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtY29udGFpbmVyJyk7XG5cblxuLy9jdXJyZW50IGNhcmRcbmxldCBjdXJyZW50QWN0aXZlQ2FyZCA9IDA7XG5cbi8vZG9tIGNhcmRcblxuY29uc3QgY2FyZHNFbCA9IFtdO1xuXG4vL3N0b3JlIGNhcmRcblxuY29uc3QgY2FyZHNEYXRhID0gZ2V0Q2FyZERhdGEoKTtcblxuLy8gY29uc3QgY2FyZHNEYXRhID0gW1xuLy8gICAgIHtcbi8vICAgICAgICAgcXVlc3Rpb246ICdxdWUgMScsXG4vLyAgICAgICAgIGFuc3dlcjogJ2FucyAxJ1xuLy8gICAgIH0sXG4vLyAgICAge1xuLy8gICAgICAgICBxdWVzdGlvbjogJ3F1ZSAyJyxcbi8vICAgICAgICAgYW5zd2VyOiAnYW5zIDInXG4vLyAgICAgfSxcbi8vICAgICB7XG4vLyAgICAgICAgIHF1ZXN0aW9uOiAncXVlIDMnLFxuLy8gICAgICAgICBhbnN3ZXI6ICdhbnMgMSdcbi8vICAgICB9LFxuLy8gXTtcblxuLy8gY3JlYXRlIGFsbCBjYXJkXG5cbmZ1bmN0aW9uIGNyZWF0ZUNhcmRzKCkge1xuICAgIGNhcmRzRGF0YS5mb3JFYWNoKChkYXRhLCBpbmRleCkgPT4gY3JlYXRlQ2FyZChkYXRhLCBpbmRleCkpO1xufVxuXG4vL3NpbmdsZSBjYXJkIGNyZWF0ZVxuXG5mdW5jdGlvbiBjcmVhdGVDYXJkKGRhdGEsIGluZGV4KSB7XG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuXG4gICAgaWYgKGluZGV4ID09IDApIHtcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9XG5cbiAgICBjYXJkLmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwiaW5uZXItY2FyZFwiPlxuICAgIDxkaXYgY2xhc3M9XCJpbm5lci1jYXJkLWZyb250XCI+XG4gICAgICA8cD5cbiAgICAgICAke2RhdGEucXVlc3Rpb259XG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImlubmVyLWNhcmQtYmFja1wiPlxuICAgICAgPHA+XG4gICAgICAgICR7ZGF0YS5hbnN3ZXJ9XG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICAgIGA7XG5cbiAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2FyZC5jbGFzc0xpc3QudG9nZ2xlKCdzaG93LWFuc3dlcicpKVxuXG4gICAgLy9hZGQgdG8gZG9tXG5cbiAgICBjYXJkc0VsLnB1c2goY2FyZCk7XG5cbiAgICBjYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKTtcblxuICAgIHVwZGF0ZUN1cnJlbnRUZXh0KCk7XG59XG5cbi8vbnVtYmVyIG9mIGNhcmRzXG5mdW5jdGlvbiB1cGRhdGVDdXJyZW50VGV4dCgpIHtcbiAgICBjdXJyZW50RWwuaW5uZXJUZXh0ID0gYCR7Y3VycmVudEFjdGl2ZUNhcmQgKyAxfS8ke2NhcmRzRWwubGVuZ3RofWA7XG59XG5cbmNyZWF0ZUNhcmRzKCk7XG5cbi8vIGdldCBjYXJkIGRhdGEgZnJvbSBsb2NhbFxuXG5mdW5jdGlvbiBnZXRDYXJkRGF0YSgpIHtcbiAgICBjb25zdCBjYXJkcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcmRzJykpO1xuICAgIHJldHVybiBjYXJkcyA9PSBudWxsID8gW10gOiBjYXJkcztcbn1cblxuXG4vLyBhZGQgYXJkIHRvIGxvY2FsXG5mdW5jdGlvbiBzZXRDYXJkRGF0YShjYXJkcykge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJkcycsIEpTT04uc3RyaW5naWZ5KGNhcmRzKSk7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xufVxuLy9ldmVudCBsaXN0bmVyc1xuXG4vL25ldHggYnRuXG5uZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNhcmRzRWxbY3VycmVudEFjdGl2ZUNhcmRdLmNsYXNzTmFtZSA9ICdjYXJkIGxlZnQnO1xuXG4gICAgY3VycmVudEFjdGl2ZUNhcmQgPSBjdXJyZW50QWN0aXZlQ2FyZCArIDE7XG5cbiAgICBpZiAoY3VycmVudEFjdGl2ZUNhcmQgPiBjYXJkc0VsLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgY3VycmVudEFjdGl2ZUNhcmQgPSBjYXJkc0VsLmxlbmd0aCAtIDE7XG4gICAgfVxuXG4gICAgY2FyZHNFbFtjdXJyZW50QWN0aXZlQ2FyZF0uY2xhc3NOYW1lID0gJ2NhcmQgYWN0aXZlJztcblxuICAgIHVwZGF0ZUN1cnJlbnRUZXh0KCk7XG59KTtcblxuXG4vL3ByZXYgYnRuXG5wcmV2QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNhcmRzRWxbY3VycmVudEFjdGl2ZUNhcmRdLmNsYXNzTmFtZSA9ICdjYXJkIHJpZ2h0JztcblxuICAgIGN1cnJlbnRBY3RpdmVDYXJkID0gY3VycmVudEFjdGl2ZUNhcmQgLSAxO1xuXG4gICAgaWYgKGN1cnJlbnRBY3RpdmVDYXJkIDwgMCkge1xuICAgICAgICBjdXJyZW50QWN0aXZlQ2FyZCA9IDA7XG4gICAgfVxuXG4gICAgY2FyZHNFbFtjdXJyZW50QWN0aXZlQ2FyZF0uY2xhc3NOYW1lID0gJ2NhcmQgYWN0aXZlJztcblxuICAgIHVwZGF0ZUN1cnJlbnRUZXh0KCk7XG59KTtcblxuLy9zaG93IGFkZCBjb250YWluZXJcblxuc2hvd0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGFkZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzaG93JykpO1xuXG4vLyBoaWRlIFxuaGlkZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGFkZENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdzaG93JykpO1xuXG5cbi8vIGFkZCBuZXcgY2FyZFxuYWRkQ2FyZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBxdWVzdGlvbiA9IHF1ZXN0aW9uRWwudmFsdWU7XG4gICAgY29uc3QgYW5zd2VyID0gYW5zd2VyRWwudmFsdWU7XG5cbiAgICBpZiAocXVlc3Rpb24udHJpbSgpICYmIGFuc3dlci50cmltKCkpIHtcblxuICAgICAgICBjb25zdCBuZXdDYXJkID0geyBxdWVzdGlvbiwgYW5zd2VyIH07XG5cbiAgICAgICAgY3JlYXRlQ2FyZChuZXdDYXJkKTtcblxuICAgICAgICBxdWVzdGlvbi52YWx1ZSA9ICcnO1xuICAgICAgICBhbnN3ZXIudmFsdWUgPSAnJztcblxuICAgICAgICBhZGRDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuXG4gICAgICAgIGNhcmRzRGF0YS5wdXNoKG5ld0NhcmQpO1xuICAgICAgICBzZXRDYXJkRGF0YShjYXJkc0RhdGEpO1xuICAgIH1cbn0pO1xuXG4vL2NsZWFyIGNhcmRzXG5jbGVhckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICBjYXJkc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG59KSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ })

/******/ });