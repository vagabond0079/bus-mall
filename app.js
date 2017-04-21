'use strict';

// ===== Global variables =====

var state = {

  currentProductsDisplayed: [],
  totalClicks: 0,
  randomNumber: '',
  prevRandomNumber: '',
  firstRandomNumber: '',
};

var img0 = document.getElementById('img0');
var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');

//===== Main Function =====

function main() {
  pullFromLocalStorage();
  randomProductChooser();
  productImageRender();

  //  Event Listeners


  img0.addEventListener('click', handleImgClick);
  img1.addEventListener('click', handleImgClick);
  img2.addEventListener('click', handleImgClick);

}

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
  new Product('Baby Sweeper Onesie', 'sweep.png', 'sweep'),

  new Product('Tauntaun Sleeping Bag', 'tauntaun.jpg', 'tauntaun'),
  new Product('Unicorn Meat', 'unicorn.jpg', 'unicorn'),
  new Product('Tentacle USB Flash Drive', 'usb.gif', 'usb'),
  new Product('Reversed Watering Can', 'water-can.jpg', 'water-can'),
  new Product('Novelty Wine Glass', 'wine-glass.jpg', 'wine-glass'),
];

//===== Pull Data from Local Storage =====

function pullFromLocalStorage() {

  try {
    if (localStorage.products){
      products = JSON.parse(localStorage.products);
    }
  } catch (error) {
    console.log('JSON error with pullFromLocalStorage');
  }
}

// ===== Random Product-img Chooser =====

function randomProductChooser(){

  for(var i = 0; i < 3; i++){
    state.randomNumber = Math.floor (Math.random() * (products.length));
    if(state.randomNumber === state.prevRandomNumber || state.randomNumber === state.firstRandomNumber || state.totalClicks-1 === products[state.randomNumber].previouslyDisplayed) {
      i--;
    } else {
      state.currentProductsDisplayed[i] = products[state.randomNumber];
      state.currentProductsDisplayed[i].numberTimesShown++;
      state.currentProductsDisplayed[i].previouslyDisplayed = state.totalClicks;
      state.firstRandomNumber = state.prevRandomNumber;
      state.prevRandomNumber = state.randomNumber;
    }
  }
}

// ===== Render Random Product-img =====

function productImageRender(){
  for(var i = 0; i < 3; i++){
    var imgText = document.createElement('p');
    imgText.className = 'imgText';
    document.getElementById('img'+i).appendChild(imgText);
    var newText = document.createTextNode(state.currentProductsDisplayed[i].name);
    imgText.appendChild(newText);

    var newImg = document.createElement('img');
    newImg.setAttribute('src', 'img/'+state.currentProductsDisplayed[i].imgName);
    newImg.setAttribute('class', 'product-img');
    document.getElementById('img'+i).appendChild(newImg);
  }
}

// ===== Img Click Event Handler =====

function handleImgClick(e) {
  e.preventDefault;
  console.log(e);
  console.log(e.target);
  //
  if(e.currentTarget === img0){
    state.currentProductsDisplayed[0].numberTimesClicked++;
  } else if (e.currentTarget === img1){
    state.currentProductsDisplayed[1].numberTimesClicked++;
  } else {
    state.currentProductsDisplayed[2].numberTimesClicked++;
  }

  state.totalClicks++;

  if(state.totalClicks === 25){
    try {
      localStorage.products = JSON.stringify(products);
    } catch (error) {
      console.log('JSON error with handleImgClick');
    }

    img0.removeEventListener('click', handleImgClick);
    img1.removeEventListener('click', handleImgClick);
    img2.removeEventListener('click', handleImgClick);

    displayResults();
    marketingTableReportButton();

  }else {
    for( var j = 0; j < 3; j++){
      var removeImage = document.getElementById('img'+j);
      while(removeImage.firstChild){
        removeImage.removeChild(removeImage.firstChild);
      }
    }

    randomProductChooser();
    productImageRender();
  }
}

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
    productVotes.length = 0;
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
            '#51B88A',
            '#47AE80',
            '#419F75',
            '#3B916A',
            '#358260',
            '#2F7455',
            '#29654A',
            '#235740',
            '#1E4835',
            '#183A2B',
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

//===== Create Marketing Report Button =====

