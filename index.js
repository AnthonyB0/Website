document.addEventListener("scroll", function () {
    // Slide Transition
    const names = document.getElementsByClassName('slide');
    const scrollPos = window.scrollY + window.innerHeight;

    for (let i = 0; i < names.length; i++) {
        // Introduce a delay for each subsequent element
        setTimeout(function(){
            if (scrollPos > names[i].offsetTop + names[i].offsetHeight / 2) {
                names[i].classList.add('active');
            }
        }, i * 1300); // 1300ms delay for each element
    }

    // Parallax Effect
    let offset = window.pageYOffset;
    let parallaxElements = document.getElementsByClassName('parallax');

    for (let element of parallaxElements) {
        element.style.backgroundPositionY = offset * 0.7 + "px";
    }
});

document.addEventListener("DOMContentLoaded", function() {
    let bars = document.querySelectorAll('.progress-bar');
    bars.forEach(function(bar) {
        let percent = bar.getAttribute('data-percent');
        let filled = bar.querySelector('.filled');
        filled.style.width = percent + '%';
    });
});
function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "anthony@barbaro.tech",
        Password : "8C6326BB7A0309C12D1FC294DB5FEEFD2CA9",
        SecureToken : "8fc2bb77-b410-4a99-8d72-5adce39450e0",
        To : 'anthonybarbaro40@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "Name: " + document.getElementById("name").value + "<br> Email: " + document.getElementById("email").value
        + "<br> Phone Number: " + document.getElementById("phone").value
        + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Message Sent Succesfully")
    );
}
document.querySelector('.menu-icon').addEventListener('click', function() {
    document.getElementById('mobileNav').classList.toggle('active');
});