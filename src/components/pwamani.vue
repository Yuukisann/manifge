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
                        <option value="full">fullscreen</option>
                        <option value="stand">standalone</option>
                        <option value="mini">minimal-ui</option>
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
                <button v-on:click="make" id="btn">json作成</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods:{
            make(){
              const blob = new Blob()
              console.log(blob) 
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
        border-radius: 5px;
        font-size: 17px;
    }

    #display{
        width: 200px;
        height: 30px;
        
    }

    #name:active{

    }

    #color{
        border: none;
    }

    #btn{
        width: 100px;
        height: 30px;
        font-size: 13px;
        font-weight: bold;
        float: left;
        background: #3498db;
        color: white;
        border: none;
        cursor: pointer;
    }

    /* #name{
        width: 50%;
        height: 10px 15px;
        font-size: 16px;
        border-radius: 3px;
        border: 2px solid #ddd;
        box-sizing: border-box;
    }

    #name:focus{
        border: 2px solid #ff9900;
        z-index: 10;
        outline: 0;
    }

    .common{
        display: block;
    } */
</style>