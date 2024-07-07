let password = document.querySelector('input[name="password"]');
let show = document.querySelector('input[type="checkbox"]');
let state = {true: "text", false: "password" };

show.addEventListener('click', function (event) {
    password.type=state[event.target.checked];
});

