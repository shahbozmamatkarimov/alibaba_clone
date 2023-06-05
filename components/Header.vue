<template>
  <header>
    <nav class="bg-white">
      <div class="flex justify-between py-4 border-b-2 lg:px-20 px-5">
        <div class="flex items-center">
          <h1>
            <i
              class="menu hidden bx bx-menu font-bold pr-3 text-2xl"
              @click="menuToggle"
            ></i>
          </h1>
          <h1 class="min-w-fit">
            <router-link to="/" class="flex cursor-pointer">
              <img
                class="bg-[#0D6EFD] p-2 h-10 rounded-md"
                src="../assets/header/bag.svg"
                alt="img"
              />
              <img
                src="../assets/header/brand.svg"
                class="px-3 min-w-fit"
                alt="img"
              />
            </router-link>
          </h1>
        </div>
        <form
          @submit.prevent="Search"
          class="lg:flex hidden w-[45%] min-w-[450px] h-[35px] mx-20 border-2 border-[#0D6EFD] rounded-lg"
        >
          <input
            type="text"
            placeholder="Search"
            class="w-[60%] h-full rounded-l-lg outline-none pl-3 focus:ring-2 ring-[#166ff4]"
          />
          <div class="w-[23%] pr-5 border-x-2 min-w-fit border-[#0D6EFD]">
            <select
              @change="select"
              class="h-full mx-1 text-md min-w-fit w-full text-center outline-none"
            >
              <option selected>All category</option>
              <option :value="i.id" v-for="i in menu" :key="i.id">
                {{ i.name }}
              </option>
            </select>
          </div>
          <button
            type="submit"
            class="h-full w-[17%] bg-[#0D6EFD] text-white rounded-r-lg focus:ring-2 ring-[#166ff4] hover:bg-[#1464db]"
          >
            Search
          </button>
        </form>
        <ul class="gap flex gap-10">
          <li><router-link to="/profile">
            <img class="mx-auto" src="../assets/header/user.svg" alt="img" />
            <h1 class="text-xs text-gray-400 font-medium">
              Profile
            </h1></router-link>
          </li>
          <li class="message"><router-link to="/message">
            <img class="mx-auto" src="../assets/header/message.svg" alt="img" />
            <h1 class="text-xs text-gray-400 font-medium">
              Message
            </h1>
          </router-link>
          </li>
          <li class="heart"><router-link to="/orders">
            <img
              class="mx-auto font-"
              src="../assets/header/orders.svg"
              alt="img"
            />
            <h1 class="text-xs text-gray-400 font-medium">
              Orders
            </h1></router-link>
          </li>
          <li class="min-w-fit">
            <router-link to="/mycart">
              <img class="mx-auto" src="../assets/header/cart.svg" alt="img" />
              <h1 class="text-xs text-gray-400 min-w-fit font-medium">
                My cart
              </h1></router-link
            >
          </li>
        </ul>
      </div>
      <div class="mr-24 -ml-16 my-3">
        <form
          @submit.prevent="Search"
          class="flex lg:hidden w-full min-w-[200px] h-[35px] mx-20 border-2 border-[#0D6EFD] rounded-lg"
        >
          <input
            type="text"
            placeholder="Search"
            class="w-[60%] h-full rounded-l-lg outline-none pl-3 focus:ring-2 ring-[#166ff4]"
          />
          <div
            class="w-[10%] pr-5 sm:text-md text-xs sm:font-normal font-bold border-x-2 min-w-fit border-[#0D6EFD]"
          >
            <select
              @change="select"
              class="h-full mx-1 text-md min-w-fit w-full text-center outline-none"
            >
              <option selected>All category</option>
              <option :value="i.id" v-for="i in menu" :key="i.id">
                {{ i.name }}
              </option>
            </select>
          </div>
          <button
            type="submit"
            class="h-full lg:w-[17%] w-[20%] bg-[#0D6EFD] text-white rounded-r-lg focus:ring-2 ring-[#166ff4] hover:bg-[#1464db]"
          >
            Search
          </button>
        </form>
      </div>
      <div
        class="flex mainmenu font-medium items-center overflow-hidden overflow-x-auto text-md lg:justify-between py-2 lg:mx-20 mx-5 border-b-2"
      >
        <ul
          class="ul lg:text-black text-blue-500 flex gap-5 items-center min-w-fit"
        >
          <li><i class="bx bx-menu px-1 text-lg"></i>All category</li>
          <li>Hot offers</li>
          <li>Gift boxes</li>
          <li>Projects</li>
          <li>Menu item</li>
          <li>
            <select
              class="text-md min-w-fit bg-transparent text-center outline-none"
            >
              <option selected>Help</option>
              <option value="0">Call</option>
              <option value="1">Chat</option>
            </select>
          </li>
        </ul>
        <ul class="flex items-center lg:text-black text-blue-500 gap-5">
          <li>
            <select
              class="text-md min-w-fit lg:block hidden text-center outline-none"
            >
              <option selected>English, USD</option>
              <option value="0">Uzbek, UZS</option>
              <option value="1">Russian, Rubl</option>
            </select>
          </li>
          <li>
            <div class="text-md min-w-fit lg:block hidden">
              <h1 @click="shipto = !shipto" class="flex">
                <p class="min-w-fit">Ship to 🏴</p>
                <img
                  class="h-3 ml-1 mt-2"
                  src="../assets/header/flag.png"
                  alt="img"
                /><i class="bx bx-chevron-down pl-2 text-xl"></i>
              </h1>
              <div v-show="shipto" class="absolute w-24 bg-white border-2">
                <p class="hover:bg-gray-300 px-1">Ship to</p>
                <p class="hover:bg-gray-300 px-1">Chat</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { menu } from "../constants/menu";
const { toggle, modalToggle } = useToggle();
const shipto = ref(false);
const sidebar = ref(toggle.value);

const menuToggle = () => {
  modalToggle();
  console.log(toggle);
};

function select(event) {
  console.log(event.target.value);
}
</script>

<style lang="scss" scoped>
ul li {
  cursor: pointer;
}

.ul li {
  min-width: fit-content;
}

@media (max-width: 1280px) {
  .message,
  .heart {
    display: none;
  }

  .gap {
    gap: 20px;
  }
  .menu {
    display: block;
  }
}

@media (max-width: 1024px) {
  .mainmenu {
    ul li {
      background: rgba(128, 128, 128, 0.233);
      padding: 4px 6px;
      border-radius: 10px;
    }
  }
}
</style>