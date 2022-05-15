
let wakaspaceh1 = document.getElementById("wakaspace__heading");
let wakaspaceDesc = document.querySelectorAll(".wakaspace__content");
let abouth1 = document.getElementById("about__heading");
let abouth2 = document.getElementById("about__h2");
let aboutDesc = document.getElementById("about__description");
let projecth1 = document.getElementById("project__heading");
let projecth3 = document.getElementById("project__h3");
let projectDesc = document.getElementById("project__description");
let collectionSection = document.getElementById("collection-section")
let collectionh1 = document.getElementById("collection__heading");
let collectionDesc = document.getElementById("collection__description");
let collectionRight = document.getElementById("collection__right");
let collectionCards = document.getElementById("collection__cards");
let featureh1 = document.getElementById("feature__heading");
let tokenomicsh1 = document.getElementById("tokenomics__heading");
let tokenomicsDesc = document.getElementById("tokenomics__description");
let roadmaph1 = document.getElementById("roadmap__heading");
let roadmaph2 = document.getElementById("roadmap__heading2");
let teamh1 = document.getElementById("team__heading");
let teamDesc = document.getElementById("team__description");

let collectionImgs = document.querySelectorAll(".collection-imgs")
let featureContentFeatures = document.querySelectorAll(".features_content_features");

let featureLatency = document.querySelectorAll(".features_latency");
let roadmapImgs = document.querySelectorAll(".roadmap-img-div")

let collectionClickedImg = document.getElementById("collection-clicked-img")
let collectionHeroImg = document.getElementById("collection-hero-img")
let collectionName = document.querySelectorAll(".collection_name")

let collectionArr = ["zedius", "hybrid", "muscan", "jeffroy", "bloise", "krenes"]

animation_FadeInRight (wakaspaceh1)
animation_FadeIn(abouth1)
animation_FadeIn(abouth2)
animation_FadeInLeft(aboutDesc)
animation_FadeIn(projecth1)
animation_FadeIn(projecth3)
animation_FadeInRight(projectDesc)
animation_FadeIn(collectionh1)
animation_FadeInLeft(collectionDesc)
animation_FadeIn(collectionCards)
animation_FadeIn(collectionRight)
animation_FadeIn(featureh1)
animation_FadeIn(tokenomicsh1)
/* animation_FadeInLeft(tokenomicsDesc) */
/* animation_FadeInLeft(tokenomicsDesc2) */
animation_FadeIn(roadmaph1)
animation_FadeInRight(roadmaph2)
animation_FadeIn(teamh1)
animation_FadeIn(teamDesc)


for(let i= 0; i<wakaspaceDesc.length; i++){
  animation_FadeIn(wakaspaceDesc[i])
}

/* navbar underline */
let navs = document.querySelectorAll(".nav-item")
let activeNav = navs[0].children[1]

navs.forEach((nav)=>{
  nav.addEventListener("click", ()=>{
    activeNav.classList.remove("nav-active-line")
    activeNav = nav.children[1]
    nav.children[1].classList.add("nav-active-line")
  })
})


/* General fades and slides in out */
function animation_FadeInLeft(element){
  new Waypoint({
    element: element,
    handler: function(){
      element.classList.add("animate__animated","fadeIn","animate__fadeInLeft","animate__delay-1","animate__slow")
    },
    offset: "90%"
  })
}
function animation_FadeInRight(element){
  new Waypoint({
    element: element,
    handler: function(){
      element.classList.add("animate__animated","fadeIn","animate__fadeInRight","animate__slow")
    },
    offset: "90%"
  })
}

function animation_FadeIn(element){
  new Waypoint({
    element: element,
    handler: function(){
      element.classList.add("animate__animated","animate__fadeIn", "animate__delay-1","animate__slower")
    },
    offset: "90%"
  })
}


/* Collection Animations */
for(let i= 0; i<collectionImgs.length; i++){
  collectionImgs[i].addEventListener("click", function(){
    removeCollectionSelectedClass()
    addCollectionSelectedClass(collectionImgs[i], i)
  })
}

function removeCollectionSelectedClass(){
  for(let i = 0; i < collectionImgs.length; i++){
    collectionImgs[i].classList.remove("collection-selected")
  }
}

