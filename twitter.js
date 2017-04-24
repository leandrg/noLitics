//
// twitter.js for noLitics in /Users/leandr_g/Documents/perso/nolitics/noLitics/
//
// Made by Gaëtan Léandre
// Login   <leandr_g@epitech.eu>
//
// Started on  Mon Apr 24 10:10:03 2017 Gaëtan Léandre
// Last update Mon Apr 24 12:17:40 2017 Gaëtan Léandre
//

var addImage = function(found)
{
    var gif;

    makeRequest("GET", "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=sexy").then(function(responseText){
        result = JSON.parse(responseText).data.image_url;
        if (!(result.includes("https")))
            result = result.replace("http", "https");
        gif = document.createElement("img");
        gif.src = result;
        gif.style.width='100%'
        found.insertBefore(gif, found.children[found.children.length - 1]);
    });
};

var remplace = function()
{
    var aTags = document.getElementsByClassName("tweet");
    var found;
    var img;
    var txt;
    var card;

    for (var i = 0; i < aTags.length; i++) {
      if (aTags[i] && !(aTags[i].classList.contains("noLitics")) && isIn(removeDiacritics(aTags[i].textContent.toUpperCase()))) {
        found = aTags[i].getElementsByClassName("content")[0];
        if (found)
        {
            addImage(found);
            txt = found.getElementsByClassName("js-tweet-text-container")[0];
            img = found.getElementsByClassName("AdaptiveMediaOuterContainer")[0];
            card = found.getElementsByClassName("card2")[0];
            if (txt)
                found.removeChild(txt);
            if (img)
                found.removeChild(img);
            if (card)
                found.removeChild(card);
        }
        aTags[i].className += " noLitics";
      }
    }
}

remplace();

window.addEventListener('scroll', function(e) {
    remplace();
});
