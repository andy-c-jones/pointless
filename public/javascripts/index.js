(function () {
  function progress(score, $element) {
      var percent = 100 - score;
      var progressBarHeight = percent * $element.height() / 100;
      $element.find('div').animate(
        { height: progressBarHeight },
        500,
        function() {
          $(number).html(score);
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
