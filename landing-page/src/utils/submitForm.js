export default function submitForm(e) {
    e.preventDefault()

    const message = document.getElementById("error-message")
    const input = document.getElementById("form-input")

    message.textContent = input.value ? "" : "please enter a valid email address"

    input.value = ""
}