function changeImage(element){
  switch(element){
    case "images/interstellar2.jpg": case "images/interstellar.jpg":
      document.getElementById('interstellar').src=element;
      break;
    case "images/shawshank2.jpg": case "images/shawshank.jpg":
      document.getElementById('shawshank').src=element;
      break;
    case "images/blackKnight2.jpg": case "images/blackKnight.jpg":
      document.getElementById('blackKnight').src=element;
      break;
    case "images/forestGump2.jpg": case "images/forestGump.jpg":
      document.getElementById('forestGump').src=element;
      break;
    case "images/greenMile2.jpg": case "images/greenMile.jpg":
      document.getElementById('greenMile').src=element;
      break;
    case "images/seven2.jpg": case "images/seven.jpg":
      document.getElementById('seven').src=element;
      break;
    case "images/theSilenceOfTheLambs2.jpg": case "images/theSilenceOfTheLambs.jpg":
      document.getElementById('theSilenceOfTheLambs').src=element;
      break;
    case "images/genezis2.jpg": case "images/genezis.jpg":
      document.getElementById('genezis').src=element;
      break;
    case "images/theGodFather2.jpg": case "images/theGodFather.jpg":
      document.getElementById('theGodFather').src=element;
      break;
  }
}

function btnClicked(){
  if(document.getElementById('rent').click){
    alert("Заявката ви е изпратена!");
  }
}
