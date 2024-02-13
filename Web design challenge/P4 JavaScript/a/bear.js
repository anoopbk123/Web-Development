let bear = {
    sound: "roar",
    ror(){
        console.log(this.sound);
    }
}
bear.sound = 'grunt'
let bearSound = bear.ror
bearSound()