let container = {

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
    "info2": "With stunning views and a great atmosphere, this place provides guests with modern accommodation in one of New Zealands most historic buildings. The hotel is located in the city's Central Business District.",
    "title2": "Clean & Tidy",
    "price": "NZ$150.00 P/N"
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
    "info2": "With stunning views and a great atmosphere, this place provides guests with modern accommodation in one of New Zealands most historic buildings. The hotel is located in the city's Central Business District.",
    "title2": "Clean & Tidy",
    "price": "NZ$130.00 P/N"
  },
  "3": {
    "image": "images/hotel2.jpg",
    "images": {
      "1": "images/img1.jpg",
      "2": "images/img2.jpg",
      "3": "images/img3.jpg"
    },
    "title": "The George",
    "info": "2.7 km to City centre",
    "category": "Hotel",
    "info2": "With stunning views and a great atmosphere, this place provides guests with modern accommodation in one of New Zealands most historic buildings. The hotel is located in the city's Central Business District.",
    "title2": "Clean & Tidy",
    "price": "NZ$120.00 P/N"
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
    "info2": "With stunning views and a great atmosphere, this place provides guests with modern accommodation in one of New Zealands most historic buildings. The hotel is located in the city's Central Business District.",
    "title2": "Clean & Tidy",
    "price": "NZ$80.00 P/N"
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
    "info2": "With stunning views and a great atmosphere, this place provides guests with modern accommodation in one of New Zealands most historic buildings. The hotel is located in the city's Central Business District.",
    "title2": "Clean & Tidy",
    "price": "NZ$100.00 P/N"
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
    "info2": "With stunning views and a great atmosphere, this place provides guests with modern accommodation in one of New Zealands most historic buildings. The hotel is located in the city's Central Business District.",
    "title2": "Clean & Tidy",
    "price": "NZ$120.00 P/N"
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
    "info2": "With stunning views and a great atmosphere, this place provides guests with modern accommodation in one of New Zealands most historic buildings. The hotel is located in the city's Central Business District.",
    "title2": "Clean & Tidy",
    "price": "NZ$100.00 P/N"
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
    "info2": "With stunning views and a great atmosphere, this place provides guests with modern accommodation in one of New Zealands most historic buildings. The hotel is located in the city's Central Business District.",
    "title2": "Clean & Tidy",
    "price": "NZ$140.00 P/N"
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
    "info2": "With stunning views and a great atmosphere, this place provides guests with modern accommodation in one of New Zealands most historic buildings. The hotel is located in the city's Central Business District.",
    "title2": "Clean & Tidy",
    "price": "NZ$130.00 P/N"
  }
};


var meal = {
  "Meal 1": {
    "name": "Chicken",
    "mealprice": "$25.00"
  },

  "Meal 2": {
    "name": "Beef",
    "mealprice": "$30.00"
  },
  "Meal 3": {
    "name": "Fish",
    "mealprice": "$22.00"
  },
  "Meal 4": {
    "name": "Greens",
    "mealprice": "$18.00"
  },

};






/* Filter by category*/
function filterByCategory(unfiltered, category) {
  let filtered = {};

  $.each(unfiltered, function (key, value) {
    if (value.category == category || category == "All") {
      filtered[key] = value;
    }
  });

  return filtered;
}

function generateCarousel(key) {
  return `<div id="carouselExampleControls${key}" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                  <div class="carousel-item active">
                      <img class="d-block w-100" src="${container[key].images["1"]}" alt="First slide">
                  </div>
                  <div class="carousel-item">
                      <img class="d-block w-100" src="${container[key].images["2"]}" alt="Second slide">
                  </div>
                  <div class="carousel-item">
                      <img class="d-block w-100" src="${container[key].images["3"]}" alt="Third slide">
                  </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls${key}" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls${key}" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
              </a>
          </div>`;

}



function displayContainer(ContainerToDisplay) {
  let $container = $("#motel-list");
  $container.empty();
  Object.keys(ContainerToDisplay).forEach(function (key) {
    let ContainerItem = ` <div class="row result">
      <div class="col-4 result__image-col result__image--overflow-hidden">
          <div data-id="${key}" style="background-image: url(${container[key].image});" class="result__image"></div>
      </div>
      <div class="col-8 result__description">
          <h7>${container[key].category}</h7>
          <h5 class="card-title">${container[key].title}</h5>
          <p class="card-text">${container[key].info}</p>
              <a class="show-photos" data-key="${key}" href="#">Photos</a>
              <a id="Info" data-key="${key}" href="#info">Info</a> 
            <select class="meals">
                <option value="Chicken Saltimbocca with Spinach and Potatoes">Chicken</option>
                <option value="Brandy Flamed Peppercorn Steak">Beef</option>
                <option value="Spicy Uni-Lardo Sushi in Lettuce Cups">Fish</option>
                <option value="Vegetarian chickpea burgers">Greens</option>
            </select>
                <button type="button" data-key="${key}" class="btn btn-primary book-now-button" data-toggle="modal" data-target="#exampleModal">Book Now</button>
            <a class="dolla" href="#">${container[key].price}</a>
            <div class="card border-light mb-3" style="max-width: 50rem;">
                <div class="card-header">Accommodation Infomation</div>
                <div class="card-body">
                <h5 class="card-title">${container[key].title2}</h5>
                <p class="card-text">${container[key].info2}</p>
            </div>
              <p class="w3-large"><i class="fa fa-bath"></i> <i class="fa fa-phone">
              </i> <i class="fa fa-wifi"></i> <i class="fa fa-tv"></i> <i class="fa fa-glass"></i>
              <i class="fa fa-cutlery"></i></p>
          </div>
      </div>
  </div>`
    $container.append(ContainerItem);



  });

  /* book now button function */
    
  $('.book-now-button').click(bookNowEventListener);

  $(".show-photos").click(function (e) {
    e.preventDefault();
    if (!$(e.target).next().next().next().next().hasClass("carousel")) {
      let carouselHTML = generateCarousel($(e.target).attr("data-key"));
      $(e.target).next().next().next().after(carouselHTML);
    }

  });
}

function bookNowEventListener(e) {
  var id = $(e.target).attr("data-key");
  var title = container[id]["title"];

  $("#container-name").text(title);
  var price = container[id]["price"];
  $("#total-price").text(price);

  $("#meal-name").text($(e.target).prev().val());
}

$(document).ready(function () {
  displayContainer(container);
  $('.carousel').carousel();
  $(".links").click(function (e) {
    let containerToDisplay = filterByCategory(container, e.target.text);
    displayContainer(containerToDisplay);
    console.log(e.target.value)
  });

});



/* datepicker */

$(function () {
  $('input[name="daterange"]').daterangepicker({
    opens: 'left'
  }, function (start, end, label) {
    console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
  });
});

/* window scroll function */


window.smoothScroll = function (target) {
  var scrollContainer = target;
  do { //find scroll container
    scrollContainer = scrollContainer.parentNode;
    if (!scrollContainer) return;
    scrollContainer.scrollTop += 1;
  } while (scrollContainer.scrollTop == 0);

  var targetY = 0;
  do { //find the top of target relatively to the container
    if (target == scrollContainer) break;
    targetY += target.offsetTop;
  } while (target = target.offsetParent);

  scroll = function (c, a, b, i) {
    i++; if (i > 35) return;
    c.scrollTop = a + (b - a) / 30 * i;
    setTimeout(function () { scroll(c, a, b, i); }, 8);
  }
  // start scrolling
  scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

// When the user clicks on div, open the popup
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}



