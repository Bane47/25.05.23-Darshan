
var amount = 0
function fetchDataAndDisplay() {
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://localhost:3000/cart");
  xhttp.send();

  xhttp.onload = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      const objects = JSON.parse(this.responseText);

      var html = "";
      amount = 0;
      for (let object of objects) {
        html += '<tr>';
        html += '<td>' + object.name + '</td>';
        html += '<td>' + object.price + '</td>';
        html += '</tr>';

        amount += parseFloat(object.price);
       
      }
      document.getElementById("itemBill").innerHTML = html;
      document.getElementById("amount").innerHTML = amount;

      console.log(amount)
      // Render PayPal button only if it hasn't been rendered before
    
        initPayPalButton(amount);   
    
    }
  }
}


fetchDataAndDisplay();


function initPayPalButton(x) {

  console.log(x)
  paypal.Buttons({
    style: {
      shape: 'rect',
      color: 'gold',
      layout: 'vertical',
      label: 'paypal',
      
    },

    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [{"amount":{"currency_code":"USD","value":x}}]
      });
    },

    onApprove: function(data, actions) {
      return actions.order.capture().then(function(orderData) {
        
        // Full available details
        console.log()
        console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

        // Show a success message within this page, for example:
        const element = document.getElementById('paypal-button-container');
        element.innerHTML = '';
        element.innerHTML = '<h3 style="color: green;">Successfully paid!</h3>';

        // Or go to another URL:  actions.redirect('thank_you.html');
        
      });
    },

    onError: function(err) {
      console.log(err);
    }
  }).render('#paypal-button-container');
}
