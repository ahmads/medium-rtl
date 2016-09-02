

function main () {

  var content = $('.postArticle-content')

  if (content.text().isArabic()) {
    content.attr('dir', 'rtl')
  }
}

main()

document.body.addEventListener("transitionend", function (event) {
  
  if (/js-heroPromo/.test(event.target.className)) {
    main()
  }
}, false)
