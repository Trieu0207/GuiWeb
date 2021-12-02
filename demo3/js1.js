function changeBg(obj){
  var color = obj.id
  var bg = document.getElementById("bodyId")
  bg.style.backgroundColor = color
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