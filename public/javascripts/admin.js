(function () {
  $('#submit').click(function() {
    $.post('/counter', { counter: $(counterInput).val() });
  });
  $('#reset').click(function() {
    $.post('/counter', { counter: "101" });
  });
  $('#wrong').click(function() {
    $.post('/counter', { counter: "102" });
  });
}());
