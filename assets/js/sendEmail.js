function sendMail(contactForm) {
    emailjs.send("service_jkj0b0d", "rosie", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function (response) {
            console.log("SUCCES", response);
        },
        function (error) {
            console.log("FAILED", error);
        }
    )
    return false;
}
