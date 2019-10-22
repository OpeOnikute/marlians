const queue = ["Gbese.m4a", "Ayiiii.m4a", "Egbe x1.m4a", "Inside Life.m4a", "Egbe x3.m4a", "Gbe Body e (Female).m4a", "Kuronbe.m4a", "Marlians.m4a"];
const interval = 30 * 1000; // 30 seconds
let timer;

function run () {
    const curr = queue.shift();

    changeButton("play");

    play(curr);
    queue.push(curr);

    timer = setTimeout(function() {
        run();
    }, interval);
}

function stopRunning () {
    changeButton("stop");
    clearTimeout(timer);
}

function play(sound) {
    var audioElem = new Audio(`sounds/${sound}`);
    audioElem.play();
}

function changeButton (state) {
    var playButton = document.getElementById("play-button");
    var pauseButton = document.getElementById("stop-button");
    switch(state) {
        case "play":
            playButton.style.display = "none";
            pauseButton.style.display = "inline-block";
            break;
        case "stop":
            playButton.style.display = "inline-block";
            pauseButton.style.display = "none";
            break;
        default:
            break;
    }
}