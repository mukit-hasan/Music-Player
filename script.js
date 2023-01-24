// all your music title will go here
const musicList = new Array(
    'https://cdn.pixabay.com/download/audio/2022/05/27/audio_5b08ce8e20.mp3?filename=best-time-112194.mp3',
    'https://cdn.pixabay.com/download/audio/2022/05/27/audio_ed655fa73a.mp3?filename=fun-life-112188.mp3',
    'https://cdn.pixabay.com/download/audio/2022/02/07/audio_f972decc9f.mp3?filename=vlog-groovy-hip-hop-18304.mp3',
    'https://cdn.pixabay.com/download/audio/2021/09/13/audio_a1c2cf4513.mp3?filename=energetic-hip-hop-8303.mp3'
);

const plist = document.getElementById('music-list');
const audio = document.getElementById('audio')
const title = document.getElementById('music-title')

const play = document.getElementById('btn-play');
const prev = document.getElementById('btn-prev');
const next = document.getElementById('btn-next');

const body = document.body


// body.addEventListener('onload', () => {
//     console.log('load')
// })

// for (let i in musicList.length) {
//     plist.innerHTML += `<i> ${musicList[i]} </i>`
//     console.log(musicList[i])

// }
let num = 0;
loadsong(musicList[num]);

function loadsong(song) {
    title.innerText = `Currently ${song} is playing..`
    audio.src = `${song}`
    audio.play()
}

prev.addEventListener('click', () => {
    console.log('clicked')
})