let date = new Date();
let calcBtn = document.getElementById("calc-btn");

calcBtn.addEventListener("click", function () {
  let inputYear = document.getElementById("year");
  let inputMonth = document.getElementById("month");
  let inputDay = document.getElementById("day");

  let labelTitle = document.getElementsByClassName("title");
  let labelAlert = document.getElementsByClassName("alert");

  if (inputYear.value > 2025 || inputMonth.value > 12 || inputDay.value > 30) {
    inputYear.style.border = "1px solid #ff5757";
    inputMonth.style.border = "1px solid #ff5757";
    inputDay.style.border = "1px solid #ff5757";

    for (const title of labelTitle) {
      title.style.color = "#ff5757";
    }
    for (const alert of labelAlert) {
      alert.style.display = "inline-block";
    }

    console.log("not valid date");
  } else {
    inputYear.style.border = "1px solid #000";
    inputMonth.style.border = "1px solid #000";
    inputDay.style.border = "1px solid #000";

    for (const title of labelTitle) {
      title.style.color = "#716f6f";
    }
    for (const alert of labelAlert) {
      alert.style.display = "none";
    }
    
    let userAge = {
      year: date.getFullYear() - inputYear.value,
      month: date.getMonth() + 1 - inputMonth.value,
      day: date.getDate() - inputDay.value,
    };

    if (userAge.day < 0) {
      userAge.month--;
      userAge.day += 30; 
    }
    if (userAge.month < 0) {
      userAge.year--;
      userAge.month += 12;
    }

    let userYear = document.getElementById("user-year");
    let userMonth = document.getElementById("user-month");
    let userDay = document.getElementById("user-day");

    setTimeout(() => {
      userYear.innerText = userAge.year;
    }, 200);
    
    setTimeout(() => {
      userMonth.innerText = userAge.month;
    }, 300);
    
    setTimeout(() => {
      userDay.innerText = userAge.day;
    }, 400);

    console.log(`${userAge.year} | ${userAge.month} | ${userAge.day}`);
  }
}); 
