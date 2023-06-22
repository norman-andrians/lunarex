const rootvar = document.querySelector(":root");

const clock = document.getElementById("time-clock");
const datel = document.getElementById("time-date");
const background = document.querySelector(".main-background");

function getTime() {
    const date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;

    return `${h}:${m}`
}

function getDate() {
    const date = new Date();

    return date.toDateString();
}

window.addEventListener('mousemove', (e) => {
    const decrease = 20;
    const scale = parseFloat(getComputedStyle(rootvar).getPropertyValue('--background-scale'));

    const x = ((window.innerWidth / 2) - e.pageX) / decrease;
    const y = ((window.innerHeight / 2) - e.pageY) / decrease;

    background.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
});

setInterval(() => {
    clock.textContent = getTime();
}, 100);

datel.textContent = getDate();