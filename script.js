$.each($('[name*="value"]'), function(index, elem) {
  $(elem).attr('checked', true);
});
$.each($('[id*="amount"]'), function(index, elem) {
  elem.value = $(elem).parent().parent().children('th:nth-child(2)').text().substring(1);
});