function addCollectionSelectedClass(card, i){
  card.classList.add("collection-selected")
  // collectionClickedImg.setAttribute("src", `./assets/imgs/${collectionArr[i]}.gif`)
  collectionHeroImg.style.backgroundImage = `url(../../assets/imgs/${collectionArr[i]}.gif)`
  collectionName.forEach((name)=>{
    name.textContent = collectionArr[i]
  })
}

/* Features Section Animation */
let featureContentFeaturesArr = Array.from(document.querySelectorAll(".features_content_features"))
let featureContentClicked = featureContentFeatures[0];
let featurePClicked = featureLatency[0].children[1]

for(let i = 0; i<featureLatency.length; i++){
  featureContentFeatures[i].addEventListener("click", function(){
    featureContentClicked.classList.remove("latency_btn", "animate__animated","animate__fadeIn", "animate__slower")
    featureContentClicked.children[0].children[0].style.opacity = 1
    featureContentClicked.children[0].children[1].style.opacity = 0
    featurePClicked.classList.remove("latency_description_selected", "animate__animated","animate__fadeIn","animate__slower")
    featureContentClicked = this
    featurePClicked = featureLatency[featureContentFeaturesArr.indexOf(this)].children[1]
    this.classList.add("latency_btn", "animate__animated","animate__fadeIn", "animate__slower")
    featurePClicked.classList.add("latency_description_selected", "animate__animated","animate__fadeIn")
    this.children[0].children[0].style.opacity = 0
    this.children[0].children[1].style.opacity = 1
  })
}

/* let latency = document.getElementById("latency")
let wallet = document.getElementById("wallet")
let nftSwap = document.getElementById("nft-swap")
let governance = document.getElementById("governance")
let ads = document.getElementById("ads")
let Scholarship = document.getElementById("Scholarship")


/* Roadmap Animation */
let roadmapOverlay = document.getElementById("roadmap-overlay")
let clickedRoadmap = roadmapImgs[0]
for(let i = 0; i < roadmapImgs.length; i++){
  roadmapImgs[i].addEventListener("click", function(){
    if(this.classList.contains("roadmap-scale")){
      this.classList.remove("roadmap-scale")
      this.children[1].classList.remove("roadmap-select-show")
      roadmapOverlay.classList.remove("selected-overlay")
      return
    }
    removeScaleClass()
    addScaleClass(roadmapImgs[i])
  })
}


function removeScaleClass(){
  for(let i = 0; i < roadmapImgs.length; i++){
    roadmapImgs[i].classList.remove("roadmap-scale")
    roadmapImgs[i].children[1].classList.remove("roadmap-select-show")
  }
}

function addScaleClass(element){
  element.classList.add("roadmap-scale")
  element.children[1].classList.add("roadmap-select-show")
  roadmapOverlay.classList.add("selected-overlay")
}

/* Roadmap Animations */

roadmapOverlay.addEventListener("click", function(){
  this.classList.remove("selected-overlay")
  removeScaleClass()
})

/* document.querySelectorAll(".roadmap-checkbox").forEach(function(checkbox){
  checkbox.addEventListener("click", function(){
    if(checkbox.checked){
      checkbox.parentElement.parentElement.style.color = "#bbf01e"
      checkbox.nextElementSibling.style.border = "1px solid #BBF01E"
    }else{
      checkbox.parentElement.parentElement.style.color = "#BBBDB7"
      checkbox.nextElementSibling.style.border = "1px solid #BBBDB7"
    }
     
  })
}) */

var x;
var $cards = $(".card");
var $style = $(".hover");

