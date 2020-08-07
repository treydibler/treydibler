<template>
    <div class="columns is-slide-down is-mobile is-centered m-0 p-0" style="position: absolute; top: 0px; bottom: 0px; left: 0px; right: 0px; z-index: 1 !important;">
        <div class="column is-one-third-desktop is-mobile m-0 p-0 px-3">
            <div class="columns is-centered mx-0 px-0" style="margin-top: 10vh;">
                <div class="column is-fullwidth has-text-centered m-0 p-0 px-2">
                    <img class="mx-2" src="/img/Logo05.png" style="height: 200px;" />
                    <br />
                    <span class="has-text-white font-start is-size-1">TREY DIBLER</span>
                </div>
            </div>
            <div class="columns  is-centered mx-0 px-0 mt-3">
                <div class="column is-fullwidth has-text-centered m-0 p-0">
                    <span v-on:click="onStart" class="font-start is-size-3 is-blinking" style="cursor: pointer !important;">START</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import * as _ from 'lodash';
    import { howl } from 'howler';
    import { SoundService } from '../services/SoundService.js';

    export default {
        name: 'Index',
        components: {

        },
        data: function () {
            return {
                Fire: null,
                SoundService: null,
            }
        },
        computed: {
            _() {
                return _;
            }
        },
        methods: {
            onStart() {
                let self = this;
                if (self.SoundService !== null) {
                    self.SoundService.start();
                }

                var s = document.body.style;
                s.opacity = 1;
                (function fade() {
                    (s.opacity -= .1) < 0 ? _.noop() : setTimeout(fade, 40);
                })();

                setTimeout(function () {
                    self.$router.push({ name: 'Profile' });
                    s.opacity = 1;
                }, 1000);
            },
            getSettings() {
                let self = this;

                return {
                    Audio: true
                }
            },
            renderFire() {
                let self = this;

                var canvas = document.getElementById('canvas');

                if (canvas === null) {
                    canvas = document.createElement('canvas');
                    canvas.setAttribute('id', 'canvas');
                    canvas.setAttribute('style', 'position: absolute; bottom: 0px; z-index: 0 !important; bottom: 0px;');
                    document.body.appendChild(canvas);
                }
                else {
                    canvas.style.visibility = 'visible';
                }

                var script = document.getElementById('fire');

                if (script === null) {
                    script = document.createElement('script');
                    script.setAttribute('id', 'fire');
                    script.setAttribute('src', './js/fire.js');
                    document.body.appendChild(script);
                }
            }
        },
        mounted: async function () {
            let self = this;
            self.$nextTick(async function () {
                self.renderFire();

                let settings = self.getSettings();

                if (settings.Audio) {
                    self.SoundService = new SoundService();
                    self.SoundService.intro();
                }

                window.addEventListener('keyup', function (event) {
                    switch (event.keyCode) {
                        case 13: //Enter
                            if (typeof (self.onStart) === 'function') {
                                self.onStart();
                            }
                            break;
                        case 32: //Space
                            if (typeof (self.onStart) === 'function') {
                                self.onStart();
                            }
                            break;
                    }
                });
            });
        },
        destroyed: function () {
            let self = this;
            let canvas = document.getElementById('canvas');
            if (canvas !== null) {
                canvas.style.visibility = 'hidden';
            }
        }
    }
</script>
<style>

</style>