function addRow() {
    var table = document.getElementById("contacts");
    var row = table.insertRow(-1);
    var name = row.insertCell(0);
    var email = row.insertCell(1);
    var phone = row.insertCell(2);
    var message = row.insertCell(3);
    var action = row.insertCell(4);
    name.innerHTML = '<input type="text" name="name[]" required>';
    email.innerHTML = '<input type="email" name="email[]" required>';
    phone.innerHTML = '<input type="tel" name="phone[]" required>';
    message.innerHTML = '<textarea name="message[]" required></textarea>';
    action.innerHTML = '<button type="button" onclick="deleteRow(this)">Delete</button>';
}

function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function submitForm() {
    var contacts = document.getElementById("contacts").rows;
    var table = "<table>";
    table += "<thead><tr><th>Name</th><th>Email</th><th>Phone</th><th>Message</th></tr></thead><tbody>";
    for (var i = 1; i < contacts.length; i++) {
        table += "<tr>";
        table += "<td>" + contacts[i].cells[0].firstChild.value + "</td>";
        table += "<td>" + contacts[i].cells[1].firstChild.value + "</td>";
        table += "<td>" + contacts[i].cells[2].firstChild.value + "</td>";
        table += "<td>" + contacts[i].cells[3].firstChild.value + "</td>";
        table += "</tr>";
    }
    table += "</tbody></table>";
    document.getElementById("contact-table").innerHTML = table;
    document.getElementById("contact-form").reset();
    return false;
}
document.getElementById("contact-form").addEventListener("submit", function(event) {
event.preventDefault();
submitForm();
});
