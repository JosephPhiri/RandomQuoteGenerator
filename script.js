
// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// function that randomly selects a quote
function getRandomQuote() {
    var Quotez = Math.floor(Math.random() * (quotes.length));
    return quotes[Quotez];
}
// Array of Quotes

var quotes = [
    {
        quote: 'You must be the change you wish to see in the world.',
        source: 'Mahatma Gandhi'
      
     
    },
    {
        quote: 'An eye for eye only ends up making the whole world blind.',
        source: 'Mahatma Gandhi'
        
    
    },
    {
        quote: 'Successful people do whatever it takes to get the job done, whether or not they feel like it.',
        source: ' Jeff Olsen'
    
      
    },
    {
        quote: 'There are two kinds of habits: those that serve you, and those that dont',
        source: 'Jeff Olsen'
        
    },
    {
        quote: 'The key is not to prioritize whats on your schedule, but to schedule your priorities',
        source: 'stephen covey'
       
    },
    
    {
        quote: 'Our acts can be no wiser than our thoughts',
        source: 'George S. Clason'
        
    },
    {
        quote: 'Success is causing the world around you to aspire to you inspiration',
        source: 'Chris Oyakhilome'
            
    }
];

// print function 
function printQuote() {
  var QuoteSelected = getRandomQuote();
  var html = '<p class="quote">' + QuoteSelected.quote + '</p>'
  + '<p class="source">' + QuoteSelected.source + '</p>';
  
  document.getElementById('quote-box').innerHTML = html;
}