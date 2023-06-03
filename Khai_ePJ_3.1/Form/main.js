document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get values from input fields
    var email = document.getElementById("registerEmail").value;
    var password = document.getElementById("registerPassword").value;
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var address = document.getElementById("address").value;
  
    // Validate input and handle registration
    if (email && password && firstName && lastName && phoneNumber && address) {
      // Handle registration logic here
      alert("Registration successful!");
      document.getElementById("registerForm").reset(); // Reset form
    } else {
      alert("Please fill in all fields!");
    }
  });
  
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get values from input fields
    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;
  
    // Validate input and handle login
    if (email && password) {
      // Handle login logic here
      alert("Login successful!");
      document.getElementById("loginForm").reset(); // Reset form
    } else {
      alert("Please fill in all fields!");
    }
  });