'use strict';

// ===== Global variables =====

var state = {

  currentProductsDisplayed: [],
  totalClicks: 0,
  randomNumber: '',
  prevRandomNumber: '',
  firstRandomNumber: '',
};

// ===== Product-img Object Contstructor =====

function Product(name, imgName, htmlId){
  this.name = name;
  this.imgName= imgName;
  this.numberTimesShown = 0;
  this.numberTimesClicked = 0;
  this.htmlId = htmlId;
  this.previouslyDisplayed = 99;
}

// ===== Create Product-img Objects =====

var products = [
  new Product('R2D2 Rolling Suitcase', 'bag.jpg', 'bag'),
  new Product('Banana Slicer', 'banana.jpg', 'banana'),
  new Product('Bathroom iPad Holder', 'bathroom.jpg', 'bathroom'),
  new Product('Toe-less Boots', 'boots.jpg', 'boots'),
  new Product('All-in-One Breakfast Station', 'breakfast.jpg', 'breakfast'),
  new Product('Italian Meatball Bubblegum', 'bubblegum.jpg', 'bubblegum'),
  new Product('Humpback Chair', 'chair.jpg', 'chair'),
  new Product('Cthulu Figure', 'cthulhu.jpg', 'cthulu'),
  new Product('Duck Mask for Dogs', 'dog-duck.jpg', 'dog-duck'),
  new Product('Dragon Meat', 'dragon.jpg', 'dragon'),
  new Product('Pen Cap Flatware', 'pen.jpg', 'pen'),
  new Product('Pet Sweep', 'pet-sweep.jpg', 'pet-sweep'),
  new Product('Pizza Scissors', 'scissors.jpg', 'scissors'),
  new Product('Shark Sleeping Bag', 'shark.jpg', 'shark'),
  new Product('Baby Sweepwer Onesie', 'sweep.png', 'sweep'),
  new Product('Tauntaun Sleeping Bag', 'tauntaun.jpg', 'tauntaun'),
  new Product('Unicorn Meat', 'unicorn.jpg', 'unicorn'),
  new Product('Tentacle USB Flash Drive', 'usb.gif', 'usb'),
  new Product('Reversed Watering Can', 'water-can.jpg', 'water-can'),
  new Product('Novelty Wine Glass', 'wine-glass.jpg', 'wine-glass'),];

//===== Pull Data from Local Storage =====

function pullFromLocalStorage() {

  try {
    if (localStorage.productsArray){
      products = JSON.parse(localStorage.productsArray);
    }
  } catch (error) {
    console.log('JSON error with pullFromLocalStorage');
  }
}

pullFromLocalStorage();

// ===== Random Product-img Chooser =====

function randomProductChooser(){

  for(var i = 0; i < 3; i++){
    state.randomNumber = Math.floor (Math.random() * (products.length));
    console.log('totaleclicks minus 1', state.totalClicks-1);
    console.log('previously Displayed', products[state.randomNumber].previouslyDisplayed);
    if(state.randomNumber === state.prevRandomNumber || state.randomNumber === state.firstRandomNumber || state.totalClicks-1 ===     products[state.randomNumber].previouslyDisplayed) {
      i--;
    } else {
      state.currentProductsDisplayed[i] = products[state.randomNumber];
      products[state.randomNumber].numberTimesShown++;
      products[state.randomNumber].previouslyDisplayed = state.totalClicks;
      state.firstRandomNumber = state.prevRandomNumber;
      state.prevRandomNumber = state.randomNumber;
    }
  }
}

randomProductChooser();

// ===== Render Random Product-img =====

function productImageRender(){
  for(var i = 0; i < 3; i++){
    var newImg = document.createElement('img');
    newImg.setAttribute('src', 'img/'+state.currentProductsDisplayed[i].imgName);
    newImg.setAttribute('class', 'product-img');
    document.getElementById('img'+i).appendChild(newImg);
  }
}
productImageRender();

// ===== Img0 Click Event Handler =====

