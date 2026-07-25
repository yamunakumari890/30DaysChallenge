

function showTime(){

  const now = new Date()

  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

 let greeting = "";

    if (hours >= 5 && hours < 12) {
        greeting = "🌅 Good Morning";
    }
    else if (hours >= 12 && hours < 17) {
        greeting = "☀️ Good Afternoon";
    }
    else {
        greeting = "🌙 Good Evening";
    }

  let period = "AM";

  if(hours >= 12){
    period = "PM";
  }

  hours = hours % 12;

  if(hours == 0){
    hours = 12;
}

hours = String(hours).padStart(2,'0');

 const customFormat = `${hours}:${minutes}:${seconds} ${period}`;

 document.getElementById("greeting").innerText = greeting;
document.getElementById("clock").innerText = customFormat;
    
}
showTime();

setInterval(showTime, 1000);
