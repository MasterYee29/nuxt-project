<template>
  <header class="flex items-center justify-between h-20 lg:max-w-6xl mx-auto px-5 lg:px-0">
    <nav-logo class="flex items-center justify-between w-20 h-10">
      <NuxtLink to="/">
        <img src="/logo-white.png" alt="Logo">
      </NuxtLink>
    </nav-logo>

    <div class="flex items-center justify-between w-20 h-10">
      <Counter/>
    </div>

    <user class="flex items-center justify-between">
        <button @click="() => TogglePopup('buttonTrigger')" class="font-bold px-4 py-2 text-[10px] text-sm bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-all duration-500 shadow-2xl">REGISTER NOW</button>

        <user-logo class="w-10">
          <button class="transform transition-transform hover:scale-110">
            <img src="/user.png" alt="User">
          </button>
        </user-logo>

    </user>

    <RegisterPopUp v-if="popupTriggers.buttonTrigger" :TogglePopup="()=>TogglePopup('buttonTrigger')">
      <h2 class="header-title">Register Your User Account</h2>
      <div class="input-wrap">
        <input type="text" class="input-field mt-5 mb-5 pl-5" placeholder="First Name">
        <input type="text" class="input-field mb-5 pl-5" placeholder="Last Name">
        <input type="email" class="input-field mb-5 pl-5" placeholder="Email" name="email" id="email">
        <input type="tel" id="phone" name="phone" placeholder="Phone" class="input-field mb-5 pl-5" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">
        <input type="password" class="input-field mb-5 pl-5" placeholder="Password" name="pwd" id="pwd">
        <input type="password" class="input-field mb-5 pl-5" placeholder="Password Confirmation" name="pwdc" id="pwdc">
    </div>
    </RegisterPopUp>


    
  </header>
</template>

<style>
  .header-title{
    color: black;
  }
</style>

<script>
  import Counter from "./Counter.vue";
  import { ref } from 'vue';
  import RegisterPopUp from "./RegisterPopUp.vue";
  const nav = [
    {
      name: 'Home',
      link: "/"
    },
    {
      name: 'About',
      link: "/#"
    },
    {
      name: 'Contact',
      link: "/#"
    },
  ]
  
  export default{
    setup(){
      const popupTriggers = ref({
        buttonTrigger: false,
      });

      const TogglePopup = (trigger) =>{
        popupTriggers.value[trigger] = !popupTriggers.value[trigger]
      }
      return{
        RegisterPopUp,
        popupTriggers,
        TogglePopup
      }
    }
  }

</script>
