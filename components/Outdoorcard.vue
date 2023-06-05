<template>
  <div class="main flex flex-wrap h-[270px] w-full overflow-x-auto overflow-hidden">
    <div
      class="flex justify-between text-md p-4 min-w-fit w-1/5 border-l-2 border-b-2"
      v-for="i in store.outdoor"
      :key="i"
    >
      <div>
        <h1>{{ i.title.split(" ").slice(2, 3).join() }}</h1>
        <div class="text-gray-500 text-sm">
          <p>From</p>
          <p>USD 1{{ String(i.id).slice(0, 1) }}</p>
        </div>
      </div>
      <div class="flex items-end justify-end">
        <img class="w-16 h-20 mt-5 mb-[1.4px]" :src="i.image" alt="img" />
      </div>
    </div>
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

<style lang="scss" scoped>
@media (max-width:1280px){
  .main {
    flex-direction: column;
  }
}
</style>