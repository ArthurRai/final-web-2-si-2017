$(document).ready(function() {
  $("#searchclear").click(function(){
    $("input").val('');
    $(".results").html('');
    });
 $('.search').click(function(){
  var front = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=';
 var input = document.getElementById("input").value ;
  var back = '&callback=?';
  $.getJSON(front + input + back, function(data) {
    var pages = data.query.search;
    pages.forEach(function(page) {
      var url_title = page.title.split(' ');
      url_title = url_title.join('_');
      $('.results').append("<div><h3><a target = '_blank' href = 'https://en.wikipedia.org/wiki/" + url_title + "'>" + page.title + "</a></h3> <p>" + page.snippet + "</div>");
    });
  });
 });
});