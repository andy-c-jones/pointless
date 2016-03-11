(function () {
  $('#submit').click(function() {
    $.post('/counter', { counter: $(counterInput).val() });
  });
}());
