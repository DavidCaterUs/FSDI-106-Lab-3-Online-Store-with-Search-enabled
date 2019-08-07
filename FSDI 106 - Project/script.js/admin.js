
// Object Constructor

function Item(title,description,price,image,category){
  this.title = title;
  this.description = description;
  this.price = price;
  this.image = image;
  this.category = category;
}





function saveItem(){

  //get data
  var title = $("#txtTitle").val();
  var description = $("#txtDescription").val();
  var price = $("#txtPrice").val();
  var image = $("#txtImage").val();
  var category = $("#selCategory").val();
  console.log(title,description,price,image,category);


  //createobject
  var theItem = new Item(title,description,price,image,category);
  console.log(theItem);

  //save object to back end


}


function init(){
  console.log("Init admin page");

  //initializations
  //events


  $("#btnSave").click(saveItem);
}


window.onload = init;
