$(document).ready(function(){
  $(".tab-content div:not(:first-child)").hide()
  $("ul.tab a").click(function(){
    event.preventDefault()
    $("ul.tab a").removeClass("obj")
    $(this).addClass("obj")

    var tab = $(this).attr("href")
    $(".tab-content div").hide()
    $(tab).show()
  })
})


$(document).ready(function(){
  $(window).scroll(function(){
  if($(this).scrollTop() >= 100)
  $("#ontop").show("slow")
  else
  $("#ontop").hide("slow")
 })


$("#ontop").click(function(){
  $("html, body").animate({
    scrollTop: 0
  }, 1000)
})
})


function init(){
  var but = document.querySelectorAll("div.item button")
  for(var i = 0; i < but.length; i++)
  but[i].onclick = function() {
    var b = "images/html2/character/"
    var a = ".jpg"
  var str = b + this.id + a
  var img = document.getElementById("mainImg")
  img.src = str
  }
 var col = document.querySelectorAll("div.color div")
 for(var i = 0; i < col.length; i++)
 col[i].onclick = function(){
  var color = this.id
  var bg = document.getElementById("bodyId")
  bg.style.backgroundColor = color
 }
}