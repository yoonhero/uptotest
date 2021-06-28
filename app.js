const countDate = new Date("June 30, 2021 09:30:00").getTime();

function newYear() {
  let now = new Date().getTime();
  let gap = countDate - now;

  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 24;
  let d = Math.floor(gap / day);
  let h = Math.floor((gap % day) / hour);
  let m = Math.floor((gap % hour) / minute);
  let s = Math.floor((gap % minute) / second);

  document.getElementById("day").innerText = d;
  document.getElementById("hour").innerText = h;
  document.getElementById("minute").innerText = m;
  document.getElementById("second").innerText = s;
  document.querySelector(".seconds").innerText = `${Math.floor(gap / 1000)}초`;
}

setInterval(function () {
  newYear();
}, 1000);
