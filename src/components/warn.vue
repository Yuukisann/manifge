<template>
    <div id="app">
        <div id="warn">
            <p>このアプリで作成した画像がデベロッパーツールのapplicationのmanifestでエラーが発生するかもしれません。<span v-on:click="del" id="del">x</span> </p>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        del(){
            const target = this.$el
            target.style.display = 'none'
        }
    }
}
</script>

<style scoped>
    #app {
        width: 80%;
        height: 300px;
        height: 100px;
        background: rgb(233, 188, 188);
        border: 1px solid red;
        margin: 0 auto;
    }

    #warn {
        padding-top: 40px;
    }

    #del {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-left: 30px;
        border: 1px solid black;
    }

    @media screen and (max-width: 480px) {
        #warn {
            padding-top: 20px;
        }
    }
</style>