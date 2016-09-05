// IIFE
(function main () {
  const textContainerQuery = '.postArticle-content';
  const doRtl = (nodes) => {
    // optimize DOM manipulation
    // first loop to read the current values
    let idxArr = new Array(nodes.length);
    nodes.forEach((node, idx) => {
      if (!node.hasAttribute('dir') && node.innerText && node.innerText.isArabic()) {
        idxArr[idx] = true;
      }
    });
    // second apply where needed
    nodes.forEach((node, idx) => {
      if (idxArr[idx]) {
        node.setAttribute('dir', 'rtl');
      }
    })
  };
  // do it on initial load
  doRtl(document.body.querySelectorAll(textContainerQuery));
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
    doRtl(addedNodes);
  });
  observer.observe(content, { childList: true, subtree: true }); 
})()
