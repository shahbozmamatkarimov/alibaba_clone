<template>
  <footer class="text-lg text-gray-500">
    <div class="flex flex-col items-center py-10 bg-[#EFF2F4]">
      <h1 class="font-bold text-black text-center">
        Subscribe on our newsletter
      </h1>
      <p class="px-2 text-center">
        Get daily news on upcoming offers from many suppliers all over the world
      </p>
      <form class="flex flex-wrap justify-center items-center py-8">
        <div
          class="flex items-center my-2 leading-[5rem] rounded-lg border-2 bg-white"
        >
          <i class="bx bx-envelope text-gray-500 px-2"></i>
          <input
            class="rounded-lg w-full py-1 pr-3 text-gray-700 leading-tight focus:outline-none"
            type="email"
            placeholder="Email"
            required
          />
        </div>
        <input
          class="bg-blue-500 cursor-pointer rounded-lg text-white mx-2 py-1 px-5"
          type="submit"
          value="Subscribe"
        />
      </form>
    </div>
    <div class="flex flex-wrap justify-between bg-white py-10 lg:px-20 px-5">
      <div class="lg:w-[25%] w-[40%]">
        <h1 class="pb-5">
          <router-link to="/" class="flex cursor-pointer">
            <img
              class="bg-[#0D6EFD] p-2 h-10 rounded-md"
              src="../assets/header/bag.svg"
              alt="img"
            />
            <img src="../assets/header/brand.svg" class="px-3" alt="img" />
          </router-link>
        </h1>
        <p>
          Best information about the company gies here but now lorem ipsum is
        </p>
        <div class="flex gap-3 py-5">
          <i
            class="bx bxl-facebook bg-gray-400 text-white p-2 rounded-full"
          ></i>
          <i class="bx bxl-twitter bg-gray-400 text-white p-2 rounded-full"></i>
          <i
            class="bx bxl-linkedin bg-gray-400 text-white p-2 rounded-full"
          ></i>
          <i
            class="bx bxl-instagram bg-gray-400 text-white p-2 rounded-full"
          ></i>
          <i class="bx bxl-youtube bg-gray-400 text-white p-2 rounded-full"></i>
        </div>
      </div>
      <div class="lg:w-min md:w-1/5 sm:w-1/2 w-full">
        <h2 class="font-bold text-black pb-5">About</h2>
        <ul>
          <li>About Us</li>
          <li>Find store</li>
          <li>Categories</li>
          <li>Blogs</li>
        </ul>
      </div>
      <div class="lg:w-min md:w-1/3 sm:w-1/2 w-full">
        <h2 class="font-bold text-black pb-5">Partnership</h2>
        <ul>
          <li>About Us</li>
          <li>Find store</li>
          <li>Categories</li>
          <li>Blogs</li>
        </ul>
      </div>
      <div class="lg:w-min md:w-1/3 sm:w-1/2 w-full">
        <h2 class="font-bold text-black pb-5">Information</h2>
        <ul>
          <li>Help Center</li>
          <li>Money Refund</li>
          <li>Shipping</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div class="lg:w-min md:w-1/3 sm:w-1/2 w-full">
        <h2 class="font-bold text-black pb-5">For users</h2>
        <ul>
          <li>Login</li>
          <li>Register</li>
          <li>Settings</li>
          <li>My Orders</li>
        </ul>
      </div>
      <div class="lg:w-min md:w-1/3 sm:w-1/2 w-full">
        <h2 class="font-bold text-black pb-5">Get app</h2>
        <div>
          <div>
            <div class="flex flex-col gap-2">
              <img src="../assets/header/apple.png" alt="apple" />
              <img src="../assets/header/play.png" alt="playmarket" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-between bg-[#EFF2F4] lg:px-20 px-5 py-5">
      <h1>© 2023 Ecommerce.</h1>
      <select class="bg-transparent outline-none" name="lang" id="lang">
        <option value="1">
          <img src="https://flagcdn.com/16x12/en.png" alt="en" />
          English
        </option>
        <option value="1">
          <img src="https://flagcdn.com/16x12/en.png" alt="en" />
          Russian
        </option>
        <option value="1">
          <img src="https://flagcdn.com/16x12/en.png" alt="en" />
          Uzbek
        </option>
      </select>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped></style>