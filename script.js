document.body.addEventListener('load', changeQuote());

function changeQuote(){

//Array of quotes
var quotesArr =     [["What one man can do, another can do","Unknown"],
                     ["If you can take it, you can make it", "Unknown"],
                     ["If you can dream it, you can do it.","Walt Disney"],
                     ["Whatever you are, be a good one.","Abraham Lincoln"],
                     ["Never, never, never give up.","Winston Churchill"],
                     ["Don&#39;t wait. The time will never be just right.","Napolean Hill"],
                     ["If not us, who? If not now, when?", "John F. Kennedy"],
                     ["I can, therefore I am.", "Simone Weil"],
                     ["Wherever you go, go with all your heart.","Confucius"],
                     ["Do what you can, with what you have, where you are.","Theodore Roosevelt"],
                     ["Action is the foundational key to all success.","Pablo Picasso"],
                     ["Do one thing every day that scares you.","Eleanor Roosevelt"],
                     ["You must do the thing you think you cannot do.","Eleanor Roosevelt"],
                     ["Believe you can and you&#39;re halfway there.","Theodore Roosevelt"],
                     ["Eighty percent of success is showing up.","Woody Allen"],
                     ["To be the best, you must be able to handle the worst.","Wilson Kanadi"],
                     ["A jug fills drop by drop.","Buddha"],
                     ["The obstacle is the path.", "Zen Proverb"],
                     ["The best way out is always through.","Robert Frost"],
                     ["If you have never failed you have never lived.","Unknown"],
                     ["Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.","Samuel Beckett"],
                     ["It does not matter how slowly you go as long as you do not stop.","Confucius"],
                     ["It is never too late to be what you might have been.","Anonymous"],
                     ["An obstacle is often a stepping stone.","Prescott Bush"],
                     ["Dream big and dare to fail.","Norman Vaughan"],
                     ["Men are born to succeed, not fail.","Henry David Thoreau"],
                     ["Success is walking from failure to failure with no loss of enthusiasm.","Winston Churchill"],
                     ["The journey of a thousand miles begins with one step.","Lao Tzu"],
                     ["The ones who are crazy enough to think they can change the world are the ones that do.","Anonymous"],
                     ["Don&#39;t be afraid to give up the good to go for the great.","John D. Rockefeller"],
                     ["No masterpiece was ever created by a lazy artist.","Anonymous"]];

//Get a random number between 0 and the array length
var randomNum = Math.floor((Math.random() * quotesArr.length));

//Set quote and author based on random number
console.log(randomNum);
var showQuote = quotesArr[randomNum][0];
var showAuthor = quotesArr[randomNum][1];

//Display random quote and author
document.getElementById("quoteText").innerHTML = showQuote;
document.getElementById("author").innerHTML = showAuthor;

//Update Twitter button with quote text
document.getElementById("twitter-share-button").setAttribute("href", "http://twitter.com/share?text=" + showQuote + "%20%23motivationquote");

                 };

