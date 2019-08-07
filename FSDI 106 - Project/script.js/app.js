var catalog = [];

function getCatalog() {

  this.catalog = [{
      title: "Shawarma",
      description: "Beef Shawarma",
      price: 130 +"ARS per Shawarma",
      image: "images/shawarmacarne.jpg",
      category: "Shawarma"
    },

    {
      title: "Sushi",
      description: "Sushi Roll",
      price: 200 +"ARS per Roll",
      image: "images/img-roll-fusion.jpg",
      category: "Sushi"
    },
    {
      title: "Empanadas",
      description: "Mix Flavors",
      price: 150 +"ARS per half a dozen",
      image: "images/empanadas.jpg",
      category: "Sushi"
    }
  ];

}

function displayCatalog() {
  //get the reference to ul


  for (let i = 0; i < catalog.length; i++) {
    var item = catalog[i];


    displayItem(item);
  }
}

function displayItem(item){

  var ul = $("#catalog");

  var li =
  `<div class="card" style="width: 18rem;">
<img src="${item.image}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${item.title}</h5>
  <p class="card-text">${item.description}</p>
  <a href="#" class="btn btn-primary">Add to cart</a>
  <hr>
  <h6>${item.price}</h6>
</div>
</div>`;
  ul.append(li);
}

function search(){
  var text = $("#txtSearch").val().toLowerCase();

  console.log("User wants to search for: " + text);

//clear()
$("#catalog").html('');

for (let i=0; i < catalog.length; i++){
  var item = catalog[i];

  if(item.title.toLowerCase().indexOf(text) >= 0
    || item.description.toLowerCase().indexOf(text) >0 ) {
    displayItem(item);
  }
}

}

function init() {
  console.log("Init Catalog Page")

  getCatalog();
  displayCatalog();

  $("#btnSearch").click(search);
  $("#txtSearch").keypress(function(args){
    if(args.keyCode == 13){
      search();
      args.preventDefault();
    }
  });

  $(".dropdown-item").click(function () {
    var category = $(this).attr('catName');
    console.log("filter by catergory : " + category);
  })
}





window.onload = init;
