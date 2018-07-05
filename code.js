let Container = {

  "1": {
    "image": "images/hotel1.jpg",
    "images": {
      "1": "images/img1.jpg",
      "2": "images/img2.jpg",
      "3": "images/img3.jpg"
    },
    "title": "Hilton Lake Taupo",
    "info": "3.3 km to City centre",
    "category": "Hotel",
    "price": "150.00"
  },
  "2": {
    "image": "images/white.png",
    "images": {
      "1": "images/img1.jpg",
      "2": "images/img2.jpg",
      "3": "images/img3.jpg"
    },
    "title": "BreakFree on Cashel",
    "info": "0.2 km to City centre",
    "category": "Hotel",
    "price": "130.00"
  },
  "3": {
    "image": "images/hotel2",
    "images": {
      "1": "images/img1.jpg",
      "2": "images/img2.jpg",
      "3": "images/img3.jpg"
    },
    "title": "The George",
    "info": "2.7 km to City centre",
    "category": "Hotel",
    "price": "120.00"
  },
  "4": {
    "image": "images/motel1.jpg",
    "images": {
      "1": "images/img1.jpg",
      "2": "images/img2.jpg",
      "3": "images/img3.jpg"
    },
    "title": "Cascades Lakefront Motel",
    "info": "3.2 km to City centre",
    "category": "Motel",
    "price": "80.00"
  },
  "5": {
    "image": "images/motel2.jpg",
    "images": {
      "1": "images/img1.jpg",
      "2": "images/img2.jpg",
      "3": "images/img3.jpg"
    },
    "title": "239 On Lincoln Motel",
    "info": "2.7 km to City centre",
    "category": "Motel",
    "price": "100.00"
  },
  "6": {
    "image": "images/motel3.jpg",
    "images": {
      "1": "images/img1.jpg",
      "2": "images/img2.jpg",
      "3": "images/img3.jpg"
    },
    "title": "162 Kings of Riccarton Motel",
    "info": "3.4 km to City centre",
    "category": "Motel",
    "price": "120.00"
  },
  "7": {
    "image": "images/bach1.jpg",
    "images": {
      "1": "images/img1.jpg",
      "2": "images/img2.jpg",
      "3": "images/img3.jpg"
    },
    "title": "Lakefront Holiday Home",
    "info": "0.6 km to Town centre",
    "category": "Bach",
    "price": "100.00"
  },
  "8": {
    "image": "images/bach2.jpg",
    "images": {
      "1": "images/img1.jpg",
      "2": "images/img2.jpg",
      "3": "images/img3.jpg"
    },
    "title": "Mountain Bikers ReContainer",
    "info": "8.7 km to Town centre",
    "category": "Bach",
    "price": "140.00"
  },
  "9": {
    "image": "images/bach3.jpg",
    "images": {
      "1": "images/img1.jpg",
      "2": "images/img2.jpg",
      "3": "images/img3.jpg"
    },
    "title": "Deluxe Redwoods ReContainer",
    "info": "4.7 km to Town centre",
    "category": "Bach",
    "price": "130.00"
  }
};

function displayContainer(ContainerToDisplay) {
  let $Container = $(".Container");
  $Container.empty();
  Object.keys(ContainerToDisplay).forEach(function (key) {
    let ContainerItem = ` <div class="row result">
      <div class="col-4 result__image-col result__image--overflow-hidden">
          <div style="background-image: url(${container[key].image});" class="result__image"></div>
      </div>
      <div class="col-8 result__description">
          <h7>${Container[key].category}</h7>
          <h5 class="card-title">${Container[key].title}</h5>
          <p class="card-text">${Container[key].info}</p>
          <hr>
          <a href="#" class="btn btn-primary">Book now</a>
          <a href="view">Photos</a>
          <a href="info">Info</a>
          <a class="dolla" href="#">${Container[key].price}</a>
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                  <div class="carousel-item active">
                      <img class="d-block w-100" src="${container[key].images}" alt="First slide">
                  </div>
                  <div class="carousel-item">
                      <img class="d-block w-100" src="${container[key].images}" alt="Second slide">
                  </div>
                  <div class="carousel-item">
                      <img class="d-block w-100" src="${container[key].images}" alt="Third slide">
                  </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
              </a>
          </div>
          <div class="card border-light mb-3" style="max-width: 50rem;">
              <div class="card-header">About This place</div>
              <div class="card-body">
                  <h5 class="card-title">Clean & Tidy</h5>
                  <p class="card-text">With stunning views and a great atmosphere, This place provides guests modern accommodations in one
                      of New Zealand's most historic buildings. The hotel is located in the city’s Central Business
                      District.</p>
              </div>
          </div>
      </div>
  </div>`;
    $Container.append(ContainerItem);
  });

}

$(document).ready(function () {
  displayContainer(container);
  $(".links").click(function (e) {
    let containerToDisplay = filterByCategory(container, e.target.text);
    displaycontainer(containerToDisplay);
    console.log(e.target.value)
  });

});




/* carousel image */

('.carousel').carousel()



/* datepicker */

$(function () {
  $('input[name="daterange"]').daterangepicker({
    opens: 'left'
  }, function (start, end, label) {
    console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
  });
});