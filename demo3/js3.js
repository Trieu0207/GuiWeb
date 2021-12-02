function init(){
   var col = document.querySelectorAll("div.color div")
   for(var i = 0; i < col.length; i++)
   col[i].onclick = function(){
    var color = this.id
    var bg = document.getElementById("bodyId")
    bg.style.backgroundColor = color
   }
  var imagess = document.querySelectorAll("div.irItem img")
  for(var i = 0; i < imagess.length;i++)
  imagess[i].onclick = function(){
    var path = this.src 
    var img = document.getElementById("ironImg")
    img.setAttribute("src", path)
  }
   
  var imagess = document.querySelectorAll("div.thItem img")
  for(var i = 0; i < imagess.length;i++)
  imagess[i].onclick = function(){
    var path = this.src 
    var img = document.getElementById("thorImg")
    img.setAttribute("src", path)
  }
  var imagess = document.querySelectorAll("div.thaItem img")
  for(var i = 0; i < imagess.length;i++)
  imagess[i].onclick = function(){
    var path = this.src 
    var img = document.getElementById("thaImg")
    img.setAttribute("src", path)
  }
  }

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


