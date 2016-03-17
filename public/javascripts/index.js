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

  (function counterWorker() {
    $.get('/counter', function(data) {
        progress(data, $(progressBar));
        setTimeout(counterWorker, 1000);
      });
  })();

  (function scoreWorker() {
    $.get('/scores', function(data) {
        $(scoreOne).html(data.one);
        $(scoreTwo).html(data.two);
        $(scoreThree).html(data.three);
        $(scoreFour).html(data.four);
        setTimeout(scoreWorker, 1000);
      });
  })();
}());
