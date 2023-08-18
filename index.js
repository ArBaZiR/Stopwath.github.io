//

function Stopwath() {
  //
  let millisecond = document.querySelector(".stopwath__millisecond");
  let seconds = document.querySelector(".stopwath__second");
  let minuts = document.querySelector(".stopwath__minuts");
  let hours = document.querySelector(".stopwath__hour");

  let milsec = 0;
  let sec = 0;
  let min = 0;
  let hour = 0;

  function ClearNum() {
    milsec = 0;
    sec = 0;
    min = 0;
    hour = 0;
    millisecond.textContent = "00";
    seconds.textContent = "00";
    minuts.textContent = "00";
    hours.textContent = "00";
  }

  document.querySelector(".start-stopwath").onclick = () => {
    if (document.querySelector(".start-stopwath").classList.toggle("active")) {
      document.querySelector(".start-stopwath").innerText = "Stop";
      interval = setInterval(() => {
        milsec++;
        millisecond.textContent = milsec;
        if (milsec < 10) {
          millisecond.textContent = "0" + milsec;
        }

        if (milsec == 99) {
          milsec = 0;
          sec++;
          seconds.textContent = sec;
        }

        if (sec < 10) {
          seconds.textContent = "0" + sec;
        }
        //
        if (sec == 59) {
          sec = 0;
          min++;
          minuts.textContent = min;
        }
        /////
        if (min < 10) {
          minuts.textContent = "0" + min;
        }
        //
        if (min == 59) {
          min = 0;
          hour++;
          hours.textContent = hour;
        }
        /////
        if (hour < 10) {
          hours.textContent = "0" + hour;
        }
        //
        if (hour == 59) {
          ClearAll();
          clearInterval(interval);
        }
      }, 10);
      //
      document.querySelector(".circle-btn").onclick = () => {
        let millicecond = document.querySelector(
          ".stopwath__millisecond"
        ).textContent;
        let seconds = document.querySelector(".stopwath__second").textContent;
        let minuts = document.querySelector(".stopwath__minuts").textContent;
        let hours = document.querySelector(".stopwath__hour").textContent;

        if ((milsec !== 0) || (sec !== 0) || (min !== 0) || (hour !== 0)) {
          StopwathCircle(millicecond, seconds, minuts, hours);
        }
      };
      //
      document.querySelector(".clear").onclick = () => {
        clearInterval(interval);
        ClearNum();
        document.querySelector(".start-stopwath").classList.remove("active");
        document.querySelector(".start-stopwath").innerText = "Start";
        document.querySelectorAll(".circle-time__block").forEach((el) => {
          el.remove();
        });
      };
      //
    } else {
      document.querySelector(".start-stopwath").innerText = "Start";
      clearInterval(interval);
    }
  };
}
Stopwath();

function StopwathCircle(milsec, sec, min, hour) {
  //
  let num = document.querySelectorAll(".circle-time__block").length;
  let circle = `
  <div class="circle-time__block">
    <div>
      <p class="circle">Circle ${1 + num}</p>
      <div class="circle-time">
         <div class="hour">${hour}</div>
      <p>:</p>
        <div class="min">${min}</div>
      <p>.</p>
        <div class="sec">${sec}</div>
    <p>,</p>
    <div class="millicecond">${milsec}</div>
      </div>
    </div>
    <div class="line"></div>
  </div>
  `;
  document.querySelector(".circle__block").innerHTML += circle;
}