$cards
  .on("mousemove touchmove", function(e) { 
    // normalise touch/mouse
    var pos = [e.offsetX,e.offsetY];
    e.preventDefault();
    if ( e.type === "touchmove" ) {
      pos = [ e.touches[0].clientX, e.touches[0].clientY ];
    }
    var $card = $(this);
    // math for mouse position
    var l = pos[0];
    var t = pos[1];
    var h = $card.height();
    var w = $card.width();
    var px = Math.abs(Math.floor(100 / w * l)-100);
    var py = Math.abs(Math.floor(100 / h * t)-100);
    var pa = (50-px)+(50-py);
    // math for gradient / background positions
    var lp = (50+(px - 50)/1.5);
    var tp = (50+(py - 50)/1.5);
    var px_spark = (50+(px - 50)/7);
    var py_spark = (50+(py - 50)/7);
    var p_opc = 20+(Math.abs(pa)*1.5);
    var ty = ((tp - 50)/2) * -1;
    var tx = ((lp - 50)/1.5) * .5;
    // css to apply for active card
    var grad_pos = `background-position: ${lp}% ${tp}%;`
    var sprk_pos = `background-position: ${px_spark}% ${py_spark}%;`
    var opc = `opacity: ${p_opc/100};`
    var tf = `transform: rotateX(${ty}deg) rotateY(${tx}deg)`
    // need to use a <style> tag for psuedo elements
    var style = `
      .card:hover:before { ${grad_pos} }  /* gradient */
      .card:hover:after { ${sprk_pos} ${opc} }   /* sparkles */ 
    `
    // set / apply css class and style
    $cards.removeClass("active");
    $card.removeClass("animated");
    $card.attr( "style", tf );
    $style.html(style);
    if ( e.type === "touchmove" ) {
      return false; 
    }
    clearTimeout(x);
  }).on("mouseout touchend touchcancel", function() {
    // remove css, apply custom animation on end
    var $card = $(this);
    $style.html("");
    $card.removeAttr("style");
    x = setTimeout(function() {
      $card.addClass("animated");
    },2500);
  });


  /* Team carousel script */
  let pagCount = 0
  let teamLeftArrow = document.getElementById("team-left-arrow")
  let teamRightArrow = document.getElementById("team-right-arrow")

  let pagTrackInput = document.querySelectorAll(".slider-control");
  let checkedInput = pagTrackInput[0]
  let sliderControlBtn = document.querySelectorAll(".team-pag-mid");
  let activeControlBtn = sliderControlBtn[0]
  for(i = 0; i < pagTrackInput.length; i++){
    if(pagTrackInput[i].checked){
      sliderControlBtn[i].classList.add("team-pag-active")
    }
  }
  sliderControlBtn.forEach(function(element, i){
    element.addEventListener("click", function(){
      checkedInput.checked = false
      pagTrackInput[i].checked = true
      checkedInput = pagTrackInput[i]
      pagCount = i
      activeControlBtn.classList.remove("team-pag-active")
      activeControlBtn = element
      element.classList.add("team-pag-active")
    })
  })

teamLeftArrow.addEventListener("click", function(){
  if (pagCount === 0){
    return
  }
  pagCount--
  if(pagCount === 0){
    this.style.backgroundColor = "#212121"
    
    teamRightArrow.style.backgroundColor = "#fff"
    
  } else {
    this.style.backgroundColor = "#fff"
    teamRightArrow.style.backgroundColor = "#fff"
    
  }
  checkedInput.checked = false
  pagTrackInput[pagCount].checked = true
  checkedInput = pagTrackInput[pagCount]
  activeControlBtn.classList.remove("team-pag-active")
  activeControlBtn = sliderControlBtn[pagCount]
  sliderControlBtn[pagCount].classList.add("team-pag-active")
})
teamRightArrow.addEventListener("click", function(){
  if (pagCount === 4){
    return
  }
  pagCount++
  if(pagCount === 4){
    this.style.backgroundColor = "#212121"
    
    
  } else {
    console.log(this)
    this.style.backgroundColor = "#fff"
    
    teamLeftArrow.style.background = "#fff"
    
  }
  checkedInput.checked = false
  pagTrackInput[pagCount].checked = true
  checkedInput = pagTrackInput[pagCount]
  activeControlBtn.classList.remove("team-pag-active")
  activeControlBtn = sliderControlBtn[pagCount]
  sliderControlBtn[pagCount].classList.add("team-pag-active")
})


/* Project Animations */
/* get transform value https://stackoverflow.com/questions/65152501/how-to-get-translatex-value-of-a-component-with-javascript */

let projectImg1 = document.getElementById("project-img-1")
let projectImg2 = document.getElementById("project-img-2")
let projectImg3 = document.getElementById("project-img-3")
let projectImg4 = document.getElementById("project-img-4")
let projectDescription = document.getElementById("project__description")

let dotted = document.querySelectorAll(".dotted")


/* set current clicked element desc center img to reset styling */
let projectImgClicked = projectImg2.children[0]
projectImgClicked.style.opacity = 1

dottedClicked = dotted[0]

function getTransformX(element){
  const transformValue = window.getComputedStyle(element).transform;
  const w = window.getComputedStyle(element).width;
  var matrix = new WebKitCSSMatrix(transformValue);
  /* console.log(w);
  console.log(matrix.m41); */
  /* console.log(matrix.m41/parseInt(w)*100+"%"); */
  return matrix.m41/parseInt(w)*100
}

