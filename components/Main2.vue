<template>
    <div class="mx-auto lg:max-w-6xl px-5 lg:px-0 pt-14 lg:pt-12">
        <!-- <Header/> -->
        <div class="flex flex-col items-center lg:flex-row lg:items-start justify-start lg:justify-start">
            <div class="text-left lg:mt-14 lg:mr-10 lg:px-20 mx-10">
                <h2 class="second-title capitalize font-normal text-[28px] lg:text-3xl leading-snug">
                    FREE US$ 600 Credits!
                </h2>
                <h4 class="second-title font-normal lg:text-2xl mt-10">
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
                    :style="{ height: '330px', width: '350px' }"
                    class="flex items-center justify-center lg:px-0"
                />
            </div>
        </div>

        <div class="flex flex-col items-center lg:flex-row lg:items-start justify-start lg:justify-start mt-20">
            <div class="lg:px-20">
                <img
                    src="/promo-2b.png"
                    alt="promo-logo"
                    :style="{ height: '300px', width: '450px' }"
                    class="flex items-center justify-center ml-10"
                />
            </div>
            <div class="text-left lg:mt-7 mr-20">
                <h2 class="second-title capitalize font-normal text-[28px] lg:text-3xl leading-snug mr-20">
                    Free INR₹22,000 Gift Cards!
                </h2>
                <h4 class="second-title font-normal lg:text-2xl leading-snug mt-10">
                    INR₹2,000 Flipkart gift card
                </h4>
                <p class="second-title font-normal lg:text-1xl leading-snug">
                    when you refer someone to enjoy
                </p>
                <h4 class="second-title font-normal lg:text-2xl leading-snug mt-10">
                    INR₹2,000 Flipkart gift card
                </h4>
                <p class="second-title font-normal lg:text-1xl leading-snug">
                    when you refer second person to enjoy
                </p>
                <div class="flex flex-col lg:flex-row mt-5 mb-10">
                    <button to="#" class="button-1 font-bold px-4 py-2 text-[10px] w-100 text-sm bg-orange-500 text-white rounded-full hover:bg-orange-700 transition-all duration-500 mr-3">
                        Create Live Account
                    </button>
                    <button to="#" class="button-1 font-bold px-4 py-2 text-[10px] w-100 text-sm bg-orange-500 text-white rounded-full hover:bg-orange-700 transition-all duration-500">
                        Download MT4 Platform
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