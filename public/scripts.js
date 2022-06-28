

var toggle = function (e) {
  console.log(e.target)
  console.log($('.accordion'))

}

var main = function() {
  var accordions = document.getElementsByClassName("accordion");

  for (var i = 0; i < accordions.length; i ++) {
    // console.log(accordions[i])
    var container = accordions[i]
    var toggler = function(e) {
      toggle(e, container[i]).bind(container[i])
    }
    // let f = nextElement.style.maxHeight
    accordions[i].addEventListener("click", toggle)

  }

}

main()