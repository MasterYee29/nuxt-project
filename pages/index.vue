<template>
    <div class="min-h-screen relative">
      <!-- <img src="/trading-tango-header.png" alt="Blackwell Global" class="object-cover h-full w-full absolute inset-0 -z-0"> -->
      <div class="main-background object-cover h-full w-full absolute inset-0 -z-0">
        <video autoplay loop muted>
          <source src="/trading-tango-bg-move.mp4" type="video/webm"/>
        </video>
      </div>
      
      <div class="h-full relative">
        <Header />
        <Main />
      </div>

    </div>
    <div class="min-h-screen relative">
      <img src="/blue.png" alt="Blackwell Global" class="object-cover h-full w-full absolute inset-0 -z-0">
      
      <div class="background-2 h-full relative">
        <Main2 />
      </div>
      
    </div>

    <div class="min-h-screen relative">
      <img src="/easy_step_bg.png" alt="Blackwell Global" class="object-cover h-full w-full absolute inset-0 -z-0">
      
      <div class="h-50 relative">
        <Main3 />
      </div>
      
    </div>

    <div class="min-h-screen relative">
      <img src="/blue.png" alt="Blackwell Global" class="object-cover h-full w-full absolute inset-0 -z-0">
      
      <div class="h-full relative">
        <Main4 />
      </div>
      
    </div>
    <div class="h-100 relative">
      <img src="/darkblue.png" alt="Blackwell Global" class="object-cover h-full w-full absolute inset-0 -z-0">
      
      <div class="h-full relative">
        <Footer />
      </div>
      
    </div>
</template>

<script setup>
  
</script>

<style>
    .background{
      background-color: #0477b5;
    }
    .background-1{
      background-color: #091527;
    }
    .background-2{
      background-color: #0a5688;
      
    }
</style>
