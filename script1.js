function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
    var table = "<table>";
    table += "<tr><td>Name:</td><td>" + name + "</td></tr>";
    table += "<tr><td>Email:</td><td>" + email + "</td></tr>";
    table += "<tr><td>Phone:</td><td>" + phone + "</td></tr>";
    table += "<tr><td>Message:</td><td>" + message + "</td></tr>";
    table += "</table>";
    document.getElementById("contact-form").innerHTML = table;
    return false;
}
