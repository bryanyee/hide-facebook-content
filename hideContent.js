// Enter the content you want to hide:
const terms = ['Donald', 'Trump', 'government', 'election'];
// *****************************************

const regexSearches = terms.map((term) => new RegExp(term, 'i'));
const classNames = ['fbUserContent', 'ego_unit', 'mam'];
const specialElements = ['li._5my2'];
let clientHeight;

function init() {
  clientHeight = document.body.clientHeight;
  collectAndHideContent();
}

function collectAndHideContent() {
  const content = collectContent();
  hideContent(content);
}

function collectContent() {
  const content = [];

  classNames.forEach((className) => {
    const c = document.getElementsByClassName(className);
    content.push(c);
  });

  specialElements.forEach((element) => {
    const s = document.querySelectorAll(element);
    content.push(s);
  });

  return content;
}

function hideContent(collectedContent) {
  collectedContent.forEach((content) => {
    regexSearches.forEach((regex) => {
      if (content.innerText.search(regex) !== -1){
        content.style.display = 'none';
      }
    });
  });
}

function checkHeightChange() {
  const currHeight = document.body.clientHeight;
  if (clientHeight !== currHeight) {
    clientHeight = currHeight;
    return true;
    }
  return false;
}

function onScroll() {
  if (checkHeightChange()) {
    collectAndHideContent();
  }
}

window.onload(init);
window.addEventListener('scroll', onScroll);
