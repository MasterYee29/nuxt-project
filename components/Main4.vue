<template>
    <div class="mx-auto lg:max-w-6xl px-5 lg:px-0 pt-14 lg:pt-12">
    <!-- <Header/> -->
    <p class="third-title font-normal lg:text-2xl mt-4 mb-10">
        Register Now
    </p>
    <form @submit.prevent="submitForm" class="flex flex-col">
        <BaseInput v-model="formData.firstName" type="text" placeholder="First Name"/>
        <span class="mb-5 text-red-700" v-for="error in v$.firstName.$errors" :key="error.$uid">
            {{ error.$message }}
        </span>
        <BaseInput v-model="formData.lastName" type="text" placeholder="Last Name"/>
        <span class="mb-5 text-red-700" v-for="error in v$.lastName.$errors" :key="error.$uid">
            {{ error.$message }}
        </span>
        <BaseInput v-model="formData.email" type="email" placeholder="Email"/>
        <span class="mb-5 text-red-700" v-for="error in v$.email.$errors" :key="error.$uid">
            {{ error.$message }}
        </span>
        <BaseInput v-model="formData.phone" type="tel" placeholder="Phone"/>
        <span class="mb-5 text-red-700" v-for="error in v$.phone.$errors" :key="error.$uid">
            {{ error.$message }}
        </span>
        <BaseInput v-model="formData.password" type="password" placeholder="Password"/>
        <span class="mb-5 text-red-700" v-for="error in v$.password.$errors" :key="error.$uid">
            {{ error.$message }}
        </span>
        <BaseInput v-model="formData.passwordConfirmation" type="password" placeholder="Password Confirmation"/>
        <span class="mb-5 text-red-700" v-for="error in v$.passwordConfirmation.$errors" :key="error.$uid">
            {{ error.$message }}
        </span>
        <div class="flex items-center mb-10">
        <input type="checkbox" class="checkbox-1 mr-3" name="" id=""> <!-- Add margin to checkbox for spacing -->
        <p class="text-input">I agree to the terms and conditions</p> <!-- Line of text beside the checkbox -->
    </div>
    <div class="flex items-center mb-10">
        <input type="checkbox" class="checkbox-1 mr-3" name="" id=""> <!-- Add margin to checkbox for spacing -->
        <p class="text-input">By joining and participating in the Competition, I acknowledge and confirm that I have read, 
            understood and agreed to be bound by the <br/><a href="#">Terms and Conditions </a>of the Competition.</p> <!-- Line of text beside the checkbox -->
    </div>

    <p class="second-title font-normal lg:text-1xl mt-4 mb-10">
        The site is protected by reCAPTCHA and the Google <a href="#">Privacy Policy </a>and <a href="#">Terms and Services </a>apply.
    </p>

    <button type="submit" to="#" class="button-2 font-bold px-4 py-2 text-[10px] w-100 text-sm bg-orange-500 text-white rounded-full hover:bg-orange-700 transition-all duration-500">
        Register Now
    </button>
    </form>
    
    

    

    <!-- <div class="flex mb-5 items-center"> 
        <input type="text" class="input-field mb-5 pl-5" placeholder="First Name">
        <input type="text" class="input-field mb-5 pl-5" placeholder="Last Name">
        <input type="email" class="input-field mb-5 pl-5" placeholder="Email" name="email" id="email">
        <input type="tel" id="phone" name="phone" placeholder="Phone" class="input-field mb-5 pl-5" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">
        <input type="password" class="input-field mb-5 pl-5" placeholder="Password" name="pwd" id="pwd">
        <input type="password" class="input-field mb-5 pl-5" placeholder="Password Confirmation" name="pwdc" id="pwdc">
    </div> -->

    
    <div class="flex items-center mb-10 mt-5">
        <button to="#" class="button-3 font-bold px-4 py-2 text-[10px] w-100 text-sm bg-blue-700 text-white hover:bg-blue-900 transition-all duration-500">
            Signup by Facebook
        </button>
        
        <button to="#" class="button-4 font-bold px-4 py-2 text-[10px] w-100 text-sm bg-red-700 text-white hover:bg-red-900 transition-all duration-500 ml-2">
            Signup by Google
        </button>
    </div>

    <div class="text-center lg:px-10 mt-10">
        <span class="collect font-normal text-[8px] lg:text-4xl leading-snug ">
            Trading Guides <br/>
        </span>
    </div>

    <div class="flex flex-col items-center lg:flex-row lg:items-start justify-start lg:justify-start mt-10">
        <Swiper>
            <SwiperSlide>
                <img
                    src="/guides_01.png"
                    alt="promo-logo"
                    :style="{ height: '300px', width: '500px' }"
                    class="flex items-center justify-center mr-5 ml-5"
                />
                <button to="#" class="button-2-1 font-bold px-4 py-2 mb-10 text-[10px] text-sm bg-orange-500 text-white hover:bg-orange-700 transition-all duration-500">
                    Forex For Beginner
                </button>
                <div class="">
                    <img
                        src="/guides_02.png"
                        alt="promo-logo"
                        :style="{ height: '300px', width: '500px' }"
                        class="flex items-center justify-center mr-5"
                    />
                    <button to="#" class="button-2-1 font-bold px-4 py-2 mb-10 text-[10px] w-100 text-sm bg-orange-500 text-white hover:bg-orange-700 transition-all duration-500">
                        Analysing Made Easy
                    </button>
                </div>
                <div class="">
                    <img
                        src="/guides_03.png"
                        alt="promo-logo"
                        :style="{ height: '300px', width: '500px' }"
                        class="flex items-center justify-center"
                    />
                    <button to="#" class="button-2-1 font-bold px-4 py-2 mb-10 text-[10px] w-100 text-sm bg-orange-500 text-white hover:bg-orange-700 transition-all duration-500">
                        CFDs Starter Kit
                    </button>
                </div>
            </SwiperSlide>
        </Swiper>
        
    </div>

