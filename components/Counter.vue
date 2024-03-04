<template>
    <div>
      <section class="flex text-4xl justify-center content-center text-gray-300 font-thin">
        <div class="days relative mr-5">
          {{ displayDays }}
          <div class="label text-sm absolute top-13">days</div>
        </div>
        <div class="hours relative mr-5">
          {{ displayHours }}
          <div class="label text-sm absolute top-13">hours</div>
        </div>
        <div class="minutes relative mr-5">
          {{ displayMinutes }}
          <div class="label text-sm absolute mr-5 top-13">mins</div>
        </div>
        <div class="seconds relative">
          {{ displaySeconds }}
          <div class="label text-sm absolute top-13">seconds</div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    data: () => ({
      displayDays: 0,
      displayHours: 0,
      displayMinutes: 0,
      displaySeconds: 0,
    }),
    computed: {
      _seconds() {
        return 1000;
      },
      _minutes() {
        return this._seconds * 60;
      },
      _hours() {
        return this._minutes * 60;
      },
      _days() {
        return this._hours * 24;
      },
    },
    mounted() {
      this.showRemaining();
    },
    methods: {
      showRemaining() {
        const timer = setInterval(() => {
          const now = new Date();
          const end = new Date(2024, 2, 6, 10, 10, 10, 10);
          const distance = end.getTime() - now.getTime();
  
          if (distance < 0) {
            clearInterval(timer);
            return;
          }
  
          const days = Math.floor(distance / this._days);
          const hours = Math.floor((distance % this._days) / this._hours);
          const minutes = Math.floor((distance % this._hours) / this._minutes);
          const seconds = Math.floor((distance % this._minutes) / this._seconds);
  
          this.displayMinutes = minutes < 10 ? "0" + minutes : "" + minutes;
          this.displaySeconds = seconds < 10 ? "0" + seconds : "" + seconds;
          this.displayHours = hours < 10 ? "0" + hours : "" + hours;
          this.displayDays = days < 10 ? "0" + days : "" + days;
        }, 1000);
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  </style>
  