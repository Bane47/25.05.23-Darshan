httpRequest = (id, para) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", `http://localhost:3000/section-1-cards/${id}`);
    xhttp.setRequestHeader("content-type", "JSON-application");
    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const objects = JSON.parse(this.responseText);
            console.log(this.responseText);
            html = objects.paragraph;
            console.log(html);
            document.getElementById(para).innerHTML = html;


        }
    }
}

Grow=()=>{
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET","http://localhost:3000/Grow");
    xhttp.setRequestHeader("Content-type","JSON-application");
    xhttp.send();

    xhttp.onreadystatechange=function(){
        if(this.readyState==4&&this.status==200){
            const objects =JSON.parse(this.responseText);
           
            // var Grow = document.getElementById("Grow");
            var htmlString="";
            for(let object of objects){


                htmlString += `<div class="col-sm-3">
                <div class="card">
                <img class="col-lg-6 mx-auto" src="${object.image}" alt="">

                  <div class="card-body">
                    <h5 class="card-title">${object.name}</h5>
                    <div class="row">
                <p class="col-lg-6">Cost</p>
                <p class="col-lg-6">${object.cost}</p>
            </div>
                    <a href="#" class="btn btn-primary">Add to cart</a>
                  </div>
                </div>
              </div>
              `
                // creating a card element 
                // var row = document.createElement("div");
                // row.classList.add("row");
                
                // var secondrow = document.createElement("div");
                // secondrow.classList.add("col-lg-3");
                
                // var card = document.createElement("div");
                // card.classList.add("card");
                
                // var image = document.createElement("img");
                // image.classList.add("col-lg-6", "col-sm-6", "col-md-6");
                // image.setAttribute('src', `${object.image}`);
                
                // var cardBody = document.createElement("div");
                // cardBody.classList.add("card-body");
                
                // var cardTitle = document.createElement("h1");
                // cardTitle.classList.add("card-title");
                // cardTitle.textContent = `${object.name}`;
                
                // var innerRow = document.createElement("div");
                // innerRow.classList.add("row");
                
                // var p1 = document.createElement("p");
                // var p2 = document.createElement("p");
                // p1.classList.add("card-text", "col-lg-6", "col-md-6", "col-sm-6");
                // p1.textContent = "Cost";
                // p2.classList.add("card-text", "col-lg-6", "col-md-6", "col-sm-6");
                // p2.textContent = `${object.cost}`;
                
                // var buttonDiv = document.createElement("div");
                // buttonDiv.classList.add("col-lg-3", "col-md-3", "col-sm-3", "mx-auto");
                
                // var anchor = document.createElement("a");
                // anchor.classList.add("btn", "btn-primary");
                // anchor.textContent = "Add to cart";
                
                // row.appendChild(secondrow);
                // secondrow.appendChild(card);
                // card.appendChild(image);
                // card.appendChild(cardBody);
                // cardBody.appendChild(cardTitle);
                // cardBody.appendChild(innerRow);
                // innerRow.appendChild(p1);
                // innerRow.appendChild(p2);
                // cardBody.appendChild(buttonDiv);
                // buttonDiv.appendChild(anchor);
                
                // Grow.appendChild(row);
                

//                 var row = document.createElement("div");
// row.classList.add("row");

// for (var i = 0; i < 3; i++) {
//   var col = document.createElement("div");
//   col.classList.add("col-lg-4", "col-md-6", "col-sm-12");

//   var card = document.createElement("div");
//   card.classList.add("card");

//   var image = document.createElement("img");
//   image.classList.add("img-fluid");
//   image.setAttribute("src", `${object.image}`);
//   image.style.margin = "auto";

//   var cardBody = document.createElement("div");
//   cardBody.classList.add("card-body");

//   var cardTitle = document.createElement("h1");
//   cardTitle.classList.add("card-title");
//   cardTitle.textContent = `${object.name}`;

//   var buttonDiv = document.createElement("div");
//   buttonDiv.classList.add("text-center");

//   var anchor = document.createElement("a");
//   anchor.classList.add("btn", "btn-primary");
//   anchor.textContent = "Add to Cart";

//   row.appendChild(col);
//   col.appendChild(card);
//   card.appendChild(image);
//   card.appendChild(cardBody);
//   cardBody.appendChild(cardTitle);
//   cardBody.appendChild(buttonDiv);
//   buttonDiv.appendChild(anchor);
// }

// // Append the row to a container element on the page
// var container = document.getElementById("container");
// container.appendChild(row);


// var row = document.createElement("div");
// row.classList.add("row");

// for (var i = 0; i < 3; i++) {
//   var col = document.createElement("div");
//   col.classList.add("col-lg-4", "col-md-6", "col-sm-12");

//   var card = document.createElement("div");
//   card.classList.add("card");

//   var image = document.createElement("img");
//   image.classList.add("col-lg-6", "col-sm-6", "col-md-6");
//   image.setAttribute("src", `${object.image}`);

//   var cardBody = document.createElement("div");
//   cardBody.classList.add("card-body");

//   var cardTitle = document.createElement("h1");
//   cardTitle.classList.add("card-title");
//   cardTitle.textContent = `${object.name}`;

//   var innerRow = document.createElement("div");
//   innerRow.classList.add("row");

//   var p1 = document.createElement("p");
//   var p2 = document.createElement("p");
//   p1.classList.add("card-text", "col-lg-6", "col-md-6", "col-sm-6");
//   p1.textContent = "Cost";
//   p2.classList.add("card-text", "col-lg-6", "col-md-6", "col-sm-6");
//   p2.textContent = `${object.cost}`;

//   var buttonDiv = document.createElement("div");
//   buttonDiv.classList.add("text-center");

//   var anchor = document.createElement("a");
//   anchor.classList.add("btn", "btn-primary");
//   anchor.textContent = "Add to Cart";

//   row.appendChild(col);
//   col.appendChild(card);
//   card.appendChild(image);
//   card.appendChild(cardBody);
//   cardBody.appendChild(cardTitle);
//   cardBody.appendChild(innerRow);
//   innerRow.appendChild(p1);
//   innerRow.appendChild(p2);
//   cardBody.appendChild(buttonDiv);
//   buttonDiv.appendChild(anchor);
// }

// // Append the row to a container element on the page
// var container = document.getElementById("container");
// container.appendChild(row);

            }
            $("#Grow").html(htmlString);
            

        }
    }
}
Grow();