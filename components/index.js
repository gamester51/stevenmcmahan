

const wrapper = document.getElementById("tiles");
let cards = document.querySelector(".card-container");

let contactButton = document.getElementById("contact-me");
let contactForm = document.getElementById("contact-container");
let contactActive = false;



let nameInput = document.getElementById("name-field");
let emailInput = document.getElementById("email-field");
let messageInput = document.getElementById("message-field");
let mailInput = document.getElementById("mailing-check");
let formButton = document.getElementById("contact-button");
let contactClose = document.getElementById("contact-close");


// const mountainRange = document.getElementById("mountain");
// let mountainRange = document.getElementById("mountain");


cards.style.opacity = "0";
// mountainRange.style.opacity = "0";
contactForm.style.opacity = "0";

nameInput.style.pointerEvents = "none";
emailInput.style.pointerEvents = "none";
messageInput.style.pointerEvents = "none";
mailInput.style.pointerEvents = "none";
formButton.style.pointerEvents = "none";
contactClose.style.pointerEvents = "none";
formButton.style.display = "none";





// mountainVar = document.getElementById("mountain");




let columns = 0,
rows = 0;
toggled = false;







































// let mtnRange1 = document.getElementsByClassName("a");
// if(toggled){
//   console.log(mtnRange1);
  
// }





// const mtnbg = document.getElementById("#mountain");
// if(!toggled){
//   mtnbg.style.opacity = 0;
// }else{
//   mtnbg.style.opacity = initial;
// }


// const colors =[
// "rgb(229, 57, 53)",
// "rgb(253, 216, 53)",
// "rgb(244, 81, 30)",
// "rgb(76, 175, 80)",
// "rgb(33, 150, 243)",
// "rgb(156, 39, 176)"
// ];

const toggle = () =>{
    toggled=!toggled;

    document.body.classList.toggle("toggled");
}

// let count = -1;

contactButton.addEventListener("click", () => {
  if(!contactActive){
    contactForm.style.opacity = "1";
  nameInput.style.pointerEvents = "initial";
emailInput.style.pointerEvents = "initial";
messageInput.style.pointerEvents = "initial";
mailInput.style.pointerEvents = "initial";
formButton.style.pointerEvents = "initial";
contactClose.style.pointerEvents = "initial";
formButton.style.display = "flex";
  contactActive = true;
  }else{
    return;
  }
})



contactClose.addEventListener("click", () => {
  if(contactActive){
    contactForm.style.opacity = "0";
  nameInput.style.pointerEvents = "none";
emailInput.style.pointerEvents = "none";
messageInput.style.pointerEvents = "none";
mailInput.style.pointerEvents = "none";
formButton.style.pointerEvents = "none";
contactClose.style.pointerEvents = "none";
formButton.style.display = "none";
  contactActive = false;

}else{
  return;
}
})



const handleOnClick = index => {
    // count = count +1;


 
      
    


toggle();

if(toggled){
  cards.style.opacity = "1";
  cards.style.transition = "opacity 2s";

  // mountainRange.style.opacity = "1";
  // mountainRange.style.transition = "opacity 5s";
  
  
}else{
  // mountainRange.style.opacity = "0";
  // mountainRange.style.transition = "opacity 5s";

  cards.style.opacity = "0";
  cards.style.transition = "opacity 4s";
};

//this site helps describe transition for opacity
//http://xahlee.info/js/js_fadeout_css_transition.html
// const f_fade = (() => { fadeBox27921.style.opacity = 0; });

// const f_unfade = (() => { fadeBox27921.style.opacity = 1; });



// setTimeout(() => {
//   buttonElement.style.opacity = 1;
// }, this.animationDelay + 20); 

anime({
    targets: ".tile",
    opacity: toggled ? 0 : 1,


    // backgroundColor: colors[count % (colors.length -1)], dont use
    // delay: anime.stagger(50, {
    //     grid: [columns, rows],
    //     from: index
    // })


    //kind of works, wierd grid afterwards
    // translateX: anime.stagger(50, {grid: [columns, rows], from: index, axis: 'x'}),
    // translateY: anime.stagger(50, {grid: [columns, rows], from: index, axis: 'y'}),
    // rotateZ: anime.stagger([0, 90], {grid: [columns, rows], from: index, axis: 'x'}),
    // delay: anime.stagger(200, {grid: [columns, rows], from: index}),
    // easing: 'easeInOutQuad'

    scale: [
      {value: .1, easing: 'easeOutSine', duration: 500},
      {value: 1, easing: 'easeInOutQuad', duration: 1200}
    ],
    delay: anime.stagger(100, {grid: [columns, rows], from: index}),

});




anime({
targets: ".mountains",
translateY: -75,
delay: anime.stagger(500, {direction: 'normal'})
});

if(!toggled){}
}


const createTile = (index) => {
  const tile = document.createElement("div");
  tile.classList.add("tile");

  tile.style.opacity = toggled ? 0 : 1;

  tile.onclick = e => handleOnClick(index);

  return tile;
};

const createTiles = quantity => {
  Array.from(Array(quantity)).map((tile, index) => {
    wrapper.appendChild(createTile(index));
  });
};
const createGrid = () => {
  wrapper.innerHTML = "";

  columns = Math.floor(document.body.clientWidth / 100);
  rows = Math.floor(document.body.clientHeight / 100);

  wrapper.style.setProperty("--columns", columns);
  wrapper.style.setProperty("--rows", rows);

  createTiles(columns * rows);
};
createGrid();
window.onresize = () => createGrid();
