<template>
  <div
    class="flex flex-col items-center lg:border-none border-2  p-5 min-w-fit w-1/4"
    v-for="i in store.offers"
    :key="i.id"
  >
    <img class="h-40 w-[70%] p-2" :src="i.image" alt="img" />
    <p class="text-center p-2 w-[80%] truncate">
      {{ i.title.split(" ").slice(2, 3).join() }}
    </p>
    <button
      class="bg-[#FFE3E3] text-[#EB001B] font-bold text-lg py-1 px-4 rounded-full"
    >
      -2{{ String(i.id).slice(0, 1) }}%
    </button>
  </div>
</template>

<script setup>
const { getOffers } = useOffers();
const store = reactive({
  offers: "",
});

onMounted(async () => {
  store.offers = await getOffers();
});
</script>

<style lang="scss" scoped>
</style>