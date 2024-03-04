<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup>
  useHead({
    title: "Blackwell Global",
    meta: [
      {
        name: "description",
        content: "Blackwell Global - The Global Leader for FX Traders and Investors",

      },
      {
        property: "og:title",
        content: "Blackwell Global",
      },
      {
        property: "og:description",
        content: "Blackwell Global - The Global Leader for FX Traders and Investors",
      },
      {
        property: "og:image",
        content: "/home.jpg",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:site_name",
        content: "Blackwell Global",
      },
    ],
  });

</script>
