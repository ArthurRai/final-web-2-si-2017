var quoteArray = [
  ["A man who doesn't spend time with his family can never be a real man.","Don Corleone"],
  ["I'll tell you this, in any fight it's the guy whose willing to die whose gonna win that inch.", "Tony D'Amato"],
  ["Without pain, without sacrifice, we would have nothing.", "Tyler Durden"],
  ["Sometimes I wonder... will God ever forgive us for what we've done to each other? Then I look around and I realize... God left this place a long time ago.", "Danny Archer"],
  ["I got money, which gives me the power to shake up the system.", "Larry Flynt"],
  ["The days go on and on... they don't end. All my life needed was a sense of someplace to go.", "Travis Bickle"],
  ["It's a great thing when you realize you still have the ability to surprise yourself.", "Lester Burnham"]
];
var countQuotes = quoteArray.length;
seedQuote();

document.getElementById("new-quote").onclick = function(e) {
  seedQuote();
}

function getQuote() {
  var whichQuote = Math.floor(Math.random() * (countQuotes));
}

function seedQuote() {
  var whichQuote = Math.floor(Math.random() * (countQuotes));

  document.getElementById("quote").innerHTML = quoteArray[whichQuote][0];

  if (quoteArray[whichQuote][1]) {
    var quoteAuthor = quoteArray[whichQuote][1];
  } else {
    var quoteAuthor = "Unknown";
  }

  document.getElementById("quote-author").innerHTML = quoteAuthor;
}
  var colors = ["#af002b", "#6200af", "#005baf", "#008b5f", "#8b6400", "#852a2a"];
  function getRandomColor() {
    var color =  Math.floor(Math.random() * colors.length);
    
     $("body").css({
       color: colors[color],
        background: colors[color],
       });
}
  $('#new-quote').on('click', function(){
    getRandomColor();
  });