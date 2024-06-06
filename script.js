// Get the modal
const loginModal = document.getElementById("loginModal");
const signupModal = document.getElementById("signupModal");

// Get the button that opens the modal
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");

// Get the <span> element that closes the modal
const loginClose = document.getElementById("loginClose");
const signupClose = document.getElementById("signupClose");

// When the user clicks the button, open the modal
loginBtn.onclick = function() {
    loginModal.style.display = "block";
}

signupBtn.onclick = function() {
    signupModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
loginClose.onclick = function() {
    loginModal.style.display = "none";
}

signupClose.onclick = function() {
    signupModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === loginModal) {
        loginModal.style.display = "none";
    } else if (event.target === signupModal) {
        signupModal.style.display = "none";
    }
}
