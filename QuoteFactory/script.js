$(document).ready(function() {
  showRandomQuote();

  function showRandomQuote() {
    var quotes = [
      ["Veni, vidi, vici", "Julius Caesar"],
      ["Where there is love there is life.", "Mahatma Gandhi"],
      ["From error to error, one discovers the entire truth.", "Sigmund Freud"],
      ["Do not wait. The time will never be \"just right.\" Start where you stand, and work with whatever tools you may have at your command, and better tools will be found as you go along.", "Napoleon Hill"],
      ["The man who does more than he is paid for will soon be paid for more than he does.", "Napoleon Hill"],
      ["I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me. And when it has gone past I will turn the inner eye to see its path. Where the fear has gone there will be nothing. Only I will remain.", "Frank Herbert"],
      ["The only thing we have to fear is fear itself.", "Franklin D. Roosevelt"],
      ["Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", "Albert Schweitzer"],
      ["To improve is to change; to be perfect is to change often.", "Winston Churchill"],
      ["Knowing is not enough; we must apply. Willing is not enough; we must do.", "Johann Wolfgang Von Goethe"],
      ["Courage leads to heaven; fear leads to death.", "Seneca"],
      ["A person will be just about as happy as they make up their minds to be.", "Abraham Lincoln"],
      ["The true sign of intelligence is not knowledge but imagination.", "Albert Einstein"],
      ["Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", "Albert Einstein"],
      ["A person who never made a mistake never tried anything new.", "Albert Einstein"]
    ];
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    $(".quote").text(randomQuote[0]);
    $(".signature").text(randomQuote[1]);
  }

  $(".another-quote").on("click", function() {
    showRandomQuote();
  });
});