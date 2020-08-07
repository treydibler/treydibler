<template>
    <div class="columns m-0 p-0" style="position: absolute; top: 0px; bottom: 0px; left: 0px; right: 0px; z-index: 1 !important;">
        <div class="column is-slide-in-left is-one-third-desktop m-0 p-0 px-3 mt-3">
            <span class="is-left mx-1 has-text-white">
                <i v-if="Audio" v-on:click="toggleAudio" class="fas fa-volume-mute" style="cursor: pointer !important"></i>
                <i v-else class="fas fa-volume-up" v-on:click="toggleAudio" style="cursor: pointer !important"></i>
            </span>
            <div class="columns is-centered mx-0 px-0" style="margin-top: 10vh;">
                <div class="column is-fullwidth has-text-centered m-0 p-0 px-2" style="border: 5px solid white;">
                    <img src="/img/Logo01.png" class="is-glitch" style="max-width: 20vh;"> <img src="/img/Logo01.png" style="max-width: 20vh;">
                </div>
            </div>
            <div class="columns is-centered mx-0 px-0 my-3">
                <div class="column is-fullwidth has-text-centered m-0 p-0">
                    <span class="has-text-white font-start is-size-1">TREY DIBLER</span>
                </div>
            </div>
            <div class="columns is-centered mx-0 px-0 my-3">
                <div class="column is-fullwidth has-text-centered m-0 p-0">
                    <img src="/img/flag.png" style="height: 25px;" />
                    <br />
                    <span class="has-text-white font-start is-size-4">USA</span>
                </div>
            </div>
            <div class="columns is-centered mx-0 px-0 my-3 mt-5">
                <div class="column is-fullwidth has-text-centered m-0 p-0">
                    <a target="_blank" rel="noreferrer noopener" href="https://www.github.com/treydibler" class="has-text-white font-start is-size-4"><i class="fab mx-2 mb-5 fa-github"></i>GITHUB<i class="px-2 fa fa-external-link-alt"></i></a>
                </div>
            </div>
        </div>
        <div class="column is-two-thirds-desktop m-0 p-0 px-3">
            <div class="columns is-slide-in is-centered mx-0 px-0 mt-4">
                <div class="column is-fullwidth has-text-centered m-0 p-0">
                    <span class="has-text-white font-start is-size-1">ABOUT</span>
                </div>
            </div>
            <div class="columns is-centered mx-0 px-0 my-3">
                <div class="column is-slide-in is-fullwidth has-text-centered m-0 p-0 p-4 my-3" style="border: 5px solid white;">
                    <div class="columns m-0 p-0 has-text-centered">
                        <div class="column m-0 p-0 is-fullwidth">
                            <span class="has-text-grey-light font-start is-small is-size-7">This page primarily functions as my resume until more is ready to be published.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="columns is-centered mx-0 px-0 my-3">
                <div class="column is-slide-in is-fullwidth has-text-centered m-0 p-0 p-4 my-3" style="border: 5px solid white;">
                    <div class="columns m-0 p-0 has-text-centered">
                        <div class="column m-0 p-0 is-fullwidth">
                            <span class="has-text-white font-start is-size-6">I write code, architect systems, and chain cryptography together to build secure, intuitive applications that scale and perform efficiently. I like to write once and run <i>almost</i> everywhere, behind the safety of a browser for convenience and security.<br /><br />The easiest way to make software insecure is to make it inconvenient.</span>
                        </div>
                    </div>
                    <div class="columns m-0 p-0 has-text-right">
                        <div class="column m-0 p-0 is-fullwidth">
                            <span class="has-text-grey-dark font-start is-small">buzzwords</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="columns is-centered mx-0 px-0 my-3" style="margin-bottom: 254px;">
                <div class="column is-slide-in is-fullwidth has-text-centered m-0 p-0 p-4 my-3">
                    <div class="columns m-0 p-0 has-text-centered">
                        <div class="column m-0 p-0 is-fullwidth">
                            <span class="has-text-white font-start is-size-3">Favorite Technology</span>
                        </div>
                    </div>
                    <hr class="has-text-white"/>
                    <div class="columns m-0 p-0 has-text-centered">
                        <div class="column m-0 p-0 is-one-third">
                            <span class="has-text-white font-start is-size-6">
                                C#, Python, Javascript, Lua
                            </span>
                        </div>
                        <div class="column m-0 p-0 is-one-third">
                            <span class="has-text-white font-start is-size-6">
                                WebAuthN, OAuth, WebCrypto, WebSockets, WebRTC
                            </span>
                        </div>
                        <div class="column m-0 p-0 is-one-third">
                            <span class="has-text-white font-start is-size-6">
                                Redis, PostgreSQL, RabbitMQ, Docker
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="columns is-slide-in is-breathing is-centered mx-0 px-0 mt-3">
                <img class="is-slide-in" src="/img/dangerous.png" style="position: static; bottom: 0px; z-index: 0 !important; bottom: 0px" />
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
                SoundService: null,
                Audio: false
            }
        },
        methods: {
            toggleAudio: function () {
                let self = this;
                self.Audio = !self.Audio;
                if (!self.Audio) {
                    SoundService.stop();
                }
                else {
                    self.SoundService.guile();
                }
            },

        },
        computed: {
            _(){
                return _;
            }
        },
        mounted: async function () {
            let self = this;
            self.$nextTick(async function () {
                self.SoundService = new SoundService();
                if (self.Audio) {
                    self.SoundService.guile();
                }
            });
        },
        destroyed: function () {
            SoundService.stop();
        }
    }
</script>
<style>

</style>