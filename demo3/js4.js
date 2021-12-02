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

  $(".content1").hide()
  $(".tin1 a").click(function(){
    $(".content1").show()
  })
  $(".content1 a").click(function(){
    $(".content1").hide()
  })
 var a = 300;
  $(".btsH1 a").click(function(){
  })

  })
  function init(){
    var col = document.querySelectorAll("div.color div")
    for(var i = 0; i < col.length; i++)
    col[i].onclick = function(){
     var color = this.id
     var bg = document.getElementById("bodyId")
     bg.style.backgroundColor = color
    }
  }
 var t = 0
  function fh(){
    var sr = document.getElementById("fh")
    var a = 80
    if(t + sr.offsetHeight == a )
    sr.setAttribute("style","height:auto");
    else
    sr.setAttribute("style","height:79px");
    var clss = document.getElementById("seen")
    var cls3 = "seen"
    clss.setAttribute("class", cls3)
  }
  function fh2(){
    var sr = document.getElementById("fh2")
    var a = 80
    if(t + sr.offsetHeight == a )
    sr.setAttribute("style","height:auto");
    else
    sr.setAttribute("style","height:79px");
    var clss = document.getElementById("seen2")
    var cls3 = "seen2"
    clss.setAttribute("class", cls3)
  }
  function fh3(){
    var sr = document.getElementById("fh3")
    var a = 80
    if(t + sr.offsetHeight == a )
    sr.setAttribute("style","height:auto");
    else
    sr.setAttribute("style","height:79px");
    var clss = document.getElementById("seen3")
    var cls3 = "seen3"
    clss.setAttribute("class", cls3)
  }