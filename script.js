document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Fetch form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    // Send email using a hypothetical email sending function
    sendEmail(name, email, message);
  
    // Reset form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  });
  
  function sendEmail(name, email, message) {
    // Implement your logic to send the email here
    // This is just a placeholder function
    console.log("Sending email...");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
  }
  