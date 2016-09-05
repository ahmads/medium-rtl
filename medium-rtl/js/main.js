// IIFE
(function main () {
  const textContainerQuery = '.postArticle-content';
  let content = document.querySelector('#container')
  let observer = new MutationObserver((mutations) => {
    let addedNodes = [].reduce.call(mutations, (prev, cur) => {
      if (cur.addedNodes.length) {
        // cast NodeLists to Arrays
        let rtlNodes = [...cur.addedNodes]
          // get rtlable elements
          .map(node => [...node.querySelectorAll(textContainerQuery)])
          .filter(list => list.length);
        return prev.concat.apply(prev, rtlNodes);
      }
      return prev;
    }, []);
    addedNodes.forEach(node => {
      if (node.textContent && !node.hasAttribute('dir') && node.textContent.isArabic()) {
        node.setAttribute('dir', 'rtl');
      }
    })
  })
  observer.observe(content, { childList: true, subtree: true }); 
})()
