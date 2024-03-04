<template>
    <input
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        class="input-field mb-5 pl-5"
        @input="$emit('update:modelValue', $event.target.value)"
      />
  </template>

<script setup>
    import { reactive } from 'vue';
    import useVuelidate from '@vuelidate/core';
    import { required } from '@vuelidate/validators';

    defineProps({
        label:{
            type: String,
            default:"",
        },
        modelValue:{
            type: String,
            default:"",
        },
        placeholder:{
            type: String,
            default:"Hi",
        },
    });
</script>

<style lang="scss" scoped>
    .input-field{
        background-color: #107cb4;
        height: 50px;
        width: 100%;
        border-color: #298abc;
        border-width: 0px 0px 5px 0px
    }
</style>