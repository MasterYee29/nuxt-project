<template>
    <div class="popup">
        <div class="popup-inner">
            <slot/>
            <div class="flex">
                <button class="popup-register mx-auto flex items-center justify-center" @click="TogglePopup()">Register</button>
                <button class="popup-close mx-auto flex items-center justify-center" @click="TogglePopup()">Close</button>
            </div>


        </div>
    </div>
</template>

<script>
    export default {
        props: ['TogglePopup']
    }
</script>

<style lang="scss" scoped>
    .popup{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 99;
        background-color: rgba(0,0,0,0.7);

        display: flex;
        align-items: center;
        justify-content: center;

        .popup-inner{
            background: white;
            padding: 32px;
        }
        .popup-close{
            color: red;
        }
        .popup-register{
            color: green;
        }
    }
</style>