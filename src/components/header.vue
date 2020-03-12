<template>
    <div id="head">
            <vue-typed-js :strings="['manifest.json Generator']" :loop="false" id="type">
                <h1 class="typing"></h1>
            </vue-typed-js>
        </div>
</template>

<script>

</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }

    #head{
        width: 100%;
        height: 100px;
        background:linear-gradient(to right ,rgb(128, 126, 255) 50%,rgb(69, 109, 194));
        padding-top: 50px;
    }

    #type{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #text{
        text-align: center;
    }
</style>