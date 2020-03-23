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
                <label for="icon" class="sizelab">icon</label>
                <div>
                    <input type="file" id="icon" class="common" placeholder="icon">
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
import filesaver from 'file-saver'
export default {
    methods:{
        make(){
            let name = document.getElementById('name');
            let short = document.getElementById('short');
            let display = document.getElementById('display');
            let color = document.getElementById('color');
            let icon = document.getElementById('icon');

            // let json1 = [{
            //     'name': name.value,
            //     'short': short.value,
            //     'display': display.value,
            //     'color':color.value,
            //     'icon': icon.value
            // }]

            let zip = new jszip();
            zip.file('manifest.json',
`{
"name": "${name.value}",
"short": "${short.value}",
"display": "${display.value}",
"color": "${color.value}",
"icon":"${icon.value}"
}
`
            );
            zip.folder('img').file('manifest.js','guhehe')
            zip.generateAsync({type:"blob"})
            .then(function (blob) {
                filesaver.saveAs(blob, "hello.zip");
            });
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