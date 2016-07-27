
var headers={ 'X-Mashape-Key': '6AtC6TOfItmshnzu678mLniVHMQlp1zol7RjsnvxkHDLvNZaIF',
 			   'Content-Type': 'application/x-www-form-urlencoded',
 			   'Accept': 'application/json'
 			};
var APIurl = 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous';

var tweetStr = "";

var colors = [
  '#EF5350', 'white'
];

var getQuote = function() {
   var quote = "";
   var author = "";
   $.ajax( {
    type: 'GET',
     url: APIurl,
    headers: headers,
     success: function(response) {
     response = JSON.parse(response);
      author += '<p>-' + response.author + "</p>"
      quote += '<p class="lead">' + response.quote + "</p>"
      var quoteEncoded = encodeURIComponent(response.quote);
      var authorEncoded = encodeURIComponent(response.author);
      tweetStr = (quoteEncoded  + "   -" + authorEncoded + " #quotes");
     },
    error: function(err){
      console.log("An error occured", err);
   }
 })
 $("#quote-content").slideUp("slow", function(){
      $("#quote-content")
        .html(quote)
        .slideDown("fast");

   });
   $("#quote-author").slideUp("slow", function(){
      $("#quote-author")
      .html(author)
      .slideDown("fast");

   });
}
$('#quoteButton').on('click', function(e) {
   e.preventDefault();
   getQuote();
 });


function openURL(url){
  window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}

$('#tweet-quote').on('click', function() {

  openURL('https://twitter.com/intent/tweet?text=' +tweetStr);
  //encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
  });

 $("#tweet-quote").hover(function() {
   $("#tweet-quote").toggleClass("pulse");
 });


  $( document ).ready(function() {
  getQuote();
  });
