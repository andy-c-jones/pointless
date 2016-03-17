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
  $('#updateOne').click(function() {
    $.post('/one', { score: $(TeamOne).val() });
  });
  $('#updateTwo').click(function() {
    $.post('/two', { score: $(TeamTwo).val() });
  });
  $('#updateThree').click(function() {
    $.post('/three', { score: $(TeamThree).val() });
  });
  $('#updateFour').click(function() {
    $.post('/four', { score: $(TeamFour).val() });
  });

  $('#resetOne').click(function() {
    $.post('/one', { score: "--" });
  });
  $('#resetTwo').click(function() {
    $.post('/two', { score: "--" });
  });
  $('#resetThree').click(function() {
    $.post('/three', { score: "--" });
  });
  $('#resetFour').click(function() {
    $.post('/four', { score: "--" });
  });
}());
