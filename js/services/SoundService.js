import { Howl } from 'howler';

export class SoundService {
    intro() {
        window.sound = new Howl({
            src: ['/sounds/intro.wav']
        });
        sound.play();
    }

    start() {
        window.sound = new Howl({
            src: ['/sounds/start.wav'],
            volume: 0.3
        });
        sound.play();
    }

    guile() {
        window.sound = new Howl({
            src: ['/sounds/guile.wav'],
            volume: 0.3,
            loop: true
        });
        sound.play();
    }

    tetris() {
        window.sound = new Howl({
            src: ['/sounds/tetris.wav'],
            volume: 0.3,
            loop: true
        });
        sound.play();
    }

    
}

SoundService.stop = function () {
    if (window.sound !== null && typeof (window.sound) !== 'undefined') {
        window.sound.stop();
    }
}