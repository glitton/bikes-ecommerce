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
  var gotham247 = new foldingBike('Gotham 24-7','Alloy','7-Speed','30lbs.', '$429','img/gotham_24_7.jpg');
  var barcelona = new foldingBike('Barcelona', 'Alloy','3-Speed','31lbs.','$449','img/barcelona.jpg');
  var frisco    = new foldingBike('Frisco', 'Alloy','e-bike','43lbs.','$1099','img/frisco.jpg');

  // Create an array to add folding bikes to
  var bikeArray = new Array

  // Add bikes to the array
  bikeArray.push(tokyo, miami, milan, seoul, gotham7, gotham247, barcelona,frisco);

  //Loop through array 
for(var i = 0; i < bikeArray.length; i++) {
    //Create new elements for each folding bike
    var newDiv   = document.createElement("div");
    var bikeDiv  = document.createElement("div");
    var brandH3  = document.createElement("h3");
    var frameH4  = document.createElement("h4");
    var speedH4  = document.createElement("h4");
    var weightH4 = document.createElement("h4");
    var priceH4  = document.createElement("h4");
    var image    = document.createElement("img");
    var buyBtn   = document.createElement("button");

    //Create text for new elements
    var bBrand   = document.createTextNode(bikeArray[i].brand);
    var bFrame   = document.createTextNode("Frame: " + bikeArray[i].frame);
    var bSpeed   = document.createTextNode("Speed: " + bikeArray[i].color);
    var bWeight  = document.createTextNode("Weight: " + bikeArray[i].weight);
    var bPrice   = document.createTextNode("Price: " + bikeArray[i].price);
    var buy      = document.createTextNode("Add To Cart");

    //Add image source
    image.src = bikeArray[i].image;

    //Add class attributes
    image.className   = "img-responsive"
    buyBtn.className  = "btn btn-primary btn-md"
    newItem.className = "col-sm-6"
    // newDiv.className  = "tshirt shirtName" + [i] + " thumbnail"

    //Add text to elements
    brandH3.appendChild(bBrand)
    


    // add elements to new div
    newDiv.appendChild(nameH1)
    newDiv.appendChild(image)
    newDiv.appendChild(sizeH4)
    newDiv.appendChild(colorH4)
    newDiv.appendChild(stockH4)
    newDiv.appendChild(btn)

    // add new div to new item div
    newItem.appendChild(newDiv)

    // add new item to the element with id="shirts"
    document.getElementById("products").appendChild(newItem)










}

});