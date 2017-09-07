"use strict"

$(document).ready(function(){

  // Object constructor for folding bikes
  function foldingBike(brand, frame, speed, weight, price, image){
    this.brand  = brand;
    this.frame  = frame;
    this.speed  = speed;
    this.weight = weight;
    this.price  = price;
    this.image  = image;
  }

  // Create the bikes using the foldingBikes constructor
  var tokyo     = new foldingBike('Tokyo','Steel','6-Speed','30lbs.','$199','img/tokyo.jpg');
  var miami     = new foldingBike('Miami','Steel','6-Speed','32lbs.','$299','img/miami.jpg');
  var milan     = new foldingBike('Milan','Steel','1-Speed','33lbs.','$249', 'img/miami.jpg');
  var seoul     = new foldingBike('Seoul','Alloy','6-Speed','26lbs.','$329', 'img/seoul.jpg');
  var gotham7   = new foldingBike('Gotham 7','Alloy','7-Speed','29lbs','$379', 'img/gotham_7.jpg');
  var gotham247 = new foldingBike('Gotham 24-7','Alloy','7-Speed','30lbs.', '$429','img/gotham_24-7.jpg');
  var barcelona = new foldingBike('Barcelona', 'Alloy','3-Speed','31lbs.','$449','img/barcelona.jpg');
  var frisco    = new foldingBike('Frisco', 'Alloy','e-bike','43lbs.','$1099','img/frisco.jpg');

  // Create an array to add folding bikes to
  var bikeArray = new Array

  // Add bikes to the array
  bikeArray.push(tokyo, miami, milan, seoul, gotham7, gotham247, barcelona,frisco);

  //Loop through array 
for(var i = 0; i < bikeArray.length; i++) {
    //Create new elements for each folding bike
  var newBike  = document.createElement("div");
  var bikeDiv  = document.createElement("div");
  var brandH3  = document.createElement("h3");
  var frameH4  = document.createElement("h4");
  var speedH4  = document.createElement("h4");
  var weightH4 = document.createElement("h4");
  var priceH4  = document.createElement("h4");
  var image    = document.createElement("img");
  var buyBtn   = document.createElement("button");

  //Create <i> elements to to add font awesome icons
  //Set attribute aria-hidden

  //Frame icon
  var iconFrame = document.createElement("i");
  iconFrame.className = "fa fa-bicycle";
  //Speed icon
  var iconSpeed = document.createElement("i"); 
  iconSpeed.className = "fa fa-cog";
  //Weight icon
  var iconWeight = document.createElement("i");
  iconWeight.className = "fa fa-balance-scale";
  //Price icon
  var iconPrice = document.createElement("i");
  iconPrice.className = "fa fa-usd";
  
    //Create text for new elements
    var brandTxt  = document.createTextNode(bikeArray[i].brand);
    var frameTxt  = document.createTextNode(': ' + bikeArray[i].frame);
    var speedTxt  = document.createTextNode(': ' + bikeArray[i].speed);
    var weightTxt = document.createTextNode(': ' + bikeArray[i].weight);
    var priceTxt  = document.createTextNode(': ' + bikeArray[i].price);
    var buyTxt    = document.createTextNode("Buy");

    //Add image source
    image.src = bikeArray[i].image;

    //Add class attributes
    image.className   = "img-responsive";
    buyBtn.className  = "btn btn-primary btn-md";
    bikeDiv.className = "col-sm-6";
    // newDiv.className  = "tshirt shirtName" + [i] + " thumbnail"

    //Add text to elements
    brandH3.appendChild(brandTxt);
    frameH4.appendChild(iconFrame); //add font awesome bicycle icon
    iconFrame.appendChild(frameTxt)
    speedH4.appendChild(iconSpeed); //add font awesome gear icon
    iconSpeed.appendChild(speedTxt);
    weightH4.appendChild(iconWeight); //add font awesome scale icon
    iconWeight.appendChild(weightTxt);
    priceH4.appendChild(iconPrice); //add font awesome dollar icon
    iconPrice.appendChild(priceTxt);
    buyBtn.appendChild(buyTxt);

    // add elements to bike div
    bikeDiv.appendChild(brandH3);
    bikeDiv.appendChild(image);
    bikeDiv.appendChild(frameH4);
    bikeDiv.appendChild(speedH4);
    bikeDiv.appendChild(weightH4);
    bikeDiv.appendChild(priceH4);
    bikeDiv.appendChild(buyBtn)

    // add bike div to new bike div
    newBike.appendChild(bikeDiv);

    // add new bike to the element with id="bikes"
    document.getElementById("bikes").appendChild(newBike);










}

});