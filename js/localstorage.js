function save_to_localstorage(name_value, email_value, message_value) {
    localStorage.setItem("name", name_value);
    localStorage.setItem("email", email_value)
    localStorage.setItem("message", message_value)
}