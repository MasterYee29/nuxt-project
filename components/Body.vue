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
            <div class="text-center lg:mt-14 lg:mr-10 lg:px-20 mx-10">
                <h1 class="capitalize font-normal text-[28px] lg:text-7xl leading-snug">
                    TRADING TANGO <br/>
                </h1>
                <h2 class="capitalize font-normal text-[8px] lg:text-4xl leading-snug">VALENTINE'S DAY PROMOTION</h2>
                <h3 class="capitalize font-normal text-[8px] lg:text-2xl leading-snug">1 - 29 February 2024</h3>
                <a class="flex items-center justify-center" href="#">*Terms & conditions <span>‎ apply</span></a>
            </div>
        </div>

        <div class="flex justify-center h-full w-full mb-10">
            <div class="text-center lg:mr-10 lg:px-10 mt-10">
                <span class="collect font-normal text-[8px] lg:text-4xl leading-snug ">
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

        <div class="flex flex-col items-center lg:flex-row lg:items-start justify-start lg:justify-start">
            <div class="text-left lg:mt-14 lg:mr-10 lg:px-20 mx-10">
                <h2 class="second-title capitalize font-normal text-[28px] lg:text-4xl leading-snug">
                    FREE US$ 600 Credits!
                </h2>
                <h4 class="second-title font-normal lg:text-2xl leading-snug mt-10">
                    US$ 200 credits
                </h4>
                <p class="second-title font-normal lg:text-1xl leading-snug">
                    when you open an account & deposit US$ 200
                </p>
                <h4 class="second-title font-normal lg:text-2xl leading-snug mt-10">
                    US$ 20 credits
                </h4>
                <p class="second-title font-normal lg:text-1xl leading-snug">
                    for every lot you trade, up to 20 lots
                </p>
                <!-- <button to="#" class="button-1 font-bold px-4 py-2 text-[10px] text-sm bg-orange-500 text-white rounded-full hover:bg-orange-700 transition-all duration-500 mt-5">
                    Create Live Account
                </button>
                <button to="#" class="button-1 font-bold px-4 py-2 text-[10px] text-sm bg-orange-500 text-white rounded-full hover:bg-orange-700 transition-all duration-500">
                    Download MT4 Platform
                </button> -->
                <div class="flex flex-col lg:flex-row mt-5">
                    <button to="#" class="button-1 font-bold px-4 py-2 text-[10px] w-100 text-sm bg-orange-500 text-white rounded-full hover:bg-orange-700 transition-all duration-500 mr-3">
                        Create Live Account
                    </button>
                    <button to="#" class="button-1 font-bold px-4 py-2 text-[10px] w-100 text-sm bg-orange-500 text-white rounded-full hover:bg-orange-700 transition-all duration-500">
                        Download MT4 Platform
                    </button>
                </div>
            </div>
            <div class="">
                <img
                    src="/promo-1b.png"
                    alt="promo-logo"
                    :style="{ height: '380px', width: '400px' }"
                    class="flex items-center justify-center lg:px-0 mx-20"
                />
            </div>
        </div>

        <div class="text-center lg:mt-20 lg:px-10">
                <h2 class="second-title capitalize font-normal text-[28px] lg:text-4xl leading-snug">
                    FREE US$ 600 Credits!
                </h2>
                <h4 class="second-title font-normal text-[14px] lg:text-2xl leading-snug">
                    US$ 200 credits
                </h4>
                <p>
                    when you open an account & deposit US$ 200
                </p>
                <h4>
                    US$ 20 credits
                </h4>
                <p>
                    for every lot you trade, up to 20 lots
                </p>
                
            </div>
    </div>

    
    <!-- <div class="mx-auto lg:max-w-6xl px-5 lg:px-0 pt-14 lg:pt-12">
            <div class="buttons lg:flex-row lg:items-start justify-center lg:justify-start">
                <div class="flex flex-col items-center lg:flex-row lg:items-start justify-center lg:justify-start">
                    <div class="">
                        <img
                            src="/logomark.png"
                            alt="Logo"
                            :style="{ height: '200px', width: '200px' }"
                            class="flex items-center justify-center lg:px-0 mx-20 my-10"
                        />
                    </div>
                    <div class="text-center lg:mt-14 lg:mr-10 lg:px-20 mx-10">
                        <h1 class="capitalize font-normal text-[28px] lg:text-7xl leading-snug">
                            TRADING TANGO <br/>
                        </h1>
                        <h2 class="capitalize font-normal text-[8px] lg:text-4xl leading-snug">VALENTINE'S DAY PROMOTION</h2>
                        <h3 class="capitalize font-normal text-[8px] lg:text-2xl leading-snug">1 - 29 February 2024</h3>
                        <a class="flex items-center justify-center" href="#">*Terms & conditions <span>‎ apply</span></a>
                    </div>
                </div>
            </div>
        </div> -->
    
</template>


<script>
    export default {
        
    }
</script>

<!-- bg-clip-text text-transparent bg-white  -->

<style>
    @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    .logomark-img{
        height: 100px;
        width: 100px;
    }
    h1{
        color: #b9e6f9;
        font-family: "Fira Sans", sans-serif;
        font-weight: 100;
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
        background-color: rgba(0,0,0,0.55);
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
    
</style>