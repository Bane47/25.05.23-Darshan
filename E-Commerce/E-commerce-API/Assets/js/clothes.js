function fetchDataAndDisplay(){
  fetch("http://localhost:3000/clothes")
  .then(response => response.json())
  .then(data => {
      if(data && data.length > 0){
          var chtml = "";
          console.log(data)

          for(let i = 0; i<data.length;i+=3){
            // for(let object of data ){
              console.log(data);

            
            chtml +=' <div class="row">'
            chtml +='   <div class="card col-lg-4 hover-shadow">'
            chtml +='   <div class="card-body">'
            chtml +='  <h5 class="card-title text-center">'+data[i].category+'</h5>'
            chtml +='  <img class="col-lg-12" src="'+data[i].photo+'" alt="T-Shirt Image">'
            chtml +='  <p class="card-text text-center dressclr">'+data[i].name+'</p>'
            chtml +='  <div class="row">'
            chtml +='<p class="dressclr col-lg-6">Price: '+data[i].price+'</p>'
  chtml +='  <p class="dressclr col-lg-6 text-center">Size: '+data[i].size+'</p>'
  chtml +='  </div>'
  chtml +=' <div class="row">'
  chtml +=` <button class="uiverse col-lg-6" onclick="addwish(${data[i].id})">`
  chtml +='  <span class="tooltip"><i class="fa-solid fa-heart"></i></span>'
  chtml +='  <span>Add to wishlist <i class="fa-regular fa-heart"></i></span>'
  chtml +='  </button>'
  chtml +=`   <button class="uiverse cart col-lg-6" onclick="addcart(${data[i].id})">`
  chtml +='  <span class="tooltip"><i class="fa-solid fa-cart-plus"></i></span>'
  chtml +='   <span>Add to cart <i class="fa-brands fa-opencart"></i></span>'
    chtml +='  </button>'
    chtml +='  </div>'
    chtml +='   </div>'
    chtml +=' </div>'
    chtml +='  <div class="card col-lg-4 hover-shadow">'
  chtml +='  <div class="card-body">'
  chtml +=' <h5 class="card-title text-center">'+data[i+1].category+'</h5>'
  chtml +=' <img class="col-lg-12" src="'+data[i+1].photo+'" alt="T-Shirt Image">'
   chtml +=' <p class="card-text text-center dressclr">'+data[i+1].name+'</p>'
   chtml +='   <div class="row">'
   chtml +=' <p class="dressclr col-lg-6">Price: '+data[i+1].price+'</p>'
   chtml +=' <p class="dressclr col-lg-6 text-center">Size: '+data[i+1].size+'</p>'
   chtml +='    </div>'
    chtml +='  <div class="row">'
    chtml +=`<button class="uiverse col-lg-6" onclick="addwish(${data[i+1].id})">`
    chtml +='<span class="tooltip"><i class="fa-solid fa-heart"></i></span>'
    chtml +='    <span>Add to wishlist <i class="fa-regular fa-heart"></i></span>'
    chtml +='  </button>'
    chtml += `<button class="uiverse cart col-lg-6" onclick="addcart(${data[i].id})">`
    chtml +='  <span class="tooltip"><i class="fa-solid fa-cart-plus"></i></span>'
    chtml +='  <span>Add to cart <i class="fa-brands fa-opencart"></i></span>'
    chtml +='  </button>'
    chtml +='   </div>'
    chtml +='   </div>'
    chtml +=' </div>'
    chtml +=' <div class="card col-lg-4 hover-shadow">'
    chtml +='  <div class="card-body">'
 chtml +='   <h5 class="card-title text-center">'+data[i+2].category+'</h5>'
 chtml +='  <img class="col-lg-12" src="'+data[i+2].photo+'" alt="T-Shirt Image">'
    chtml +='  <p class="card-text text-center dressclr">'+data[i+2].name+'</p>'
    chtml +='  <div class="row">'
    chtml +='  <p class="dressclr col-lg-6">Price: '+data[i+2].price+'</p>'
    chtml +='   <p class="dressclr col-lg-6 text-center">Size: '+data[i+2].size+'</p>'
    chtml +='  </div>'
    chtml +='   <div class="row">'
    chtml +=`  <button class="uiverse col-lg-6" onclick="addwish(${data[i+2].id})">`
    chtml +=' <span class="tooltip"><i class="fa-solid fa-heart"></i></span>'
    chtml +=' <span>Add to wishlist <i class="fa-regular fa-heart"></i></span>'
    chtml +='</button>'
    chtml +=  `<button class="uiverse cart col-lg-6" onclick="addcart(${data[i+2].id})">`
    chtml +='  <span class="tooltip"><i class="fa-solid fa-cart-plus"></i></span>'
    chtml +='  <span>Add to cart <i class="fa-brands fa-opencart"></i></span>'
    chtml +='  </button>'
    chtml +='  </div>'
    chtml +='  </div>'
    chtml +='</div>'
    chtml +='  </div>'

          
          }

          document.getElementById("clothesContainer").innerHTML = chtml;
      }
  })
}

