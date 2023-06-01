function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var countryCode = document.forms["contactForm"]["country-code"].value;
    var phoneNumber = document.forms["contactForm"]["phone-number"].value;
    var message = document.forms["contactForm"]["message"].value;
    var captcha = grecaptcha.getResponse();
  
    if (name == "") {
      alert("Name must be filled out");
      return false;
    }
  
    if (email == "") {
      alert("Email must be filled out");
      return false;
    }
  
    if (countryCode == "") {
      alert("Country code must be selected");
      return false;
    }
  
    if (phoneNumber == "") {
      alert("Phone number must be filled out");
      return false;
    }
  
    if (message == "") {
      alert("Message must be filled out");
      return false;
    }
  
    if (captcha == "") {
      alert("reCAPTCHA must be checked");
      return false;
    }
  }
  