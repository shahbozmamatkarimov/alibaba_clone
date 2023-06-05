<template>
  <div
    class="text-md p-5 m-1 w-[18%] min-w-[9rem] bg-white my-4 border-2 rounded-md"
    v-for="i in store.outdoor"
    :key="i"
  >
    <div class="flex justify-center">
      <img class="w-32 h-48 mb-5" :src="i.image" alt="img" />
    </div>
    <h1 class="font-bold">${{ i.price }}</h1>
    <p class="title text-gray-500 w-full text-sm">
      {{ i.title }}
    </p>
  </div>
</template>

<script setup>
const { getOutdoor } = useOutdoor();
const store = reactive({
  outdoor: "",
});

onMounted(async () => {
  store.outdoor = await getOutdoor();
});
</script>

<style lang="scss">
.title {
  display: -webkit-box;
  overflow: hidden;
  height: 45px;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-line-clamp: 2;
}
</style>