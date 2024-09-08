


function waitForElementToDisplay(selector, callback, checkFrequencyInMs, timeoutInMs) {
    var startTimeInMs = Date.now();
    (function loopSearch() {
      if (document.querySelector(selector) != null) {
        callback();
        return;
      }
      else {
        setTimeout(function () {
          if (timeoutInMs && Date.now() - startTimeInMs > timeoutInMs)
            return;
          loopSearch();
        }, checkFrequencyInMs);
      }
    })();
  }

function vidparser(url){
    let regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    let match = url.match(regExp);
    if (match && match[2].length == 11){
        return match[2];
    }
    else{
        console.log("error")
    }
}
  function postf(){
    let currentLocation = window.location.toString();
   
        fetch("https://api.cgwe.st/vote/" + vidparser(currentLocation),{
            method: "POST",
        }).catch((_) => { /* do nothing :) */ });
  
}


  function mbtn(){
    let btn = document.createElement("button");
    btn.innerHTML = "Munch'd";
    btn.id = "btn-mlike";

    btn.style.zIndex = "10";
    btn.style.borderRadius = '30%';
    btn.style.padding = "10px";
    btn.style.color = "white";
    btn.style.backgroundColor = "#292826";
    btn.style.marginLeft = "10px";
    btn.style.marginRight = "10px";

    let likedislikearea = document.getElementsByClassName('top-level-buttons')[0]
    likedislikearea.appendChild(btn);
    btn.addEventListener("click", () => {
      postf();
      btn.disabled = true;
    });
  
   
}


waitForElementToDisplay(".YtLikeButtonViewModelHost",mbtn,500,10000);


