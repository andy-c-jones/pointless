(function () {
  function progress(score, $element) {
      var percent = 100 - score;
      var progressBarHeight = percent * $element.height() / 100;
      $element.find('div').animate(
        { height: progressBarHeight },
        500,
        function() {
          if(score === "101") {
            $(number).html("--");
          } else if(score === "102") {
            $(number).html("X");
          }
          else {
            $(number).html(score);
          }
          return true;
        });
  };

  (function worker() {
    $.get('/counter', function(data) {
        progress(data, $(progressBar));
        setTimeout(worker, 1000);
      });
  })();
}());
