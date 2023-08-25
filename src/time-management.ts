
function toggleTimer(button: HTMLButtonElement, timer: HTMLElement, time: { counter: number, interval: NodeJS.Timeout }) {
  const status = button.className == "play_arrow" ? "pause" : "play_arrow";
  button.className = status;
  button.innerHTML = `<span class="material-symbols-outlined">${status}</span>`;
  if (status == "pause") {
    timer.textContent = secondConvert(time.counter);
    time.interval = setInterval(() => {
      time.counter++;
      timer.textContent = secondConvert(time.counter);
    }, 1000);
  }
  else {
    console.log("stopped timer");
    clearInterval(time.interval);
  }
}
function secondConvert(seconds: any) {
  const hours = Math.floor(seconds / 3600);
  seconds = seconds % 3600;
  let minutes: any = Math.floor(seconds / 60);
  seconds = seconds % 60;
  seconds = pad(seconds);
  minutes = pad(minutes);
  if (hours) return `${hours}:${minutes}:${seconds}`;
  return `${minutes}:${seconds}`;
}

function pad(num: number) {
  return num < 10 ? `0${num}` : num;
}
export { toggleTimer };