/* left 50%, middle 100%, right 150% */
/* left -50%, middle 0%, right 50% */
/* left -150%, middle -100%, right -50% */
/* left -250%, middle -200%, right -150% */

projectImg1.addEventListener("click", function(){
  switch1()
})

function switch1(){
  let transformValue = getTransformX(projectImg1)
  /* if middle */
  /* if(transformValue === 100){
    return
  } */
  projectImgClicked.style.opacity = 0
  projectImgClicked = projectImg1.children[0]
  projectImgClicked.style.opacity = 1

  projectImg1.style.transform = "translateX(100%)"
  projectImg1.style.height = "710px"
  projectImg1.style.zIndex = 1

  /* other elements */
  /* img2 move right */
  projectImg2.style.transform = "translateX(50%)"
  projectImg2.style.height = "677px"
  projectImg2.style.zIndex = 0

  /* img3 move middle */
  projectImg3.style.transform="translateX(-100%)"
  projectImg3.style.height = "677px"
  projectImg3.style.zIndex = 0

  /* img4 move left */
  projectImg4.style.transform="translateX(-250%)"
  projectImg4.style.height = "677px"
  projectImg4.style.zIndex = 0
  
  projecth3.style.opacity = 0
  projecth3.innerHTML = "WAKASPACE <br> GAMES"
  projecth3.style.opacity =1

  projectDescription.style.opacity = 0
  projectDescription.innerHTML = '<p class = "project_description animate__animated animate__fadeIn animate__slower">Wakaspace is a game where you may earn money by playing. The user gains entry to the game, creates his NFT avatar, and then battles other players using the wakaspace space token. The winning user is paid a charge less a service commission. Users can use the token to develop his character in the future. Buying NFTs or items from the in-game store or the marketplace. The easiest method for incorporating early users into the ecosystem, in our opinion, is the Play-to-Earn game, which allows you to analyze the benefits of tokens, their capabilities, and the degree of product integration.</p>'
  projectDescription.style.opacity = 1
  dottedClicked.classList.remove("str")
  dottedClicked = dotted[3]
  dottedClicked.classList.add("str")
}

projectImg2.addEventListener("click", function(){
  switch2()
})

function switch2(){
  let transformValue = getTransformX(projectImg2)

  /* if middle */
 /*  if(transformValue === 0){
    return
  }  */

  projectImgClicked.style.opacity = 0
  projectImgClicked = projectImg2.children[0]
  projectImgClicked.style.opacity = 1

  projectImg2.style.transform = "translateX(0%)"
  projectImg2.style.height = "710px"
  projectImg2.style.zIndex = 1

  /* other elements */
  projectImg1.style.transform = "translateX(50%)"
  projectImg1.style.height = "677px"
  projectImg1.style.zIndex = 0

  projectImg3.style.transform = "translateX(-50%)"
  projectImg3.style.height = "677px"
  projectImg3.style.zIndex = 0

  projectImg4.style.transform = "translateX(-200%)"
  projectImg4.style.height = "677px"
  projectImg4.style.zIndex = 0

  projecth3.style.opacity = 0
  projecth3.innerHTML = "WAKASPACE <br> NFT <br> MARKETPLACE"
  projecth3.style.opacity = 1

  projectDescription.style.opacity = 0
  projectDescription.innerHTML = '<p class = "project_description animate__animated animate__fadeIn animate__slower">Wakaspace NFTs and NFTs Pass for playing WKS GAME are available for purchase on the marketplace. There will be NFTs offerings from the system created by artists from our team and previously obtained by NFT users.</p'
  projectDescription.style.opacity = 1

  dottedClicked.classList.remove("str")
  dottedClicked = dotted[0]
  dottedClicked.classList.add("str")
}

projectImg3.addEventListener("click", function(){
  switch3()
})