function marketingTableReportButton(){
  var app = document.getElementById('app');
  var marketingTableButton = document.createElement('button');
  marketingTableButton.id = 'marketingTableButton';
  marketingTableButton.setAttribute('onclick', 'window.open("marketing-table.html")');
  var newText = document.createTextNode('See Marketing Report');
  marketingTableButton.appendChild(newText);
  app.insertBefore(marketingTableButton, app.childNodes[0]);
}

//===== Create Marketing Report Table =====
function marketingTableCreate(){

  pullFromLocalStorage();

  var productClickPercentage = [];

  function productsToProductClickPercentage() {
    for(var i = 0; i < products.length; i++){
      productClickPercentage.push(Math.round((products[i].numberTimesClicked/products[i].numberTimesShown) * 100));
    }
  }

  productsToProductClickPercentage();

  console.log('it works');
  var marketingTable = document.createElement('table');
  var tableWrap = document.getElementById('tableWrap');
  var marketingTableHeader = document.createElement('thead');
  var marketingTableTopRow = document.createElement('tr');

  tableWrap.appendChild(marketingTable);
  marketingTable.appendChild(marketingTableHeader);
  marketingTableHeader.appendChild(marketingTableTopRow);

  for(var i = 0; i < 5; i++){
    var marketingTableColumnHeaders = document.createElement('th');
    marketingTableColumnHeaders.id = 'header-'+i;
    marketingTableTopRow.appendChild(marketingTableColumnHeaders);
  }

  var header0 = document.getElementById('header-0');
  var header0Text = document.createTextNode('Item Name');
  header0.appendChild(header0Text);

  var header1 = document.getElementById('header-1');
  var header1Text = document.createTextNode('Total Times Shown');
  header1.appendChild(header1Text);

  var header2 = document.getElementById('header-2');
  var header2Text = document.createTextNode('Total Times Clicked');
  header2.appendChild(header2Text);

  var header3 = document.getElementById('header-3');
  var header3Text = document.createTextNode('% Clicked per Time Shown');
  header3.appendChild(header3Text);

  var header4 = document.getElementById('header-4');
  var header4Text = document.createTextNode('Recommended?');
  header4.appendChild(header4Text);

  for(i = 0; i < products.length; i++){
    var marketingTableDataRow = document.createElement('tr');
    marketingTableDataRow.id = 'row '+i;
    marketingTableHeader.appendChild(marketingTableDataRow);
  }

  for(i = 0; i < products.length; i++){
    var marketingTableDataCell = document.createElement('td');
    marketingTableDataCell.className = 'first-row';
    var row = document.getElementById('row '+i);
    var marketingTableDataCellText = document.createTextNode(products[i].name);
    marketingTableDataCell.appendChild(marketingTableDataCellText);
    row.appendChild(marketingTableDataCell);
  }

  for(i = 0; i < products.length; i++){
    marketingTableDataCell = document.createElement('td');
    row = document.getElementById('row '+i);
    marketingTableDataCellText = document.createTextNode(products[i].numberTimesShown);
    marketingTableDataCell.appendChild(marketingTableDataCellText);
    row.appendChild(marketingTableDataCell);
  }

  for(i = 0; i < products.length; i++){
    marketingTableDataCell = document.createElement('td');
    row = document.getElementById('row '+i);
    marketingTableDataCellText = document.createTextNode(products[i].numberTimesClicked);
    marketingTableDataCell.appendChild(marketingTableDataCellText);
    row.appendChild(marketingTableDataCell);
  }

  for(i = 0; i < products.length; i++){
    marketingTableDataCell = document.createElement('td');
    row = document.getElementById('row '+i);
    marketingTableDataCellText = document.createTextNode(productClickPercentage[[i]]+'%');
    marketingTableDataCell.appendChild(marketingTableDataCellText);
    row.appendChild(marketingTableDataCell);
  }

  for(i = 0; i < products.length; i++){
    marketingTableDataCell = document.createElement('td');
    row = document.getElementById('row '+i);
    if(productClickPercentage[i]>30){
      marketingTableDataCellText = document.createTextNode('YES');
      marketingTableDataCell.className = 'recommend-yes';
    } else {
      marketingTableDataCellText = document.createTextNode('NO');
      marketingTableDataCell.className = 'recommend-no';
    }
    marketingTableDataCell.appendChild(marketingTableDataCellText);
    row.appendChild(marketingTableDataCell);
  }
}

if(document.getElementById('app')){
  main();
}

if(document.getElementById('app-marketing')){
  marketingTableCreate();
}
