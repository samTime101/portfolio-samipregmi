function save_to_localstorage(name_value, email_value, message_value) {

    if (!name_value || !email_value || !message_value) {
        alert("All fields are required!");
        return;
    }

    localStorage.setItem("name", name_value);
    localStorage.setItem("email", email_value)
    localStorage.setItem("message", message_value)
}