function switch3(){
  let transformValue = getTransformX(projectImg3)

  /* if middle */
  /* if(transformValue === -100){
    return
  } */

  projectImgClicked.style.opacity = 0
  projectImgClicked = projectImg3.children[0]
  projectImgClicked.style.opacity = 1

  projectImg3.style.transform = "translateX(-100%)"
  projectImg3.style.height = "710px"
  projectImg3.style.zIndex =1

  projectImg1.style.transform ="translateX(100%)"
  projectImg1.style.height = "677px"
  projectImg1.zIndex = 0
  
  projectImg2.style.transform = "translateX(-50%)"
  projectImg2.style.height = "677px"
  projectImg2.style.zIndex = 0

  projectImg4.style.transform = "translateX(-150%)"
  projectImg4.style.height = "677px"
  projectImg4.style.zIndex = 0
  
  projecth3.style.opacity = 0
  projecth3.innerHTML = "WAKASPACE <br> SCHOLARSHIP <br> PROGRAM"
  projecth3.style.opacity = 1

  projectDescription.style.opacity = 0
  projectDescription.innerHTML = '<p class = "project_description animate__animated animate__fadeIn animate__slower">Scholarship programs enable gamers with no funds to participate in Wakaspace gaming by connecting with investors and earnings will be shared according to the agreement between the investor and the gamer. Read more…</p>'
  projectDescription.style.opacity = 1
  dottedClicked.classList.remove("str")
  dottedClicked = dotted[1]
  dottedClicked.classList.add("str")
}

projectImg4.addEventListener("click", function(){
  switch4()
})
function switch4() {
  let transformValue = getTransformX(projectImg4)

  /* if middle */
  /* if(transformValue === -200){
    return
  } */

  projectImgClicked.style.opacity = 0
  projectImgClicked = projectImg4.children[0]
  projectImgClicked.style.opacity = 1

  projectImg4.style.transform = "translateX(-200%)"
  projectImg4.style.height = "710px"
  projectImg4.style.zIndex =1

  projectImg1.style.transform ="translateX(150%)"
  projectImg1.style.height = "677px"
  projectImg1.zIndex = 0
  
  projectImg2.style.transform = "translateX(0%)"
  projectImg2.style.height = "677px"
  projectImg2.style.zIndex = 0

  projectImg3.style.transform = "translateX(-150%)"
  projectImg3.style.height = "677px"
  projectImg3.style.zIndex = 0
  
  projecth3.style.opacity = 0
  projecth3.innerHTML = "WAKASPACE <br> Messanger"
  projecth3.style.opacity = 1

  projectDescription.style.opacity = 0
  projectDescription.innerHTML = '<p class = "project_description animate__animated animate__fadeIn animate__slower">The Wakaspace project blockchain will be used to construct a safe open-source decentralized messenger. The messenger\'s concept is that it will belong to all users for the purpose of storing data in a distributed registry, making it difficult for a single entity to manage, censor, or stop it. The messenger will grant you permission to: <br> Text messages features. <br> Directly trade WKS with other users.</p>'
  projectDescription.style.opacity = 1
  dottedClicked.classList.remove("str")
  dottedClicked = dotted[2]
  dottedClicked.classList.add("str")
}

dotted.forEach((dot, index) =>{
  dot.addEventListener('click', ()=>{
    if(index === 0){
      switch2()
    }
    if(index === 1){
      switch3()
    }
    if(index === 2){
      switch4()
    }
    if(index === 3){
      switch1()
    }
  })
})

/* Tokenomics Rings Animations */

let rings = document.querySelectorAll(".ring")
/* let compass = document.getElementById("compass") */
/* let compassList = document.querySelectorAll(".compass") */
let ringsArr = Array.from(document.querySelectorAll(".ring"))
let assetDesc = document.querySelectorAll(".tokenomics-asset")
let ringSelected = rings[0];
/* let compassSelected = compassList[0] */
let assetDescSelected = assetDesc[0]
let selectedIndex;

rings.forEach(function(ring){
  ring.addEventListener("click", function(){
    ringSelected.children[1].classList.remove("ring-clicked")
    ringSelected = this
    ringSelected.children[1].classList.add("ring-clicked")
    selectedIndex = ringsArr.indexOf(this)
    assetDescSelected.style.opacity = 0
    assetDescSelected = assetDesc[selectedIndex]
    assetDesc[selectedIndex].style.opacity = 1
    /* if(ringsArr.indexOf(this) === 0){
      compass.setAttribute("class", "compass compass-top")
      
      return
    }else
    if(ringsArr.indexOf(this) === 1){
      compass.setAttribute("class", "compass compass-top-right")
      
    }else
    if(ringsArr.indexOf(this) ===2){
      compass.setAttribute("class", "compass compass-bottom-right")
      
    }else
    if(ringsArr.indexOf(this) === 3){
      compass.setAttribute("class", "compass compass-bottom")
      
    }else
    if(ringsArr.indexOf(this) === 4){
      compass.setAttribute("class", "compass compass-bottom-left")
 
    }
    if(ringsArr.indexOf(this) === 5){
      compass.setAttribute("class", "compass compass-top-left")
    } */
  })
})

