document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let formMessage = document.getElementById("formMessage");

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "⚠️ الرجاء تعبئة جميع الحقول";
        formMessage.style.color = "red";
    } else {
        formMessage.textContent = "✅ تم إرسال الرسالة بنجاح";
        formMessage.style.color = "green";
        this.reset();
    }
});
