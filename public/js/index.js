const weatherForm = document.querySelector("form");
const locationInput = document.querySelector("input"); 
const message1 = document.getElementById("message1");
const message2 = document.getElementById("message2");

message1.textContent = "";
message2.textContent = "";

weatherForm.addEventListener("submit", (e) => {
    e.preventDefault();

    message1.textContent = "Loading...";
    message2.textContent = "";

    fetch("http://localhost:3000/weather?address=" + locationInput.value)
    .then((res) => res.json())
    .then((data) => {
        if(data.error) {
            message1.textContent = data.error;
            return;
        }
        message1.textContent = data.location;
        message2.textContent = data.forecast;
    })

})