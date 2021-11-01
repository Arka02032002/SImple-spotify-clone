let tracks = [
  {
    songName: "Alone 2",
    songId: "track-1",
    songUrl: "./static/songs/Alone 2- Alan Walker.mp3",
  },
  {
    songName: "On My Way",
    songId: "track-2",
    songUrl: "./static/songs/On My Way - Farruko.mp3",
  },
  {
    songName: "Different World",
    songId: "track-3",
    songUrl: "./static/songs/Different World - Alan Walker.mp3",
  },
  {
    songName: "Legends Never Die",
    songId: "track-4",
    songUrl: "./static/songs/Legends Never Die - League of Legends.mp3",
  },
  {
    songName: "Ignite",
    songId: "track-5",
    songUrl: "./static/songs/Ignite - K-391.mp3",
  },
  {
    songName: "Spectre",
    songId: "track-6",
    songUrl: "./static/songs/The Spectre - Alan Walker.mp3",
  },
  {
    songName: "Lily",
    songId: "track-7",
    songUrl: "./static/songs/Lily - Alan Walker.mp3",
  },
  {
    songName: "Faded",
    songId: "track-8",
    songUrl: "./static/songs/Faded - Alan Walker.mp3",
  },
  {
    songName: "Darside",
    songId: "track-9",
    songUrl: "./static/songs/Darkside-Alan Walker.mp3",
  },
  {
    songName: "Diamond Heart",
    songId: "track-10",
    songUrl: "./static/songs/Diamond Heart - Sophia Somajo.mp3",
  },
];
let pause = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -3 24 24" width="4vh" fill="currentColor"><path d="M2 0h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 2v14h2V2H2zm10-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 2v14h2V2h-2z"></path></svg>`;
let pause2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -3 24 24" width="3.6vh" fill="currentColor"><path d="M2 0h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 2v14h2V2H2zm10-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 2v14h2V2h-2z"></path></svg>`;
let play = `<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="-4 -3 24 24"
width="4vh"
fill="currentColor"
>
<path
  d="M13.82 9.523a.976.976 0 0 0-.324-1.363L3.574 2.128a1.031 1.031 0 0 0-.535-.149c-.56 0-1.013.443-1.013.99V15.03c0 .185.053.366.153.523.296.464.92.606 1.395.317l9.922-6.031c.131-.08.243-.189.325-.317zm.746 1.997l-9.921 6.031c-1.425.867-3.3.44-4.186-.951A2.918 2.918 0 0 1 0 15.03V2.97C0 1.329 1.36 0 3.04 0c.567 0 1.123.155 1.605.448l9.921 6.032c1.425.866 1.862 2.696.975 4.088-.246.386-.58.712-.975.952z"
></path>
</svg>`;
let play2 = `<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="-4 -3 24 24"
width="3.6vh"
fill="currentColor"
>
<path
  d="M13.82 9.523a.976.976 0 0 0-.324-1.363L3.574 2.128a1.031 1.031 0 0 0-.535-.149c-.56 0-1.013.443-1.013.99V15.03c0 .185.053.366.153.523.296.464.92.606 1.395.317l9.922-6.031c.131-.08.243-.189.325-.317zm.746 1.997l-9.921 6.031c-1.425.867-3.3.44-4.186-.951A2.918 2.918 0 0 1 0 15.03V2.97C0 1.329 1.36 0 3.04 0c.567 0 1.123.155 1.605.448l9.921 6.032c1.425.866 1.862 2.696.975 4.088-.246.386-.58.712-.975.952z"
></path>
</svg>`;
let masterplayer = document.getElementById("masterplayer");
let myseekbar = document.getElementById("seekbar");
let beat = document.getElementById("beat");
let songname = document.getElementById("songname");
let track = document.getElementsByClassName("track");
let oldplayer;
let audioElement = new Audio();
let footerController = document.getElementById("footerController");
let songIndex = 0;

masterplayer.addEventListener("click", () => {
  if (audioElement.paused) {
    audioElement.play();
    masterplayer.innerHTML = pause;
    beat.style.opacity = 1;
  } //else if(audioElement.currentTime===audioElement.duration) {
  //   masterplayer.innerHTML = play;
  //   beat.style.opacity = 0;
  else {
    audioElement.pause();
    masterplayer.innerHTML = play;
    beat.style.opacity = 0;
  }
});

const makeallplays = () => {
  Array.from(document.getElementsByClassName("status")).forEach((element) => {
    element.innerHTML = play2;
  });
};
Array.from(document.getElementsByClassName("track")).forEach((element) => {
  element.addEventListener("click", (e) => {
    makeallplays();
    // console.log(e.path[1].id);
    let index = e.path[1].id.replace("track", "") - 1;
    audioElement.src = tracks[index].songUrl;
    audioElement.currentTime = 0;
    audioElement.play();
    songIndex = index;
    footerController.style.display = "flex";
    songname.innerHTML = tracks[index].songName;
    masterplayer.innerHTML = pause;
    beat.style.opacity = 1;
    document.getElementById(`status${index + 1}`).innerHTML = pause2;
  });
});

// myseekbar.max=audioElement.durationS

audioElement.addEventListener("timeupdate", () => {
  let progress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100000
  );
  myseekbar.value = progress;
  if (audioElement.currentTime === audioElement.duration) {
    masterplayer.innerHTML = play;
    beat.style.opacity = 0;
  }
});

myseekbar.addEventListener("input", () => {
  audioElement.currentTime = parseInt(
    (myseekbar.value * audioElement.duration) / 100000
  );
});

document.getElementById("next").addEventListener("click", () => {
  myseekbar.value=0;
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  makeallplays();
  audioElement.src = tracks[songIndex].songUrl;
  audioElement.currentTime = 0;
  audioElement.play();
  songname.innerHTML = tracks[songIndex].songName;
  masterplayer.innerHTML = pause;
  beat.style.opacity = 1;
  document.getElementById(`status${songIndex + 1}`).innerHTML = pause2;
});

document.getElementById("prev").addEventListener("click", () => {
  myseekbar.value=0;
  if (songIndex <= 0) {
    songIndex = 9;
  } else {
    songIndex -= 1;
  }
  makeallplays();
  audioElement.src = tracks[songIndex].songUrl;
  audioElement.currentTime = 0;
  audioElement.play();
  songname.innerHTML = tracks[songIndex].songName;
  masterplayer.innerHTML = pause;
  beat.style.opacity = 1;
  document.getElementById(`status${songIndex + 1}`).innerHTML = pause2;
});
