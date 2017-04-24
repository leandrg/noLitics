//
// facebook.js for nolitics in /Users/leandr_g/Documents/perso/nolitics/noLitics/
//
// Made by Gaëtan Léandre
// Login   <leandr_g@epitech.eu>
//
// Started on  Mon Apr 24 10:34:58 2017 Gaëtan Léandre
// Last update Mon Apr 24 11:30:04 2017 Gaëtan Léandre
//

var addImage = function(found)
{
    var gif;

    makeRequest("GET", "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=funny").then(function(responseText){
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
    var aTags = document.getElementsByClassName("fbUserContent _5pcr");
    var found;
    var img;
    var txt;
    var card;
    var tmp;

    for (var i = 0; i < aTags.length; i++) {
      if (aTags[i] && !(aTags[i].classList.contains("noLitics")) && isIn(removeDiacritics(aTags[i].textContent.toUpperCase()))) {
        found = aTags[i];
        if ((tmp = found.getElementsByClassName("fbUserContent")[0]) != undefined)
        {
            tmp.className += " noLitics";
            found = tmp;
        }
        found = found.getElementsByClassName("_1dwg _1w_m")[0];
        if (found)
            found = found.lastChild;
        if (found)
        {
            addImage(found);
            txt = found.getElementsByClassName("_5pbx userContent")[0];
            img = found.getElementsByClassName("_3x-2")[0];
            if (txt)
                found.removeChild(txt);
            if (img)
                found.removeChild(img);
        }
        aTags[i].className += " noLitics";
      }
    }
}

remplace();

window.addEventListener('scroll', function(e) {
    remplace();
});
