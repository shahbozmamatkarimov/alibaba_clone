<template>
  <div
    class="text-md sm:px-3 pl-3  pb-7 sm:w-1/4 w-full min-w-[15rem] -mx-3"
    v-for="i in store.products"
    :key="i"
  >
    <div class="sm:block flex sm:p-5 p-1 sm:pr-0 bg-white border-2 rounded-md">
      <div class="sm:w-full w-1/3 flex justify-center">
        <img class="sm:w-44 sm:h-64 w-24 h-40 mb-5" :src="i.image" alt="img" />
      </div>
      <!-- <hr class="mx-5" /> -->
      <div class="sm:w-full sm:pl-0 pl-5 w-[60%]">
        <div class="leading-7 py-2">
          <div class="flex justify-between items-center">
            <div>
              <div class="flex justify-between items-center">
                <h1 class="font-bold">${{ i.price }}</h1>
                <p class="line-through font-bold text-xs pt-1 text-gray-500">
                  $1128.00
                </p>
              </div>
              <div class="flex">
                <img
                  src="../assets/header/star.svg"
                  alt="star"
                  v-for="(i, index) in Math.floor(i.rating.rate)"
                  :key="index"
                />
                <img
                  src="../assets/header/star1.svg"
                  alt="star"
                  v-for="(i, index) in 5 - Math.floor(i.rating.rate)"
                  :key="index"
                />
                <i class="px-2 text-[#FF9017]">{{ i.rating.rate }}</i>
              </div>
            </div>
            <div
              class="sm:flex hidden items-center justify-center text-blue-600 border-2 h-10 w-10 text-2xl rounded-lg cursor-pointer"
            >
              <i class="bx bx-heart"></i>
              <i class="bx bxs-heart hidden"></i>
            </div>
          </div>
        </div>
        <p class="text-gray-500 w-full truncate">
          {{ i.title }}
        </p>
        <p class="text-gray-500">{{ i.category }}</p>
        <p class="py-1 text-green-600">Free Shipping</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const { getMobile } = useMobile();

const store = reactive({
  products: "",
});

onMounted(async () => {
  store.products = await getMobile();
});
</script>

<style lang="scss" scoped>
</style>