

function main () {

  document.querySelectorAll('.postArticle-content').forEach(function(el) {
    if (el.innerText.isArabic()) {
      el.setAttribute('dir', 'rtl')
    }
  });
}

main()

document.body.addEventListener("transitionend", function (event) {
  
  if (/js-heroPromo/.test(event.target.className)) {
    main()
  }
}, false)
