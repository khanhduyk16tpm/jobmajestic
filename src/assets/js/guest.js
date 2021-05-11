
var signUpToggle = new PasswordToggle(".new-password",{
    onOn: function(s) {
        s.classList.add("btn"),
        s.innerHTML = '<i class="bi bi-eye-slash-fill"></i>'
    },
    onOff: function(s) {
        s.classList.add("btn"),
        s.innerHTML = '<i class="bi bi-eye-fill"></i>'
    }
})
  , loginToggle = new PasswordToggle(".current-password",{
    onOn: function(s) {
        s.classList.add("btn"),
        s.innerHTML = '<i class="bi bi-eye-slash-fill"></i>'
    },
    onOff: function(s) {
        s.classList.add("btn"),
        s.innerHTML = '<i class="bi bi-eye-fill"></i>'
    }
})
  , forms = document.querySelectorAll(".signupform");
forms.forEach((function(s) {
    s.addEventListener("submit", (function() {
        s.signupbtn.disabled = !0
    }
    ))
}
));

