// Enter the content you want to hide:
const terms = ['Donald', 'Trump', 'government', 'election'];
// *****************************************

const regexSearches = terms.map((term) => new RegExp(term, 'i'));
const classNames = ['fbUserContent', 'ego_unit', 'mam'];
const specialElements = ['li._5my2'];

function collectContent() {
  const content = [];

  classNames.forEach((className) => {
    const c = document.getElementsByClassName(className);
    content.push(c);
  });

  specialElements.forEach((element) => {
    const s = document.querySelectorAll(element)
    content.push(s);
  });

  return content;
}

function hideContent(content) {
  content.forEach((c) => {
    regexSearches.forEach((regex) => {
      if (c.innerText.search(regex) !== -1){
        c.style.display = 'none';
      }
    });
  })
}

function collectAndHideContent(){
  const content = collectContent();
  hideContent(content);
}

collectAndHideContent();
window.addEventListener('scroll', collectAndHideContent);
