$(function()
  {
      var jikan = new Date();
      var second = jikan.getSeconds();
      var minute = jikan.getMinutes();
      var x = (minute % 5) * 60 + second % 60;
      if (x == 0) $(face).attr("src", "img/penguin.png");
      else if (second % 60 == 0) $(face).attr("src", "img/prof1.png");
      else if (second % 30 == 0) $(face).attr("src", "img/prof2.png");
      else if (second % 5 == 0) $(face).attr("src", "img/prof++.png");
      else if (second % 2 == 0) $(face).attr("src", "img/prof.png");
      else $(face).attr("src", "img/prof+.png");
  }
);