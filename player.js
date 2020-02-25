window.player = {
    cover: document.querySelector(".card-image"),
    title: document.querySelector(".card-content h5"),
    artist: document.querySelector(".artist"),
    audio: document.querySelector("audio"),
        audioData:audios,
        currrentAdudio:{},
        currrentPlaying:0,
    start(){

        this.update();

        this.audio.onended = () => this.next();
        },
        next(){
            this.currrentPlaying++
            this.update()
            this.audio.play();
        },
        update(){
        this.currrentAdudio = this.audioData[this.currrentPlaying];

        this.cover.style.background = `url(${path(
            this.currrentAdudio.cover
            )}) no-repeat center center / cover`;
        this.title.innerText = this.currrentAdudio.title;
        this.artist.innerText = this.currrentAdudio.artist;
        this.audio.src = path(this.currrentAdudio.file)
        }
    };
    

