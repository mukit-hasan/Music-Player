        // all your music title will go here
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

        const cTime = document.getElementById('current-time')
        const tTime = document.getElementById('total-time')
        
        // minutes and second couner


        function convertMinutesSeconds(totalSeconds) {
            if (totalSeconds < 0) return;
            let minutes = Math.floor(totalSeconds / 60);
            let remainingSeconds = totalSeconds % 60;
            let formattedMinutes = minutes < 10 ? `0${minutes}`: minutes;
            let formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}`: remainingSeconds;
            return `${formattedMinutes}:${formattedSeconds}`;
        }


        function setcTime(){
            cTime.innerText = convertMinutesSeconds(Math.floor(audio.currentTime))
            tTime.innerText = convertMinutesSeconds(Math.floor(audio.duration))

        }

        // body.addEventListener('onload', () => {
        //     console.log('load')
        // })

        // for (let i in musicList.length) {
        //     plist.innerHTML += `<i> ${musicList[i]} </i>`
        //     console.log(musicList[i])

        // }

        let isplaying = false

        let num = 2;
        loadsong(musicList[num]);
        console.log('ck')
        function loadsong(song) {
            audio.src = `${song}`
    
        }
        audio.play()
        console.log(audio)
        prev.addEventListener('click', () => {
            num--
            if (num < 0) {
                num = musicList.length -1
            }

            loadsong(musicList[num]);
            audio.play()
        })

        next.addEventListener('click', () => {
            num++
            if (num > musicList.length - 1) {
                num = 0
            }

            loadsong(musicList[num]);
            audio.play()

        })


        audio.play()

        play.addEventListener('click', ()=> {
            tTime.innerText = convertMinutesSeconds(Math.floor(audio.duration))

            if (isplaying) {
                audio.pause()
                title.innerText = `Currently there is nothing playing..`

                isplaying = false
            } else {
                audio.play()
                title.innerText = `Currently there is something playing..`
                isplaying = true
            }
        })


        setInterval(setcTime, 5)
