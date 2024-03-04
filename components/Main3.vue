<template>
    <div class="mx-auto lg:max-w-6xl px-5 lg:px-0 pt-14 lg:pt-12">
        <!-- <Header/> -->
        <h4 class="third-title font-normal lg:text-2xl mt-4 ml-5 mb-10">
            3 Easy Steps To Refer
        </h4>
        <div class="flex flex-col items-center lg:flex-row lg:items-start justify-start lg:justify-start mt-20">
            <div>
                <img
                    src="/step01.png"
                    alt="promo-logo"
                    :style="{ height: '300px', width: '350px' }"
                    class="flex items-center justify-center mr-5 ml-5"
                />
                <p class="left">Create an account with <br/> Blackwell Global & log in <br/> to the Client Portal. </p>
            </div>
            <div class="">
                <img
                    src="/step02.png"
                    alt="promo-logo"
                    :style="{ height: '300px', width: '350px' }"
                    class="flex items-center justify-center mr-5"
                />
                <p class="centered">Under the "Promotion" tab, <br/> copy your unique referral link <br/> & send it to your referee, or 
            <br/> get your referee to scan your <br/> unique QR code to create an <br/> account with us.</p>
            </div>
            <div class="">
                <img
                    src="/step03.png"
                    alt="promo-logo"
                    :style="{ height: '300px', width: '350px' }"
                    class="flex items-center justify-center"
                />
                <p class="right">Monitor your referees in the <br/> Referral Activty section to <br/> track whether you've fulfilled 
            <br/> the requirements for various <br/> rewards!</p>
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
    h4.third-title{
        color: white;
    }
    p.second-title{
        color: white;
    }
    .button-1{
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
        width: 200px;
    }
    .centered {
        color: white;
        position: absolute;
        top: 440px;
        left: 49%;
        transform: translate(-50%, -100%);
    }
    .left {
        color: white;
        position: absolute;
        top: 370px;
        left: 27%;
        transform: translate(-50%, -100%);
    }
    .right {
        color: white;
        position: absolute;
        top: 420px;
        left: 72%;
        transform: translate(-50%, -100%);
    }
    
</style>