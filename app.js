'use strict';

/* ========== Global variables ========== */

var products = [];
var currentProductsDisplayed = [];
var randomNumber;
var prevRandomNumber;
var firstRandomNumber;
var totalClicks = 0;
var threeCycle = 1;

/* ========== Product-img Object Contstructor ========== */

function Product(name, imgName, htmlId){
  this.name = name;
  this.imgName= imgName;
  this.numberTimesShown = 0;
  this.numberTimesClicked = 0;
  this.htmlId = htmlId;
  this.previouslyDisplayed = false;
}


/* ========== Create Product-img Objects ========== */

products[0] = new Product('R2D2 Rolling Suitcase', 'bag.jpg', 'bag');
products[1] = new Product('Banana Slicer', 'banana.jpg', 'banana');
products[2] = new Product('Bathroom iPad Holder', 'bathroom.jpg', 'bathroom');
products[3] = new Product('Toe-less Boots', 'boots.jpg', 'boots');
products[4] = new Product('All-in-One Breakfast Station', 'breakfast.jpg', 'breakfast');
products[5] = new Product('Italian Meatball Bubblegum', 'bubblegum.jpg', 'bubblegum');
products[6] = new Product('Humpback Chair', 'chair.jpg', 'chair');
products[7] = new Product('Cthulu Figure', 'cthulhu.jpg', 'cthulu');
products[8] = new Product('Duck Mask for Dogs', 'dog-duck.jpg', 'dog-duck');
products[9] = new Product('Dragon Meat', 'dragon.jpg', 'dragon');
products[10] = new Product('Pen Cap Flatware', 'pen.jpg', 'pen');
products[11] = new Product('Pet Sweep', 'pet-sweep.jpg', 'pet-sweep');
products[12] = new Product('Pizza Scissors', 'scissors.jpg', 'scissors');
products[13] = new Product('Shark Sleeping Bag', 'shark.jpg', 'shark');
products[14] = new Product('Baby Sweepwer Onesie', 'sweep.png', 'sweep');
products[15] = new Product('Tauntaun Sleeping Bag', 'tauntaun.jpg', 'tauntaun');
products[16] = new Product('Unicorn Meat', 'unicorn.jpg', 'unicorn');
products[17] = new Product('Tentacle USB Flash Drive', 'usb.gif', 'usb');
products[18] = new Product('Reversed Watering Can', 'water-can.jpg', 'water-can');
products[19] = new Product('Novelty Wine Glass', 'wine-glass.jpg', 'wine-glass');



/* ========== Random Product-img Chooser ========== */

function randomProductChooser(){

  for(var i = 0; i < 3; i++){
    randomNumber = Math.floor (Math.random() * (products.length));
    console.log('randomNumber is ' + randomNumber, 'prevRandomNumber is ' + prevRandomNumber, 'firstRandomNumber is ' + firstRandomNumber);
    if(randomNumber != prevRandomNumber && randomNumber != firstRandomNumber && !products[randomNumber].previouslyDisplayed){
      currentProductsDisplayed[i] = products[randomNumber];
      products[randomNumber].numberTimesShown++;
      firstRandomNumber = prevRandomNumber;
      prevRandomNumber = randomNumber;
      products[randomNumber].previouslyDisplayed = true;
    } else {
      i--;
    }
  }
}

randomProductChooser();

/* ========== Render Random Product-img ========== */

/* create DOM manipulator to create elements and push the currentProductsDisplayed to the view.*/
/* create a loop to turn all products[].previouslyDisplayed to false*/

function productImageRender(){
  for(var i = 0; i < 3; i++){
    var newImg = document.createElement('img');
    newImg.setAttribute('src', 'img/'+currentProductsDisplayed[i].imgName);
    newImg.setAttribute('class', 'product-img');
    document.getElementById('img'+i).appendChild(newImg);
  }

  // randomNumber = false;
  // prevRandomNumber = false;
  // firstRandomNumber = false;
}

productImageRender();

/* ========== Click Event Handler ========== */

function handleImg0Click(e) {
  e.preventDefault;

  totalClicks++;
  console.log('totalClicks is ' + totalClicks);

  if(totalClicks === 25){
    console.log('displayResults();');
  }else if(threeCycle === 3){
    for(var j = 0; j < products.length; j++){
      products[j].previouslyDisplayed = false;
    }
    threeCycle = 1;
  }else{
    threeCycle++;
  }

  randomProductChooser();
  productImageRender();
}


/* ========== Event Listener ========== */

var img0 = document.getElementById('img0');
img0.addEventListener('click', handleImg0Click);



/* ========== Render List of Products with Votes Received ========== */
/* function displayResults();*/