</div>

    
</template>


<script setup>
    import { reactive, computed } from 'vue';
    import useVuelidate from '@vuelidate/core';
    import { required, minLength, email, sameAs, numeric } from '@vuelidate/validators';
    import BaseInput from "./BaseInput.vue";
    import { ref } from 'vue';
    
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import "swiper/css";

    const photos = [
        "guides_01.png",
        "guides_02.png",
        "guides_03.png",
    ];

    // defineProps({
    //     label:{
    //         type:String,
    //         default:"",
    //     },
    //     modelValue:{
    //         type: String,
    //         default:"",
    //     }
    // });

    const formData = reactive({
        firstName:"",
        lastName:"",
        email:"",
        phone:"",
        password:"",
        passwordConfirmation:"",
    });

    const submitForm = async () =>{
        const result = await v$.value.$validate();
        if(result){
            alert("User account has registered successfully!");
        }else{
            alert("Failed to register user account!");
        }
        
    };

    const rules = computed(() => {
        return{
            firstName:{required,minLength: minLength(5)},
            lastName:{required,minLength: minLength(5)},
            email:{required,email},
            phone:{required,numeric},
            password:{required},
            passwordConfirmation:{required,sameAs: sameAs(formData.password)},
        };
    });

    const v$ = useVuelidate(rules, formData);


</script>

<!-- bg-clip-text text-transparent bg-white  -->

<style>
    @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    .logomark-img{
        height: 100px;
        width: 100px;
    }
    .text-input{
        color:#5da1c7;
    }
    .checkbox-1{
        width: 30px;
        height: 30px;
        background-color: #0077b5;
        border: 10px solid green;
    }
    .checkbox::before{
        content: "";
        width: 30px;
        height: 30px;
        background-color: #0077b5;
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
    p.third-title{
        color: #f7871e;
    }
    .button-1{
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
        width: 200px;
    }
    .button-2{
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
        width: 100%;
    }
    .button-2-1{
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
        width: 100%;
        justify-content: center;
        text-align: center;
        align-items: center;
        opacity: 0.9;
    }
    .button-3{
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
        width: 100%;
    }
    .button-4{
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
        width: 100%;
    }
    .input-field{
        background-color: rgb(230, 230, 230);
        height: 50px;
        width: 100%;
        border-color: #b3b3b3;
        border-width: 0px 5px 5px 0px
    }
    
</style>