/* $( function() {
  $( ".glitch-img" ).mgGlitch({
        // set 'true' to stop the plugin
        destroy : false, 
        // set 'false' to stop glitching
        glitch: true, 
        // set 'false' to stop scaling
        scale: true, 
        // set 'false' to stop glitch blending
        blend : true, 
        // select blend mode type
        blendModeType : 'hue',
        // set min time for glitch 1 elem
        glitch1TimeMin : 200, 
        // set max time for glitch 1 elem
        glitch1TimeMax : 400,
        // set min time for glitch 2 elem
        glitch2TimeMin : 10, 
        // set max time for glitch 2 elem
        glitch2TimeMax : 100, 
  });
}); */

/* $( function() {
  $( ".glitch-img" ).mgGlitch({
        destroy : false, 
        glitch: trueASD, 
        scale: true, 
        blend : true, 
        blendModeType : 'hue',
        glitch1TimeMin : 200, 
        glitch1TimeMax : 400, 
        glitch2TimeMin : 10, 
        glitch2TimeMax : 100, 
  });
}); */

/* function start() {
  $(".glitch-img").mgGlitch({
    destroy : false, 
    // set 'false' to stop glitching
    glitch: true, 
    // set 'false' to stop scaling
    scale: true, 
    // set 'false' to stop glitch blending
    blend : true, 
    // select blend mode type
    blendModeType : 'hue',
    // set min time for glitch 1 elem
    glitch1TimeMin : 200, 
    // set max time for glitch 1 elem
    glitch1TimeMax : 400,
    // set min time for glitch 2 elem
    glitch2TimeMin : 10, 
    // set max time for glitch 2 elem
    glitch2TimeMax : 100,
  });
} */

/* function stop() {
  $(".glitch-img").mgGlitch({
    destroy: true
  });
} */
/* const glitchImg = document.getElementById('collection-hero-img')
glitchImg.addEventListener('mouseover', ()=>{
  console.log(glitchImg.classList)
  glitchImg.classList.add('glitch-img')
})
glitchImg.addEventListener('mouseout', ()=>{
  console.log(glitchImg.classList)
  glitchImg.classList.remove('glitch-img')
}) */
/* $(".glitch-img").hover(
  function() {
    start();
  },

); */


/* Investors */

/* let asia = document.getElementById("asia")
let gajah = document.getElementById("gajah")
let twoMonk = document.getElementById("two-monk")
let decentra = document.getElementById("decentra")
let gajah2 = document.getElementById("gajah2")
let c = document.getElementById("c")
let whey = document.getElementById("whey") */

// asia.addEventListener("mouseover", ()=>{
//   asia.setAttribute("src", "./assets/imgs/asia token.png")
//   asia.classList.add("img-bigger")
//   asia.style.top = "25px"
//   /* gajah.style.left = "25px" */
//   asia.style.width = "270px"
// })
/* asia.addEventListener("mouseout", ()=>{
  asia.setAttribute("src", "./assets/imgs/inv1.png")
  asia.classList.remove("img-bigger")
  asia.style.width = "257px"
}) */

/* gajah.addEventListener("mouseover", ()=>{
  gajah.setAttribute("src", "./assets/imgs/gajah crypto.png")
  gajah.classList.add("img-bigger")
  gajah.style.top = "-65px"
  gajah.style.left = "25px"
  gajah.style.width = "270px"
}) */

/* gajah.addEventListener("mouseout", ()=>{
  gajah.setAttribute("src", "./assets/imgs/inv2.png")
  gajah.classList.remove("img-bigger")
  gajah.style.width = "315px"
}) */
// twoMonk.addEventListener("mouseover", ()=>{
//   twoMonk.setAttribute("src", "./assets/imgs/two monkey.png")
//   twoMonk.classList.add("img-bigger")
//   twoMonk.style.top = "-65px"
//   twoMonk.style.left = "25px"
//   twoMonk.style.width = "270px"
// })

/* twoMonk.addEventListener("mouseout", ()=>{
  twoMonk.setAttribute("src", "./assets/imgs/inv3.png")
  twoMonk.classList.remove("img-bigger")
  twoMonk.style.width = "349px"
}) */
