'use strict';

/* ========== Product-img Object Contstructor ========== */

function ProductImg(productName, filePath, numberTimesShown, numberTimesClicked, htmlId){
  this.productName = productName;
  this.filePath = filePath;
  this.numberTimesShown = numberTimesShown;
  this.numberTimesClicked = numberTimesClicked;
  this.htmlId = htmlId;
}

/* ========== Create Product-img Objects ========== */

var productBag = new ProductImg('R2D2 Rolling Suitcase', 'img/bag.jpg', 0, 0, 'bag');
var productBanana = new ProductImg('Banana Slicer', 'img/banana.jpg', 0, 0, 'banana');
var productBathroom = new ProductImg('Bathroom iPad Holder', 'img/bathroom.jpg', 0, 0, 'bathroom');
var productBoots = new ProductImg('Toe-less Boots', 'img/boots.jpg', 0, 0, 'boots');
var productBreakfast = new ProductImg('All-in-One Breakfast Station', 'img/breakfast.jpg', 0, 0, 'breakfast');
var productBubbleGum = new ProductImg('Italian Meatball Bubblegum', 'img/bubblegum.jpg', 0, 0, 'bubblegum');
var productChair = new ProductImg('Humpback Chair', 'img/chair.jpg', 0, 0, 'chair');
var productCthulu = new ProductImg('Cthulu Figure', 'img/cthulu.jpg', 0, 0, 'cthulu');
var productDogDuck = new ProductImg('Duck Mask for Dogs', 'img/duck-dog.jpg', 0, 0, 'duck-dog');
var productDragon = new ProductImg('Dragon Meat', 'img/dragon.jpg', 0, 0, 'dragon');
var productPen = new ProductImg('Pen Cap Flatware', 'img/pen.jpg', 0, 0, 'pen');
var productPetSweep = new ProductImg('Pet Sweep', 'img/pet-sweep.jpg', 0, 0, 'pet-sweep');
var productScissors = new ProductImg('Pizza Scissors', 'img/scissors.jpg', 0, 0, 'scissors');
var productShark = new ProductImg('Shark Sleeping Bag', 'img/shark.jpg', 0, 0, 'shark');
var productPetSweep = new ProductImg('Baby Sweepwer Onesie', 'img/sweep.jpg', 0, 0, 'sweep');
var productTauntaun = new ProductImg('Tauntaun Sleeping Bag', 'img/tauntaun.jpg', 0, 0, 'tauntaun');
var productUnicorn = new ProductImg('Unicorn Meat', 'img/unicorn.jpg', 0, 0, 'unicorn');
var productUSB = new ProductImg('Tentacle USB Flash Drive', 'img/usb.jpg', 0, 0, 'usb');
var productWaterCan = new ProductImg('Reversed Watering Can', 'img/water-can.jpg', 0, 0, 'water-can');
var productWineGlass = new ProductImg('Novelty Wine Glass', 'img/wine-glass.jpg', 0, 0, 'wine-glass');

/* ========== Random Product-img Selector ========== */



var productImgs = [];

/* ========== Render Random Product-img ========== */

/* ========== Click Receiver ========== */

/* ========== Click Tracker ========== */

/* ========== Product-img Display Tracker ========== */

/* ========== Event Listener ========== */

/* ========== Render List of Products with Votes Received ========== */
