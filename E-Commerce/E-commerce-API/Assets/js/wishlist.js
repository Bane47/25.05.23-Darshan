function fetchDataAndDisplay(){
    console.log("Hello")
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET","http://localhost:3000/wishlist");
    xhttp.send();

    xhttp.onload= function(){ 
        if(this.readyState==4 && this.status==200){
            console.log(this.responseText);
            const objects = JSON.parse(this.responseText);
            
            var html = "";
            var add = 0;
            for(let object of objects){
            
        html +='<tr>'
        html +='<td>'+object.name+'</td>'
        html +='<td>'+object.price+'</td>'
        html +='</tr>'

        
            }
                        document.getElementById("bill").innerHTML = html;
        }
    }
    // cart.js

}
fetchDataAndDisplay();
