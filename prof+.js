$(function()
  {
      var jikan = new Date();
      var second = jikan.getSeconds();
      var minute = jikan.getMinutes();
      var x = (minute % 5) * 60 + second % 60;
      if (x == 0) $(face).attr("src", "img/penguin.png");
      else if (second % 60 == 0) $(face).attr("src", "img/sake.jpg");
      else if (second % 20 == 0) $(face).attr("src", "img/prof+.png");
      else if (second % 5 == 0) $(face).attr("src", "img/prof.png");
      else if (second % 2 == 0) $(face).attr("src", "img/tree.jpg");
      else $(face).attr("src", "img/book.jpg");
  }
);