function handleImg0Click(e) {
  e.preventDefault;

  state.currentProductsDisplayed[0].numberTimesClicked++;

  state.totalClicks++;

  if(state.totalClicks === 25){
    try {
      if (localStorage.productsArray){
        localStorage.productsArray = JSON.stringify(products);
        // localStorage.globalVariables = JSON.stringify(state);
      }
    } catch (error) {
      console.log('JSON error with pullFromLocalStorage');
    }

    img0.removeEventListener('click', handleImg0Click);
    img1.removeEventListener('click', handleImg1Click);
    img2.removeEventListener('click', handleImg2Click);

    displayResults();

  }else {
    for(var i = 0; i < 3; i++){
      var removeImage = document.getElementById('img'+i);
      while(removeImage.firstChild){
        removeImage.removeChild(removeImage.firstChild);
      }
    }

    randomProductChooser();
    productImageRender();
  }
}

// ===== Img1 Click Event Handler =====

function handleImg1Click(e) {
  e.preventDefault;

  state.currentProductsDisplayed[1].numberTimesClicked++;

  state.totalClicks++;

  if(state.totalClicks === 25){
    try {
      if (localStorage.productsArray){
        localStorage.productsArray = JSON.stringify(products);
        localStorage.globalVariables = JSON.stringify(state);
      }
    } catch (error) {
      console.log('JSON error with pullFromLocalStorage');
    }

    img0.removeEventListener('click', handleImg0Click);
    img1.removeEventListener('click', handleImg1Click);
    img2.removeEventListener('click', handleImg2Click);

    displayResults();

  }else {
    for(var i = 0; i < 3; i++){
      var removeImage = document.getElementById('img'+i);
      while(removeImage.firstChild){
        removeImage.removeChild(removeImage.firstChild);
      }
    }

    randomProductChooser();
    productImageRender();
  }
}

// ===== Img2 Click Event Handler =====

function handleImg2Click(e) {
  e.preventDefault;

  state.currentProductsDisplayed[2].numberTimesClicked++;

  state.totalClicks++;

  if(state.totalClicks === 25){
    try {
      if (localStorage.productsArray){
        localStorage.productsArray = JSON.stringify(products);
        localStorage.globalVariables = JSON.stringify(state);
      }
    } catch (error) {
      console.log('JSON error with pullFromLocalStorage');
    }

    img0.removeEventListener('click', handleImg0Click);
    img1.removeEventListener('click', handleImg1Click);
    img2.removeEventListener('click', handleImg2Click);

    displayResults();

  }else {
    for(var i = 0; i < 3; i++){
      var removeImage = document.getElementById('img'+i);
      while(removeImage.firstChild){
        removeImage.removeChild(removeImage.firstChild);
      }
    }

    randomProductChooser();
    productImageRender();
  }
}

// ===== Event Listener =====

var img0 = document.getElementById('img0');
img0.addEventListener('click', handleImg0Click);

var img1 = document.getElementById('img1');
img1.addEventListener('click', handleImg1Click);

var img2 = document.getElementById('img2');
img2.addEventListener('click', handleImg2Click);


// ===== Bar Chart of Results: Votes Received =====

function displayResults() {
  //create canvas element
  var newEl = document.createElement('canvas');
  newEl.id = 'resultsChart';
  var position = document.getElementById('app');
  position.appendChild(newEl);

  var ctx = document.getElementById('resultsChart').getContext('2d');

  //create array of productNames from product[i].names for use in chart labels.
  var productNames = [];

  function productsToProductNames() {
    for(var i = 0; i < products.length; i++){
      productNames.push(products[i].name);
    }
  }

  productsToProductNames();

  //create array of productVotes from product[i].numberTimesClicked for use in chart data.
  var productVotes = [];

  function productsToProductVotes() {
    for(var i = 0; i < products.length; i++){
      productVotes.push(products[i].numberTimesClicked);
    }
  }

  productsToProductVotes();


  //create array of productShows from product[i].numberTimesShown for use in chart data.
  var productClickPercentage = [];

  function productsToProductClickPercentage() {
    for(var i = 0; i < products.length; i++){
      productClickPercentage.push(Math.round((products[i].numberTimesClicked/products[i].numberTimesShown) * 100));
    }
  }

  productsToProductClickPercentage();

  //create chart.
  var resultsChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
      labels: productNames,
      datasets: [
        {
          label: '# of Votes',
          data: productVotes,
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
        },
        {
          label: '% of Votes per Times Shown',
          data: productClickPercentage,
          backgroundColor: '#000000',
          borderColor: [
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            fixedStepSize: 1,
            stepSize: 1,
            beginAtZero:true
          }
        }]
      }
    }
  });
}
