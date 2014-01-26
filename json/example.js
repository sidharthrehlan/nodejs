

var addressSamp = {
  "sampleAddress": [
    {
      "firstName": "sidharth",
      "lastName": "rehlan",
      "addressLine1": "MedHelp",
      "addressLine2": "1 West Lakeshore Drive",
      "zip": "35242",
      "phone": "(205) 930-2950",
      "state": "AL",
      "city" : "Birmingham",
      "email": "srehlan@sapient.com",
      "use_as_billing": true
    }
   ]
};
  $(addressSamp.sampleAddress[0]).each(function(key,value){
    $("form.checkout-shipping").find("[name$='_firstName']").val(value.firstName);
    $("form.checkout-shipping").find("[name$='_lastName']").val(value.lastName);
    $("form.checkout-shipping").find("[name$='_address1']").val(value.addressLine1);
    $("form.checkout-shipping").find("[name$='_address2']").val(value.addressLine2);
    $("form.checkout-shipping").find("[name$='_state']").val(value.state);
    $("form.checkout-shipping").find("[name$='_city']").val(value.city);
    $("form.checkout-shipping").find("[name$='_zip']").val(value.zip);
    $("form.checkout-shipping").find("[name$='_emailAddress']").val(value.email);
    $("form.checkout-shipping").find("[name$='_phone']").val(value.phone);
    $("form.checkout-shipping").find("[name$='_useAsBillingAddress']").val(value.use_as_billing);
  })
  



