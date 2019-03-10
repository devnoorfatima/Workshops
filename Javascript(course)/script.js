let name = document.getElementById("shippingName");
let shippingZip = document.getElementById("shippingZip");

let billingName = document.getElementById("billingName");
let billingZip = document.getElementById("billingZip");

let checkbox = document.getElementById("same");


function copyingFunction() {
if (checkbox.checked){
    billingName.value = name.value;
    billingZip.value = shippingZip.value;
}else{
    billingName.value = "";
    billingZip.value = "";
}
};