fetchDataAndDisplay();
// function fetchDataAndDisplay() {
  // fetch('http://localhost:3000/clothes')
  //   .then(response => response.json())
  //   .then(data => {
  //     if (data && data.length > 0) {
    //     const clothesContainer = document.getElementById("clothesContainer");

    //     data.forEach(item => {

    //       const card = document.createElement('div');
    //       card.classList.add('card', 'col-lg-4', 'hover-shadow');

    //       const cardBody = document.createElement('div');
    //       cardBody.classList.add('card-body');

    //       const title = document.createElement('h5');
    //       title.classList.add('card-title', 'text-center');
    //       title.textContent = item.category;

    //       const image = document.createElement('img');
    //       image.classList.add('col-lg-12');
    //       image.src = item.photo;
    //       image.alt = "T-Shirt Image";

    //       const brand = document.createElement('p');
    //       brand.classList.add('card-text', 'text-center', 'dressclr');
    //       brand.textContent = item.brand;

    //       const row = document.createElement('div');
    //       row.classList.add('row');

    //       const row2 = document.createElement('div');
    //       row2.classList.add('row');

    //       const price = document.createElement('p');
    //       price.classList.add('dressclr', 'col-lg-6');
    //       price.textContent ='Price: '+ item.price;

    //       const size = document.createElement('p');
    //       size.classList.add('dressclr', 'col-lg-6', 'text-center');
    //       size.textContent = 'Size: '+ item.size;

 

    //       const wishlistDiv = document.createElement('button');
    //       wishlistDiv.classList.add('uiverse', 'col-lg-6');

    //       // const wishlistclick =document.addEventListener('click',function addcart(id){
    //       //   console.log("Button clicked")
    //       // });
    //       // wishlistDiv.appendChild(wishlistclick)

    //       const wishlistIcon = document.createElement('span');
    //       wishlistIcon.classList.add('tooltip');
    //       wishlistIcon.innerHTML = '<i class="fa-solid fa-heart"></i>';

         


    //       const wishlistText = document.createElement('span');
    //       wishlistText.textContent = 'Add to wishlist ';

    //       const wishlistEmptyIcon = document.createElement('i');
    //       wishlistEmptyIcon.classList.add('fa-regular', 'fa-heart');

    //       wishlistText.appendChild(wishlistEmptyIcon);
    //       wishlistDiv.appendChild(wishlistIcon);
    //       wishlistDiv.appendChild(wishlistText);

    //       const cartDiv = document.createElement('button');
    //       cartDiv.classList.add('uiverse', 'cart', 'col-lg-6');
    //       // const wishlistclick2 =document.addEventListener('click',function addwish(id){
    //       //   console.log("Button clicked")
    //       // });
    //       // cartDiv.appendChild(wishlistclick2)

    //       const cartIcon = document.createElement('span');
    //       cartIcon.classList.add('tooltip');
    //       cartIcon.innerHTML = '<i class="fa-solid fa-cart-plus"></i>';

    //       const cartText = document.createElement('span');
    //       cartText.textContent = 'Add to cart ';

    //       const cartLogo = document.createElement('i');
    //       cartLogo.classList.add('fa-brands', 'fa-opencart');

    //       cartText.appendChild(cartLogo);
    //       cartDiv.appendChild(cartIcon);
    //       cartDiv.appendChild(cartText);

    //       row.appendChild(wishlistDiv);
    //       row.appendChild(cartDiv);


    //       cardBody.appendChild(title);
    //       cardBody.appendChild(image);
    //       cardBody.appendChild(brand);

          
    //       cardBody.appendChild(row2);
    //       row2.appendChild(price);
    //       row2.appendChild(size);
          
    //       cardBody.appendChild(row);
    //       card.appendChild(cardBody);
    //       clothesContainer.appendChild(card);


    //       cartDiv.addEventListener('click',function addtocart(){
            
    //       })
                   
    //     });
    //   }
    // })
    // .catch(error => {
    //   console.error('Error:', error);
    // });
// }

// fetchDataAndDisplay();


function addcart(id) {
  const cartItems = [];
  const xhttp = new XMLHttpRequest();

  xhttp.open("GET", `http://localhost:3000/clothes/${id}`);
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
                    window.location.href = 'wishlist.html';
                  }
      })
  };
}

function showBill() {
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
function addwish(id) {
  const cartItems = [];
  const xhttp = new XMLHttpRequest();

  xhttp.open("GET", `http://localhost:3000/clothes/${id}`);
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
          showBill();
        }
      };

      xhttpAdd.send(JSON.stringify(itemDetails));
      Swal.fire({
        icon: 'success',
        title: "Item added",
        timer: 10000,
        showConfirmButton: true,
        confirmButtonText: 'View wishlist',
        showCancelButton: true, // Add showCancelButton option
        cancelButtonText: 'Continue Shopping',
        willOpen: () => {

        }
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = 'wishlist.html';
        }
      });
    }
  };
}

function showBill() {
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

