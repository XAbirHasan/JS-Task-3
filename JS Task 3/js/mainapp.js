// product list array
var product_list = [
    {
       "id":1,
       "title":"Fjallraven - Foldsack No. 1 Backpack",
       "price":1090.95,
       "image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
       "id":2,
       "title":"Mens Casual Premium Slim Fit T-Shirts ",
       "price":1202.3,
       "image":"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
    {
       "id":3,
       "title":"Mens Cotton Jacket",
       "price":5500.99,
       "image":"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
     
    },
    {
       "id":4,
       "title":"Mens Casual Slim Fit",
       "price":1500.99,
       "image":"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",

    },
    {
       "id":5,
       "title":"John Hardy Women's Chain Bracelet",
       "price":6950.95,
       "image":"https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",

    },
    {
       "id":6,
       "title":"Solid Gold Petite Micropave ",
       "price":1168.92,
       "image":"https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    },
    {
       "id":7,
       "title":"White Gold Plated Princess",
       "price":9980.99,
       "image":"https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    },
    {
       "id":8,
       "title":"Pierced Owl Rose Gold Plated",
       "price":1900.99,
       "image":"https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",

    },
    {
       "id":9,
       "title":"WD 2TB Portable HDD - USB 3.0 ",
       "price":6400.00,
       "image":"https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    },
    {
       "id":10,
       "title":"SanDisk 1TB SSD - SATA III 6 Gb/s",
       "price":2109.00,
       "image":"https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",

    },
    {
       "id":11,
       "title":"Silicon Power 256GB SSD ",
       "price":5009.00,
       "image":"https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    },
    {
       "id":12,
       "title":"WD 4TB Gaming Drive",
       "price":11400.95,
       "image":"https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    },
    {
       "id":13,
       "title":"Acer SB220Q bi 21.5 inches monitor",
       "price":15099,
       "image":"https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    },
    {
       "id":14,
       "title":"Samsung 49-Inch CHG90 144Hz Gaming Monitor",
       "price":49999.99,
       "image":"https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    },
    {
       "id":15,
       "title":"BIYLACLESEN Women's 3-in-1 Snowboard Jacket",
       "price":5600.99,
       "image":"https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    },
    {
       "id":16,
       "title":"Lock and Love Women's Removable Hooded Biker Jacket",
       "price":3290.95,
       "image":"https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    },
    {
       "id":17,
       "title":"Women Windbreaker Striped Climbing Raincoats",
       "price":3980.99,
       "image":"https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",

    },
    {
       "id":18,
       "title":"MBJ Women's Solid Short Sleeve Boat Neck V ",
       "price":1190.85,
       "image":"https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
       
    },
    {
       "id":19,
       "title":"Opna Women's Short Sleeve Moisture",
       "price":1170.95,
       "image":"https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    },
    {
       "id":20,
       "title":"DANVOUY Womens T Shirt Casual Cotton Short",
       "price":1208.99,
       "image":"https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    }
 ]

// add element's to the product cart
// sample card data

for( let i = 0; i<product_list.length; i++){
    data = product_list[i];
    var html_contex = '<div class="card custom-card" style="width: 8rem;" id="'+data["id"]+'">'  +
                        '<img class="card-img-top" src="' + data["image"] + '" alt="Card image cap">' +
                        '<div class="card-body"><h6 class="card-title">' + data["title"] + '</h6></div></div>';

    // var html_contex = '<div class="card custom-card" style="width: 8rem;" id="product"><img class="card-img-top" src="https://agbd.s3.amazonaws.com/media/images/Macbook-Aidr--M1-d-1.jpg" alt="Card image cap"> <div class="card-body" id="1"> <h6 class="card-title">namefadfadfadfadf</h6></div>';
    $("#product_holder").append( html_contex );
}


$(document).ready(function(){
    // console.log("hi");
    $('.custom-card').click(function(){
      var product_id = $(this).attr('id');
      // alert( "id is: " + product_id );
      addtoCart(product_id);
    });
    
    
}); 


// cart elements
var cart_elements = [
   // sample of cart elements
   // {
   //    "id":0,
   //    "count":0
   // }
]

// add elements to cart
function addtoCart(product_id){

   // find
   var result = cart_elements.find(({ id }) => id === product_id);
   if(typeof result === "undefined") {
      // obj is not found in cart
      // then add new product
      var new_product = {"id":product_id, "count":1};
      cart_elements.push(new_product);
   }
   else{
      // get index
      var object_index = cart_elements.findIndex((obj => obj.id == product_id));
       //Log object to Console.
      // console.log("Before update: ", cart_elements[object_index])
      //Update object's count property.
      cart_elements[object_index].count += 1; 
      //Log object to console again.
      // console.log("After update: ", cart_elements[object_index])
   }
   update_cart();
   //console.log(cart_elements.length);
}




function update_cart(){
   $("#cart_item").empty();

   var subtotal = 0;
   for( let i = 0; i<cart_elements.length; i++){
      var product_id = cart_elements[i].id;
      // console.log(product_id);

      // get product detalis
      var product_index = product_list.findIndex((obj => obj.id == product_id));
      var product = product_list[product_index];
      // console.log(product);

      // show cart item
      var html_contex = '<div class="row added-item">'+ 
                           '<div class="col-2">'+
                              '<div class="card" style="width: 3rem;">'+
                                 '<img class="card-img-top" src="'+product.image+'" alt="Card image cap">' +
                              '</div>'+
                              '<sup>'+cart_elements[i].count+'</sup>'+
                           '</div>'+
                           '<div class="col-5">'+ product.title +'</div>'+
                           '<div class="col-3">BDT '+ (product.price*cart_elements[i].count).toFixed(2) +'</div>'+
                           '<div class="col-2"><i class="fas fa-trash-alt"></i></div>'+
                           '<div class="hline"></div>'+
                        '</div>';
      $("#cart_item").append( html_contex );

      subtotal += (product.price*cart_elements[i].count);
   }

   update_payment(subtotal);
}

function update_payment(subtotal){
   var discount = 0;
   var taxpercentage = 0;  // 0 percent,
   var tax = (subtotal*(taxpercentage/100));
   total = subtotal + tax - discount;

   document.getElementById('discount').innerHTML = "BDT "+discount.toFixed(2);
   document.getElementById('subtotal').innerHTML = "BDT "+subtotal.toFixed(2);
   document.getElementById('tax_percent').innerHTML = "Tax("+taxpercentage+"%)";
   document.getElementById('tax').innerHTML = "BDT "+tax.toFixed(2);
   document.getElementById('total').innerHTML = "BDT "+total.toFixed(2);
   document.getElementById('paymoney').innerHTML = "BDT "+total.toFixed(2);

}