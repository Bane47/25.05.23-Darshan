function fetchDataAndDisplay(){
    fetch("http://localhost:3000/playstationCard")
    .then(response => response.json())
    .then(data => {
        if(data&& data.length > 0){
            var html = ""

            for (let i = 0; i < data.length; i += 2) {
                // Open the container div for each row
                html += '<div class="container">';
                html += '<div class="row row-cols-1 row-cols-md-2 g-4 p-3">';
      
                // Generate HTML for the first card in the row
                html += '<div class="col">';
                html += '<div class="card">';
                html += '<img src="' + data[i].photo + '" class="card-img-top" alt="Card Image">';
                html += '<div class="card-body row">';
                html += '<div class="col-lg-10 col-sm-6 col-md-6">'
                html += '<h5 class="card-title ">' + data[i].name + '</h5>';
                html += '<p class="card-text">' + data[i].description + '</p>';
                html += '</div>'
                html += '<div class="col-lg-2 col-sm-6 col-md-6">'
                html += '<h5 class="card-title me-auto">' + data[i].price + '</h5>';
                html += '</div>';
                html += '</div>';
                html += '</div>';
                html += '<div class="row">'
                html +='<button class="uiverse col-lg-6" onclick="addToWishlist('+data[i].id+')">'
                html +='<span class="tooltip">'
                html +=  '<i class="fa-solid fa-heart"></i>'
                html +='</span>'
                html +='<span>'
                html += ' Add to wishlist <i class="fa-regular fa-heart"></i>'
                html +='</span>'
                html +='</button>'
                html +='<button class="uiverse cart col-lg-6" onclick="Cart('+data[i].id+')">'
                html +='<span class="tooltip"><i class="fa-solid fa-cart-plus"></i></span>'
                html += '<span>'
                html +=   'Add to cart <i class="fa-brands fa-opencart"></i>'
                    html +='</span>'
                    html +='</button>'
                    html +='</div>'
                  html += '</div>';
      
                // Check if there is a second card in the row
                if (i + 1 < data.length) {
                  // Generate HTML for the second card in the row
                  html += '<div class="col">';
                  html += '<div class="card">';
                  html += '<img src="' + data[i + 1].photo + '" class="card-img-top" alt="Card Image">';
                  html += '<div class="card-body row">';
                  html += '<div class="col-lg-10 col-sm-6 col-md-6">'
                  html += '<h5 class="card-title">' + data[i+1].name + '</h5>';
                  html += '<p class="card-text">' + data[i+1].description + '</p>';
                  html += '</div>'
                  html += '<div class="col-lg-2 col-sm-6 col-md-6">'
                  html += '<h5 class="card-title">' + data[i+1].price + '</h5>';
                  html += '</div>';
                  html += '</div>';
                  html += '</div>';
                  html += '<div class="row">'
                html +='<button class="uiverse col-lg-6" onclick="addToWishlist('+data[i+1].id+')">'
                html +='<span class="tooltip">'
                html +=  '<i class="fa-solid fa-heart"></i>'
                html +='</span>'
                html +='<span>'
                html += ' Add to wishlist <i class="fa-regular fa-heart"></i>'
                html +='</span>'
                html +='</button>'
                html +='<button class="uiverse cart col-lg-6" onclick="Cart('+data[i+1].id+')">'
                html +='<span class="tooltip"><i class="fa-solid fa-cart-plus"></i></span>'
                html += '<span>'
                html +=   'Add to cart <i class="fa-brands fa-opencart"></i>'
                    html +='</span>'
                    html +='</button>'
                    html +='</div>'
                  html += '</div>';
                }
      
                // Close the container div for each row
                html += '</div>';
                
                html += '</div>';
              }
              
   
               document.getElementById("psCard").innerHTML = html;
        }
    })


    
}
            

fetchDataAndDisplay();


function Cart(id) {
  const cartItems = [];
  const xhttp = new XMLHttpRequest();


  xhttp.open("GET", `http://localhost:3000/playstationCard/${id}`);
  xhttp.send();

  xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
          console.log(id);
          const itemDetails = JSON.parse(this.responseText);
          console.log(itemDetails);

          const xhttpAdd = new XMLHttpRequest();
          xhttpAdd.open("POST", "http://localhost:3000/cart");
          xhttpAdd.setRequestHeader("Content-Type", "application/json");
          xhttpAdd.onload = function() {
              if (xhttpAdd.status === 200) {
                  const response = JSON.parse(xhttpAdd.responseText);
                  cartItems.push(response);
                  showBill();
              }
          };

          xhttpAdd.send(JSON.stringify(itemDetails));
          Swal.fire({
              icon:'success',
              title:"Item added",
              timer:10000,
              showConfirmButton:true,
              confirmButtonText: 'View Cart',
              showCancelButton: true, // Add showCancelButton option
              cancelButtonText: 'Continue Shopping', 
              willOpen:() =>{

              }
              }).then((result) => {
                  if (result.isConfirmed) {
                    window.location.href = 'cart.html';
                  }
      })
  };
}

function showBill() {
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://localhost:3000/cart");
  xhttp.send();

  xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
          const objects = JSON.parse(this.responseText);
          for (let object of objects) {
              console.log(object);
          }
      }
  };
}

}


function addToWishlist(id){

    const cartItems = [];
    const xhttp = new XMLHttpRequest();
  
  
    xhttp.open("GET", `http://localhost:3000/playstationCard/${id}`);
    xhttp.send();
  
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            console.log(id);
            const itemDetails = JSON.parse(this.responseText);
            console.log(itemDetails);
  
            const xhttpAdd = new XMLHttpRequest();
            xhttpAdd.open("POST", "http://localhost:3000/wishlist");
            xhttpAdd.setRequestHeader("Content-Type", "application/json");
            xhttpAdd.onload = function() {
                if (xhttpAdd.status === 200) {
                    const response = JSON.parse(xhttpAdd.responseText);
                    cartItems.push(response);
                    Bill();
                }
            };
  
            xhttpAdd.send(JSON.stringify(itemDetails));
            Swal.fire({
                icon:'success',
                title:"Item added",
                timer:10000,
                showConfirmButton:true,
                confirmButtonText: 'View Wishlist',
                showCancelButton: true, // Add showCancelButton option
                cancelButtonText: 'Continue Shopping', 
                willOpen:() =>{
  
                }
                }).then((result) => {
                    if (result.isConfirmed) {
                      window.location.href = 'wishlist.html';
                    }
        })
    };
  }
  
  function Bill() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/wishlist");
    xhttp.send();
  
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            const objects = JSON.parse(this.responseText);
            for (let object of objects) {
                console.log(object);
            }
        }
    };
  }
  
  }
  