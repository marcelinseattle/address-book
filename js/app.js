//business logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.addresses = [];
}

function Address(street, city, state, zipcode) {
  this.street = street;
  this.city = city;
  this.state = state;
  this.zipcode = zipcode;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}


Address.prototype.fullAddress = function(){
  return this.street + ", " + this.city + " " + this.state + " " + this.zipcode;
}

function resetFields() {
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input.new-street").val("");
    $("input.new-city").val("");
    $("input.new-state").val("");
    $("input.new-zipcode").val("");
}

// user interface logic
$(document).ready(function() {
  $("#add-address").click(function() {
    $("#new-addresses").append('<div class="new-address extra-address">' +
                                 '<div class="form-group">' +
                                   '<label for="new-street">Street</label>' +
                                   '<input type="text" class="form-control new-street">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-city">City</label>' +
                                   '<input type="text" class="form-control new-city">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-state">State</label>' +
                                   '<input type="text" class="form-control new-state">' +
                                 '</div>' +
                                '<div class="form-group">' +
                                  '<label for="new-zipcode">Zip Code</label>' +
                                  '<input type="text" class="form-control new-zipcode">' +
                                '</div>' +
                              '</div>') ;
  });
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    var inputtedStreet = $("input.new-street").val();
    var inpuutedCity = $("input.new-city").val();
    var inputtedState = $("input.new-state").val();
    var inputZipCode = $("input.new-zipcode").val();

    var newAddress = new Address(inputtedStreet, inpuutedCity, inputtedState, inputZipCode);

    newContact.addresses.push(newAddress);




    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").fadeIn();
      $("#show-contact").css("background-color", "lightblue");
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address){
        $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
      });
    });

    resetFields();
    $(".extra-address").remove();
  });
});
