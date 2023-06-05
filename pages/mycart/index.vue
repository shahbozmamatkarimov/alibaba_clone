<template>
  <div class="px-5">
    <h1 class="text-lg pb-10 font-bold">My cart (3)</h1>
    <div
      class="flex lg:flex-row flex-col justify-between gap-4 relative overflow-x-auto"
    >
      <div class="lg:w-[70%]">
        <div class="w-full border-2 rounded-lg lg:p-5 p-2 bg-white">
          <div class="text-md dark:text-gray-400">
            <div>
              <div
                class="flex justify-between bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                v-for="i in 3"
                :key="i"
              >
                <div class="flex justify-between">
                  <div class="minwidth flex gap-5">
                    <div
                      scope="row"
                      class="flex pl-6 py-4 font-medium whitespace-nowrap dark:text-white"
                    >
                      <div
                        class="p-2 bg-gray-100 md:h-32 w-16 h-[5rem] border-2 rounded-lg"
                      >
                        <img
                          class="md:w-20 md:h-20 w-16 h-16"
                          src="https://svgsilh.com/png-512/2666234.png"
                          alt="img"
                        />
                      </div>
                    </div>
                    <div class="py-4">
                      <h1 class="font-bold title">
                        T-shirts with multiple colors, for men and lady
                      </h1>
                      <p class="font-medium title mt-2 text-gray-400">
                        Size: medium, Color: blue, Material: Plastic
                      </p>
                      <p class="font-medium truncate text-gray-400">
                        Seller: Artel Market
                      </p>
                      <button
                        class="md:block hidden px-2 py-1 mt-2 font-medium text-red-500 border-2 rounded-lg"
                      >
                        Remove
                      </button>
                      <button
                        class="plus md:hidden flex -ml-24 items-center w-32 px-2 py-1 mt-2 font-medium text-gray-500"
                      >
                        <span
                          class="flex items-center text-5xl h-[2.7rem] border-r-0 pb-2 px-2 border-2 rounded-l-lg"
                          >-</span
                        ><input
                          value="1"
                          class="w-14 px-5 py-2 border-2 outline-none"
                          type="number"
                        /><span
                          class="flex items-center text-5xl h-[2.7rem] border-l-0 pb-2 px-2 border-2 rounded-r-lg"
                          >+</span
                        >
                      </button>
                      <button
                        class="float-right -mt-12 md:flex hidden px-2 py-1 font-medium ml-4 text-blue-500 border-2 rounded-lg"
                      >
                        Save for later
                      </button>
                      <button class="float-right -mt-10 md:hidden inline-block">
                        $78.99
                      </button>
                    </div>
                  </div>
                  <i
                    class="bx bx-dots-vertical-rounded px-5 py-10 text-2xl md:hidden block"
                  ></i>
                </div>
                <div class="md:block hidden text-end text-lg pr-14">
                  <p class="font-bold">$78.99</p>
                  <select class="rounded-lg border-2 py-1 px-2 outline-none">
                    <option selected>Qty: 9</option>
                    <option value="1">Qty: 5</option>
                    <option value="1">Qty: 3</option>
                    <option value="1">Qty: 1</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-between w-full bg-white py-5">
            <button class="bg-[#127FFF] rounded-lg text-white py-2 px-4">
              <i class="bx bx-left-arrow-alt"></i> Back to shop
            </button>
            <button
              class="bg-white text-[#127FFF] rounded-lg border-2 py-2 px-4 font-medium"
            >
              Remove all
            </button>
          </div>
        </div>
        <div
          class="flex sm:flex-row flex-col mx-auto md:justify-between text-gray-400 py-5"
        >
          <div class="flex items-center">
            <i
              class="mr-3 bg-gray-300 py-2 px-3 rounded-full text-xl bx bxs-lock"
            ></i>
            <div>
              <h1 class="text-black font-bold">Secure payment</h1>
              <p>Have you ever finally just</p>
            </div>
          </div>
          <div class="flex items-center">
            <i
              class="mr-3 bg-gray-300 py-2 px-3 rounded-full text-xl bx bxs-comment-dots"
            ></i>
            <div>
              <h1 class="text-black font-bold">Customer support</h1>
              <p>Have you ever finally just</p>
            </div>
          </div>
          <div class="flex items-center">
            <img class="mr-3" src="../../assets/header/truck.svg" alt="truck" />
            <div>
              <h1 class="text-black font-bold">Free delivery</h1>
              <p>Have you ever finally just</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <form class="p-5 border-2 rounded-lg bg-white">
          <label class="inline-block mb-2" for="coupon">Have a coupon?</label><br>
          <input
            class="p-2 border-2 rounded-l-lg outline-none"
            type="text"
            placeholder="Add coupon"
            required
          />
          <input
            class="p-2 cursor-pointer border-2 border-l-0 rounded-r-lg text-blue-600 font-medium"
            type="submit"
            value="Apply"
          />
        </form>
        <div class="p-5 mt-5 bg-white border-2 rounded-lg">
          <div class="flex justify-between text-gray-500">
            <div>
              <p>Subtotal:</p>
              <p>Discount:</p>
              <p>Tax:</p>
            </div>
            <div>
              <p class="text-black">$1403.97</p>
              <p class="text-red-500">- $60.00</p>
              <p class="text-green-500">+ $14.00</p>
            </div>
          </div>
          <hr class="my-5" />
          <p class="flex justify-between">
            <strong>Total:</strong><strong class="text-lg">$1357.97</strong>
          </p>
          <button
            class="my-5 bg-[#00B517] text-white rounded-lg p-3 text-lg w-full"
          >
            Checkout
          </button>
          <div class="flex justify-center gap-3">
            <img
              class="border-2 rounded-lg px-2 py-1 w-10"
              src="../../assets/header/express.svg"
              alt="express"
            />
            <img
              class="border-2 rounded-lg px-2 py-1 w-10"
              src="../../assets/header/payoneer.svg"
              alt="express"
            />
            <img
              class="border-2 rounded-lg px-2 py-1 w-10"
              src="../../assets/header/paypal.svg"
              alt="express"
            />
            <img
              class="border-2 rounded-lg px-2 py-1 w-10"
              src="../../assets/header/visa.svg"
              alt="express"
            />
            <img
              class="border-2 rounded-lg px-2 py-1 w-10"
              src="../../assets/header/pay.svg"
              alt="express"
            />
          </div>
        </div>
      </div>
    </div>

    <!------------- product section ------------->
    <div class="border-2 rounded-lg sm:pt-5 bg-white">
      <h1 class="px-5 font-bold text-xl">Saved for later</h1>
      <div class="flex justify-between flex-wrap">
        <div
          class="text-md px-3 sm:pb-7 lg:w-1/4 sm:w-1/2 w-full -mx-3"
          v-for="i in store.products.data"
          :key="i"
        >
          <div class="sm:block flex sm:p-5 leading-9">
            <div
              class="flex sm:w-full w-1/3 justify-center sm:bg-gray-200 rounded-lg"
            >
              <img
                class="sm:w-44 sm:h-64 w-16 h-24 m-5"
                :src="i.image"
                alt="img"
              />
            </div>
            <div class="sm:w-full w-[70%] p-5">
              <h1 class="font-bold">${{ i.price }}</h1>
              <div class="leading-6">
                <p class="text-gray-500 w-full truncate">
                  {{ i.title }}
                </p>
                <p class="text-gray-500 truncate">{{ i.category }}</p>
              </div>
              <div class="sm:block flex flex-wrap gap-2 sm:text-md text-xs">
                <button
                  class="min-w-fit border-2 py-1 mt-3 text-md rounded-md px-3 text-blue-500 text-medium"
                >
                  <i class="bx bx-cart-alt pr-3"></i>Move to cart
                </button>
                <button
                  class="sm:hidden min-w-fit inline-block px-2 mt-2 py-1 font-medium text-red-500 border-2 rounded-lg"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex flex-wrap gap-1 justify-between rounded-lg my-5 p-7 bg-[#237CFF] text-white"
    >
      <div class="min-w-fit">
        <h1 class="text-2xl font-medium">
          Super discount on more than 100 USD
        </h1>
        <p class="text-gray-300">Have you ever finally just write dummy info</p>
      </div>
      <button class="bg-[#FF9017] px-3 my-2 py-1 rounded-lg min-w-fit">
        Shop now
      </button>
    </div>
  </div>
</template>

<script setup>
const store = reactive({
  products: "",
});

try {
  store.products = await useFetch("https://fakestoreapi.com/products?limit=4");
} catch (error) {
  console.log(error);
}
</script>

<style lang="scss" scoped>
@media (max-width: 370px) {
  .minwidth {
    flex-direction: column;
  }

  .plus {
    margin-left: 0;
  }
}
</style>