
    const URL_APP = "https://script.google.com/macros/s/AKfycbxZIwtvci9EiC4iFOjSbDATZzzeZTfKbGcwwj2EerfTHfa3pmAOuNUJxBv-Xd8GqXwc/exec";

const form = document.querySelector("#form");

form.action = URL_APP;

function isFilled(details) {
  const {name, message } = details;
  if (!name || !message) return false;
  return true;
}

form.addEventListener("submit", async (ev) => {
  ev.preventDefault();

  const name = document.querySelector("[name=name]:checked");
  const message = document.querySelector("[name=message]");

  let details = {
    name: name ? name.value : '',
    message: message.value.trim(),
  };


  let formBody = [];
  for (let property in details) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");

 name.value = '';
  message.value = '';
  alert('Жауабыңызға рахмет!');

  // Деректерді серверге жіберу
  fetch(URL_APP, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    mode: "no-cors",
    body: formBody,
  }).catch((err) => {
    console.error('Error:', err);
    alert("Ошибка!");
  }).finally(() => {
    submitButton.disabled = false; // Жіберу батырмасын қайта қосу
  });
});












    document.addEventListener('DOMContentLoaded', function() {
    function updateCountdown() {
        const endDate = new Date("September 21, 2024 16:00:00").getTime();
        const now = new Date().getTime();
        const distance = endDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;

        if (distance < 0) {
            clearInterval(timerInterval);
            document.getElementById("days").innerText = "00";
            document.getElementById("hours").innerText = "00";
            document.getElementById("minutes").innerText = "00";
            document.getElementById("seconds").innerText = "00";
        }
    }

    const timerInterval = setInterval(updateCountdown, 1000);
    updateCountdown();
});





     function onEntry(entry) { 
      entry.forEach(change => { 
        if (change.isIntersecting) { 
         change.target.classList.add('element-show'); 
         
        } 
      }); 
    } 
        let options = { 
      threshold: [0.5] }; 
    let observer = new IntersectionObserver(onEntry, options); 
    let elements = document.querySelectorAll('.element-animation'); 
     
    for (let elm of elements) { 
      observer.observe(elm); 
    }










