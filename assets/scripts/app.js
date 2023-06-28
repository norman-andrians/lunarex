const rootvar = $(":root");

function getTime() {
    const date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;

    return `${h}:${m}`;
}

function getDate() {
    const date = new Date();

    return date.toDateString();
}

// aka: window.addEventListener('mousemove', (e) => {...})
$(document).on('mousemove', (e) => {
    const decrease = 20;
    const scale = parseFloat(rootvar.css('--background-scale'));

    const x = ((this.innerWidth / 2) - e.pageX) / decrease;
    const y = ((this.innerHeight / 2) - e.pageY) / decrease;

    // console.log(`background offset = ${x}, ${y}`);

    $(".main-background").css('transform', `translate(${x}px, ${y}px) scale(${scale})`);
});

setInterval(() => {
    $("#time-clock").text(getTime());
}, 100);

$("#time-date").text(getDate());