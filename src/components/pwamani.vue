<template>
    <div id="range">
        <!-- <label for="name">name</label>
        <input type="text" id="name" class="common" placeholder="name">
        <label for="short">short_name</label>
        <input type="text" id="short" class="common" placeholder="short_name">
        <select id="display" class="common">
            <option value="full">fullscreen</option>
            <option value="stand">standalone</option>
            <option value="mini">minimal-ui</option>
            <option value="browser">browser</option>
        </select> -->

        <div>
            <div class="wd">
                <label for="name" class="sizelab">name</label>
                <div id="text1">
                    <input type="text" id="name" placeholder="name" class="common">
                </div>
            </div>
            <div class="wd">
                <label for="short" class="sizelab">short_name</label>
                <div id="text2">
                    <input type="text" id="short" placeholder="short_name" class="common">
                </div>
            </div>
            <div class="wd">
                <label for="display" class="sizelab">display</label>
                <div>
                    <select id="display" class="common">
                        <option value="fullscreen">fullscreen</option>
                        <option value="standalone">standalone</option>
                        <option value="minimal-ui">minimal-ui</option>
                        <option value="browser">browser</option>
                    </select>
                </div>
            </div>
            <div class="wd">
                <label for="color" class="sizelab">background_color</label>
                <div>
                    <input type="color" id="color" class="common" placeholder="background_color">
                </div>
            </div>
            <div class="wd">
                <label for="theme" class="sizelab">theme_color</label>
                <div>
                    <input type="color" id="theme" class="common" placeholder="theme_color">
                </div>
            </div>
            <div class="wd">
                <label for="start" class="sizelab">start_url</label>
                <div>
                    <input type="text" id="starturl" class="common" placeholder="start_url">
                </div>
            </div>
            <div class="wd">
                <label for="icon" class="sizelab">icon</label>
                <div>
                    <input type="file" id="icon" class="common" placeholder="icon" multiple>
                </div>
            </div>
            
            <div class="wd">
                <a v-on:click="make" id="btn">json作成</a>
            </div>
        </div>
    </div>
</template>

<script>
import jszip from 'jszip'
import saveAs from 'file-saver'
const jimp = require('jimp')

export default {
    data(){
        return{
            img: '',
            data:''
        }
    },
    methods:{
        make(){
            let name = document.getElementById('name');
            let short = document.getElementById('short');
            let display = document.getElementById('display');
            let bgcolor = document.getElementById('color');
            let theme = document.getElementById('theme')
            let start_url = document.getElementById('starturl');
            let icon = document.getElementById('icon').files[0];

            let zip = new jszip();
            const fil = new FileReader();
            
            fil.onload = (e) => {
                this.img = e.target.result;

                if(this.img.indexOf('data:image/png;base64,') !== -1){
                    this.data = this.img.split('data:image/png;base64,').join('')
                }else if(this.img.indexOf('data:image/jpeg;base64,') !== -1){
                    this.data = this.img.split('data:image/jpeg;base64,').join('')
                }
                
                const buff1 = Buffer.from(this.data,'base64')

                jimp.read(buff1).then(icon1 => {
                    icon1
                    .resize(72,72)
                    .getBuffer('image/png',function(err,src){
                        zip.folder('imges').folder('icons').file('icon_72x72.png',src);
                    })
                    icon1
                    .resize(144,144)
                    .getBuffer('image/png',function(err,src){
                        zip.folder('imges').folder('icons').file('icon_144x144.png',src)
                    })
                    icon1
                    .resize(192,192)
                    .getBuffer('image/png',function(err,src){
                        zip.folder('imges').folder('icons').file('icon_192x192.png',src)
                    })
                    icon1
                    .resize(512,512)
                    .getBuffer('image/png',function(err,src){
                        zip.folder('imges').folder('icons').file('icon_512x512.png',src)
                    })
                    
                    zip.file('manifest.json',
`{
    "name": "${name.value}",
    "short_name": "${short.value}",
    "display": "${display.value}",
    "start_url": "${start_url.value}",
    "background_color": "${bgcolor.value}",
    "theme_color":"${theme.value}",
    "icons":[
        {
            "src": "./imges/icons/icon_72x72.png",
            "size": "72x72",
            "type": "image/png"
        },
        {
            "src": "./imges/icons/icon_144x144.png",
            "size": "144x144",
            "type": "image/png"
        },
        {
            "src": "./imges/icons/icon_192x192.png",
            "size":"192x192",
            "type":"image/png"
        },
        {
            "src": "./imges/icons/icon_512x512.png",
            "size":"512x512",
            "type":"image/png"
        }
    ]
}
`
                );
                zip.generateAsync({type:"blob"})
                .then(function (blob) {
                    saveAs(blob, "manifest-pwa");
                });

                })
            }
            fil.readAsDataURL(icon)
        }
    }
}    
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }

    #range{
        max-width: 100%;
        margin: 0 auto;
        height: 500px;
        text-align: center;
    }

    .wd{
        max-width: 200px;
        margin-bottom: 50px;
        margin-left: auto;
        margin-right: auto;
        font-size: 17px;
    }

    .sizelab{
        font-size: 15px;
        color: rgb(126, 125, 125);
        float: left;
    }

    .common{
        width: 200px;
        height: 30px;
        border-right: none;
        border-left: none;
        border-top: none;
        font-size: 17px;
    }

    #display{
        width: 200px;
        height: 30px;
        
    }

    #color{
        border: none;
    }

    #theme{
        border: none;
    }

    #icon{
        border: none;
    }

    #btn{
        width: 100px;
        height: 30px;
        font-size: 13px;
        font-weight: bold;
        padding-top: 10px;
        float: left;
        background: #3498db;
        color: white;
        border: none;
        cursor: pointer;
        text-decoration: none;
    }
</style>