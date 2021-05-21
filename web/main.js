const url =' web/data.html'

$(document).ready(function () {
  $("#container").click(function (e) {
    e.preventDefault();
    $.get("data.html", function (data, textStatus, jqXHR) {
      $("#container").append(data, jqXHR, textStatus);
    });
  });
});