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

function productImageRender(){
  for(var i = 0; i < 3; i++){
    var newImg = document.createElement('img');
    newImg.setAttribute('src', 'img/'+currentProductsDisplayed[i].imgName);
    newImg.setAttribute('class', 'product-img');
    document.getElementById('img'+i).appendChild(newImg);
  }
}
productImageRender();

/* ========== Img0 Click Event Handler ========== */

function handleImg0Click(e) {
  e.preventDefault;

  currentProductsDisplayed[0].numberTimesClicked++;

  totalClicks++;
  console.log('totalClicks is ' + totalClicks);

  if(totalClicks === 25){
    img0.removeEventListener('click', handleImg0Click);
    img1.removeEventListener('click', handleImg1Click);
    img2.removeEventListener('click', handleImg2Click);
    displayResults();
  }else if(threeCycle === 3){
    for(var j = 0; j < products.length; j++){
      products[j].previouslyDisplayed = false;
    }
    threeCycle = 1;
  }else{
    threeCycle++;
  }

  for(var i = 0; i < 3; i++){
    var removeImage = document.getElementById('img'+i);
    while(removeImage.firstChild){
      removeImage.removeChild(removeImage.firstChild);
    }
  }

  randomProductChooser();
  productImageRender();
}

/* ========== Img1 Click Event Handler ========== */

function handleImg1Click(e) {
  e.preventDefault;

  currentProductsDisplayed[1].numberTimesClicked++;

  totalClicks++;
  console.log('totalClicks is ' + totalClicks);

  if(totalClicks === 25){
    img0.removeEventListener('click', handleImg0Click);
    img1.removeEventListener('click', handleImg1Click);
    img2.removeEventListener('click', handleImg2Click);
    displayResults();
  }else if(threeCycle === 3){
    for(var j = 0; j < products.length; j++){
      products[j].previouslyDisplayed = false;
    }
    threeCycle = 1;
  }else{
    threeCycle++;
  }

  for(var i = 0; i < 3; i++){
    var removeImage = document.getElementById('img'+i);
    while(removeImage.firstChild){
      removeImage.removeChild(removeImage.firstChild);
    }
  }

  randomProductChooser();
  productImageRender();
}

/* ========== Img2 Click Event Handler ========== */

function handleImg2Click(e) {
  e.preventDefault;

  currentProductsDisplayed[2].numberTimesClicked++;

  totalClicks++;
  console.log('totalClicks is ' + totalClicks);

  if(totalClicks === 25){
    img0.removeEventListener('click', handleImg0Click);
    img1.removeEventListener('click', handleImg1Click);
    img2.removeEventListener('click', handleImg2Click);
    displayResults();
  }else if(threeCycle === 3){
    for(var j = 0; j < products.length; j++){
      products[j].previouslyDisplayed = false;
    }
    threeCycle = 1;
  }else{
    threeCycle++;
  }

  for(var i = 0; i < 3; i++){
    var removeImage = document.getElementById('img'+i);
    while(removeImage.firstChild){
      removeImage.removeChild(removeImage.firstChild);
    }
  }

  randomProductChooser();
  productImageRender();
}

/* ========== Event Listener ========== */

var img0 = document.getElementById('img0');
img0.addEventListener('click', handleImg0Click);

var img1 = document.getElementById('img1');
img1.addEventListener('click', handleImg1Click);

var img2 = document.getElementById('img2');
img2.addEventListener('click', handleImg2Click);


/* ========== Render List of Products with Votes Received ========== */
//function displayResults() {
//  console.log('nothing to see here');

//   for(var i = 0; i < products.length; i++){
//     var newEl = document.createElement('h2');
//     newEl.id = products[i] + 'header';
//     var newText = document.createTextNode(products[i].name);
//     newEl.appendChild(newText);
//     var position = document.getElementById('tableWrap');
//     position.appendChild(newEl);
//
//     newEl = document.createElement('p');
//     newEl.id = products[i] + 'text';
//     newText = document.createTextNode('Shown ' + products[i].numberTimesShown + ' times. ');
//     newEl.appendChild(newText);
//     newText = document.createTextNode('Clicked ' + products[i].numberTimesClicked + ' times. ');
//     newEl.appendChild(newText);
//     var percentageClicked = Math.round((products[i].numberTimesClicked / products[i].numberTimesShown) * 100);
//     newText = document.createTextNode('Clicked ' + percentageClicked + ' percent of the time');
//     newEl.appendChild(newText);
//     position = document.getElementById('tableWrap');
//     position.appendChild(newEl);
//   }
//}
// ========== Bar Chart of Results ==========

function displayResults() {
  var newEl = document.createElement('canvas');
  newEl.id = 'resultsChart';
  var position = document.getElementById('app');
  position.appendChild(newEl);

  var ctx = document.getElementById('resultsChart').getContext('2d');

  // var productNames = [];
  //
  // function productsToProductNames() {
  //   for(var i = 0; i < products.length; i++){
  //     productNames.push(products[i].name);
  //   }
  // }
  //
  // productsToProductNames();

  var resultsChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
      labels: [products[0].name, products[1].name, products[2].name, products[3].name, products[4].name, products[5].name, products[6].name, products[7].name, products[8].name, products[9].name, products[10].name, products[11].name, products[12].name, products[13].name, products[14].name, products[15].name, products[16].name, products[17].name, products[18].name, products[19].name],
      datasets: [{
        label: '# of Votes',
        data: [products[0].numberTimesClicked, products[1].numberTimesClicked, products[2].numberTimesClicked, products[3].numberTimesClicked, products[4].numberTimesClicked, products[5].numberTimesClicked, products[6].numberTimesClicked, products[7].numberTimesClicked, products[8].numberTimesClicked, products[9].numberTimesClicked, products[10].numberTimesClicked, products[11].numberTimesClicked, products[12].numberTimesClicked, products[13].numberTimesClicked, products[14].numberTimesClicked, products[15].numberTimesClicked, products[16].numberTimesClicked, products[17].numberTimesClicked, products[18].numberTimesClicked, products[19].numberTimesClicked],
        backgroundColor: [
          '#183A2B',
          '#1E4835',
          '#235740',
          '#29654A',
          '#2F7455',
          '#358260',
          '#3B916A',
          '#419F75',
          '#47AE80',
          '#51B88A',
          '#4F57F8',
          '#3B45F7',
          '#0A15EB',
          '#0812C4',
          '#070E9D',
          '#050B76',
          '#040962',
          '#03074E',
          '#02053B',
          '#010214',
        ],
        borderColor: [
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });
}
