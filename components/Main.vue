<template>
    <div class="mx-auto lg:max-w-6xl px-5 lg:px-0 pt-14 lg:pt-12">
        <!-- <Header/> -->
        <div class="flex flex-col items-center lg:flex-row lg:items-start justify-center lg:justify-start">
            <div class="">
                <img
                    src="/logomark.png"
                    alt="Logo"
                    :style="{ height: '200px', width: '200px' }"
                    class="flex items-center justify-center lg:px-0 mx-20 my-10"
                />
            </div>
            <transition name="fade" mode="out-in">
                <div class="text-center lg:mt-14 lg:mr-10 lg:px-20 mx-10">
                <h1 class="capitalize font-normal text-[28px] lg:text-7xl leading-snug">
                    TRADING TANGO <br/>
                </h1>
                <h2 class="capitalize font-normal text-[8px] lg:text-4xl leading-snug">VALENTINE'S DAY PROMOTION</h2>
                <h3 class="capitalize font-normal text-[8px] lg:text-2xl leading-snug">1 - 29 February 2024</h3>
                <a class="flex items-center justify-center" href="#">*Terms & conditions <span>‎ apply</span></a>
                </div>
            </transition>
            <!-- <div class="text-center lg:mt-14 lg:mr-10 lg:px-20 mx-10">
                <h1 class="capitalize font-normal text-[28px] lg:text-7xl leading-snug">
                    TRADING TANGO <br/>
                </h1>
                <h2 class="capitalize font-normal text-[8px] lg:text-4xl leading-snug">VALENTINE'S DAY PROMOTION</h2>
                <h3 class="capitalize font-normal text-[8px] lg:text-2xl leading-snug">1 - 29 February 2024</h3>
                <a class="flex items-center justify-center" href="#">*Terms & conditions <span>‎ apply</span></a>
            </div> -->
        </div>

        <div class="flex justify-center h-full w-full">
            <div class="text-center lg:mr-10 lg:px-10 mt-10">
                <span class="collect font-semibold text-[8px] lg:text-4xl leading-snug ">
                    Collect All Rewards <br/>
                </span>
                <div class="flex flex-wrap justify-center mt-10">
                    <button class="btn-collect-1 m-3 border-color-white hover-color-white">
                        <p class="font-normal text-[20px]">US$ 200 credits</p>
                    </button>
                    <button class="btn-collect-1 m-3 px-10">
                        <p class="font-normal text-[20px]">INR₹ 2000 gift card</p>
                    </button>
                </div>
                <div class="flex flex-wrap justify-center mt-4">
                    <button class="btn-collect-1 m-3 px-10">
                        <p class="font-normal text-[20px]">US$ 400 credits</p>
                    </button>
                    <button class="btn-collect-1 m-3 px-10">
                        <p class="font-normal text-[20px]">INR₹ 20,000 gift card</p>
                    </button>
                </div>
            </div>
        </div>

        
    </div>
</template>


<script>
    export default {
        
    }
</script>

<!-- bg-clip-text text-transparent bg-white  -->

<style>
    body{
        font-family: 'Ropa Sans', sans-serif;
    }
    .btn-collect-1:hover {
        transform: scale(1.03); 
    }
    .logomark-img{
        height: 100px;
        width: 100px;
    }
    h1{
        color: #b9e6f9;
        font-family: "Fira Sans", sans-serif;
        font-style: normal;
    }
    h2{
        color: #b9e6f9;
        font-family: "Fira Sans", sans-serif;
        font-style: normal;
    }
    h3{
        color: #b9e6f9;
        font-family: "Fira Sans", sans-serif;
    }
    a{
        color: #c48147;
        font-family: "Fira Sans", sans-serif;
        font-style: normal;
    }
    p{
        font-family: "Fira Sans", sans-serif;
        font-style: normal;
    }
    span{
        color: #b9e6f9;
        font-family: "Fira Sans", sans-serif;
        font-weight: 300;
    }
    .buttons{
        background-color: #0077b5;
        background-position: 100%;
    }
    .collect{
        color: #f7871e;
        font-family: "Fira Sans", sans-serif;
    }
    .btn-collect-1{
        background-image: url("/logo_side.png");
        background-position: 100%;
        background-color: rgba(0,0,0,0.75);
        background-repeat: no-repeat;
        height: 80px;
        width: 450px;
        color: #f7871e;
    }
    h2.second-title{
        color: white;
    }
    h4.second-title{
        color: #f7871e;
    }
    p.second-title{
        color: white;
    }
    .button-1{
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
        width: 200px;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
    
</style>