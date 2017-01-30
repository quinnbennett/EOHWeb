
$(document).ready(function(){
      $('.carousel').carousel();
    });

var cards = [
 { title: 'Griffin', img: 'images/griffin.jpg', description: 'You are caught in a battle against darkness. invoke the qualities of the griffin to strengthen your fight.' },
 { title: 'Ka', img: 'images/ka.jpg', description: 'Your vital force is being threatened or is vulnerable right now. Take care to protect that part of yourself.' },
 { title: 'Lotus', img: 'images/lotus.jpg', description: 'A balance between the divine and chaos must be found. Relying soley on one sets life askew. Remember, the Universe is comprised of both aspects.' },
 { title: 'Ma\'at', img: 'images/ma\'at.jpg', description: 'Seek truth, not only in others but within yourself as well.' },
 { title: 'Scarab', img: 'images/scarab.jpg', description: 'The scarab represents renewal of life. Like the flowers in spring, the spirit also blooms again. This may also refer to a rebirth of creativity.' },
 { title: 'Spiral', img: 'images/spiral.jpg', description: 'The cycle of birth and death is eternal. the ups and downs of life are but brief and all a part of the spiral.' }
];

var cardImg = document.getElementById("card");
var cardName = document.getElementById("title");
var fortune = document.getElementById("fortune");

function shuffle() {     
    var s = Math.floor((Math.random() * 7));  
    cardImg.setAttribute("src", cards[s].img);
    cardName.textContent = cards[s].title;
    var para = document.createElement("P");
    var descrip = document.createTextNode(cards[s].description)
    para.appendChild(descrip);
    fortune.appendChild(para);
    $("#card").removeAttr("onclick"); //disables click event 
} 
