function calculateTotal() {
            
 var priceInput = document.getElementById("price").value;
 var quantityInput = document.getElementById("quantity").value;

           
 var price = parseFloat(priceInput);
 var quantity = parseInt(quantityInput);

            
 if (priceInput == "" || price <= 0) {
     alert("Please enter a valid price.");
     return;
 }

 if (quantityInput == "" || quantity <= 0) {
     alert("Please enter a valid quantity.");
     return;
 }

           
  var total = price * quantity;

  document.getElementById("total-price-heading").textContent = "Total Price: $" + total.toFixed(2);
        
    }
