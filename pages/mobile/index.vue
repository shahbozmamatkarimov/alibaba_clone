<template>
  <main>
    <!------------- page path ------------->
    <section>
      <div class="flex gap-1 pl-5 text-gray-500 items-center -mt-4 mb-2">
        <p>Home</p>
        <i class="bx bx-chevron-right"></i>
        <p>Clothings</p>
        <i class="bx bx-chevron-right"></i>
        <p>Men's wear</p>
        <i class="bx bx-chevron-right"></i>
        <p>Summer clothing</p>
      </div>
    </section>
  </main>

  <!------------- aside ------------->
  <div class="flex">
    <aside class="md:block hidden w-52 max-w-[25%] mr-5 font-medium pl-5">
      <!------------- Category ------------->
      <div>
        <h1
          @click="showToggle('Category')"
          class="flex justify-between cursor-pointer pb-2 font-bold pt-2"
        >
          Category
          <i
            v-if="show.Category[0]"
            class="bx bx-chevron-down text-gray-500 font-extrabold"
          ></i
          ><i v-else class="bx bx-chevron-up text-gray-500 font-extrabold"></i>
        </h1>
        <div v-show="!show.Category[0]">
          <ul class="leading-8 text-gray-500">
            <li
              v-for="(i, index) in category"
              :key="index"
              v-show="show.Category[1] > index"
            >
              {{ i.name }}
            </li>
          </ul>
          <div
            class="cursor-pointer text-blue-500"
            @click="seeToggle('Category')"
            v-if="show.Category[1] == 4"
          >
            See all
          </div>
          <div
            class="cursor-pointer text-blue-500"
            @click="removeToggle('Category')"
            v-else
          >
            remove
          </div>
        </div>
      </div>

      <hr />
      <div>
        <h1
          @click="showToggle('Brands')"
          class="flex justify-between cursor-pointer pb-2 font-bold pt-2"
        >
          Brands
          <i
            v-if="show.Brands[0]"
            class="bx bx-chevron-down text-gray-500 font-extrabold"
          ></i
          ><i v-else class="bx bx-chevron-up text-gray-500 font-extrabold"></i>
        </h1>
        <div v-show="!show.Brands[0]">
          <ul class="leading-8 text-gray-500">
            <li
              v-for="(i, index) in brends"
              :key="index"
              v-show="show.Brands[1] > index"
            >
              <input type="checkbox" /> {{ i.name }}
            </li>
          </ul>
          <div
            class="cursor-pointer text-blue-500"
            @click="seeToggle('Brands')"
            v-if="show.Brands[1] == 4"
          >
            See all
          </div>
          <div
            class="cursor-pointer text-blue-500"
            @click="removeToggle('Brands')"
            v-else
          >
            remove
          </div>
        </div>
      </div>
      <hr />

      <div>
        <h1
          @click="showToggle('Features')"
          class="flex justify-between cursor-pointer pb-2 font-bold pt-2"
        >
          Features
          <i
            v-if="show.Features[0]"
            class="bx bx-chevron-down text-gray-500 font-extrabold"
          ></i
          ><i v-else class="bx bx-chevron-up text-gray-500 font-extrabold"></i>
        </h1>
        <div v-show="!show.Features[0]">
          <ul class="leading-8 text-gray-500">
            <li
              v-for="(i, index) in features"
              :key="index"
              v-show="show.Features[1] > index"
            >
              <input type="checkbox" /> {{ i.name }}
            </li>
          </ul>
          <div
            class="cursor-pointer text-blue-500"
            @click="seeToggle('Features')"
            v-if="show.Features[1] == 4"
          >
            See all
          </div>
          <div
            class="cursor-pointer text-blue-500"
            @click="removeToggle('Features')"
            v-else
          >
            remove
          </div>
        </div>
      </div>
      <hr />

      <div>
        <h1
          @click="showToggle('Pricerange')"
          class="flex justify-between py-2 cursor-pointer font-bold"
        >
          Price range
          <i
            v-if="show.Pricerange[0]"
            class="bx bx-chevron-down text-gray-500 font-extrabold"
          ></i
          ><i v-else class="bx bx-chevron-up text-gray-500 font-extrabold"></i>
        </h1>
        <div v-show="!show.Pricerange[0]">
          <ul class="leading-8 text-gray-500">
            <li
              v-for="(i, index) in pricerange"
              :key="index"
              v-show="show.Pricerange[1] > index"
            >
              <input type="checkbox" /> {{ i.name }}
            </li>
          </ul>
          <div
            class="cursor-pointer text-blue-500"
            @click="seeToggle('Pricerange')"
            v-if="show.Pricerange[1] == 4"
          >
            See all
          </div>
          <div
            class="cursor-pointer text-blue-500"
            @click="removeToggle('Pricerange')"
            v-else
          >
            remove
          </div>
        </div>
      </div>
      <hr />

      <div>
        <h1
          @click="showToggle('Condition')"
          class="flex justify-between py-2 cursor-pointer font-bold"
        >
          Condition
          <i
            v-if="show.Condition[0]"
            class="bx bx-chevron-down text-gray-500 font-extrabold"
          ></i
          ><i v-else class="bx bx-chevron-up text-gray-500 font-extrabold"></i>
        </h1>
        <div v-show="!show.Condition[0]">
          <ul class="leading-8 text-gray-500">
            <li
              v-for="(i, index) in condition"
              :key="index"
              v-show="show.Condition[1] > index"
            >
              <input type="checkbox" /> {{ i.name }}
            </li>
          </ul>
          <div
            class="cursor-pointer text-blue-500"
            @click="seeToggle('Condition')"
            v-if="show.Condition[1] == 4"
          >
            See all
          </div>
          <div
            class="cursor-pointer text-blue-500"
            @click="removeToggle('Condition')"
            v-else
          >
            remove
          </div>
        </div>
      </div>
      <hr />

      <div>
        <h1
          @click="showToggle('Ratings')"
          class="flex justify-between cursor-pointer py-2 font-bold"
        >
          Ratings
          <i
            v-if="show.Ratings[0]"
            class="bx bx-chevron-down text-gray-500 font-extrabold"
          ></i
          ><i v-else class="bx bx-chevron-up text-gray-500 font-extrabold"></i>
        </h1>
        <div v-show="!show.Ratings[0]">
          <ul class="leading-8 text-gray-500">
            <li
              v-for="(i, index) in ratings"
              :key="index"
              v-show="show.Ratings[1] > index"
            >
              <input type="checkbox" /> {{ i.name }}
            </li>
          </ul>
          <div
            class="cursor-pointer text-blue-500"
            @click="seeToggle('Ratings')"
            v-if="show.Ratings[1] == 4"
          >
            See all
          </div>
          <div
            class="cursor-pointer text-blue-500"
            @click="removeToggle('Ratings')"
            v-else
          >
            remove
          </div>
        </div>
      </div>
      <hr />

      <div>
        <h1
          @click="showToggle('Manufacturer')"
          class="flex justify-between py-2 cursor-pointer font-bold"
        >
          Manufacturer
          <i
            v-if="show.Manufacturer[0]"
            class="bx bx-chevron-down text-gray-500 font-extrabold"
          ></i
          ><i v-else class="bx bx-chevron-up text-gray-500 font-extrabold"></i>
        </h1>
        <div v-show="!show.Manufacturer[0]">
          <ul class="leading-8 text-gray-500">
            <li
              v-for="(i, index) in manufacturer"
              :key="index"
              v-show="show.Manufacturer[1] > index"
            >
              <input type="checkbox" /> {{ i.name }}
            </li>
          </ul>
          <div
            class="cursor-pointer text-blue-500"
            @click="seeToggle('Manufacturer')"
            v-if="show.Manufacturer[1] == 4"
          >
            See all
          </div>
          <div
            class="cursor-pointer text-blue-500"
            @click="removeToggle('Manufacturer')"
            v-else
          >
            remove
          </div>
        </div>
      </div>
      <hr />
    </aside>

    <main class="md:w-[87%] w-full p-5">
      <!------------- navbar ------------->
      <nav
        class="flex justify-between items-center pr-2 pl-5 bg-white py-2 border-2 rounded-md"
      >
        <h1 class="lg:block hidden min-w-fit">12,911 items in Mobile accessory</h1>
        <div class="flex items-center justify-center lg:w-fit w-full gap-4">
          <div class="hidden lg:flex gap-2">
            <input type="checkbox" id="verify" />
            <label for="verify">Verified only</label>
          </div>
          <select
            class="lg:block hidden outline-none w-40 border-2 py-1 px-2 rounded-lg"
            name="filter"
            id="filter"
          >
            <option selected>Featured</option>
            <option value="1">New</option>
            <option value="2">Old</option>
          </select>
          <h1 class="block lg:hidden border-2 py-1 px-2 rounded-lg">Sort: Newest <i class='bx bx-menu-alt-left' ></i></h1>
          <h1 class="block lg:hidden border-2 py-1 px-2 rounded-lg">Filter (3) <i class='bx bx-filter-alt' ></i></h1>
          <p>
            <i
              class="p-1 text-[20px] rounded-l-md bg-gray-300 border-2 bx bxs-dashboard"
            ></i>
            <i
              class="p-1 text-[20px] rounded-r-md border-l-0 font-bold border-2 bx bx-menu"
            ></i>
          </p>
        </div>
      </nav>

      <!------------- filter ------------->
      <section>
        <div class="overflow-hidden overflow-x-auto">
          <ul class="flex gap-2 my-4 text-gray-700">
            <li class="min-w-fit pb-1 px-2 border-2 border-blue-400 rounded-md">
              Samsung
              <i class="bx bx-x pl-3 text-lg font-bold text-gray-500"></i>
            </li>
            <li class="min-w-fit pb-1 px-2 border-2 border-blue-400 rounded-md">
              Apple <i class="bx bx-x pl-3 text-lg font-bold text-gray-500"></i>
            </li>
            <li class="min-w-fit pb-1 px-2 border-2 border-blue-400 rounded-md">
              Poco <i class="bx bx-x pl-3 text-lg font-bold text-gray-500"></i>
            </li>
            <li class="min-w-fit pb-1 px-2 border-2 border-blue-400 rounded-md">
              Metallic
              <i class="bx bx-x pl-3 text-lg font-bold text-gray-500"></i>
            </li>
            <li class="min-w-fit pb-1 px-2 border-2 border-blue-400 rounded-md">
              4 star
              <i class="bx bx-x pl-3 text-lg font-bold text-gray-500"></i>
            </li>
            <li class="min-w-fit pb-1 px-2 border-2 border-blue-400 rounded-md">
              3 star
              <i class="bx bx-x pl-3 text-lg font-bold text-gray-500"></i>
            </li>
            <li class="pb-1 px-2 text-blue-500 cursor-pointer min-w-fit">
              Clear all filter
            </li>
          </ul>
        </div>
      </section>

      <!------------- product section ------------->
      <section>
        <div class="flex flex-wrap justify-between overflow-hidden">
          <Productscard />
        </div>
      </section>

      <!------------- pagination section ------------->
      <section class="flex justify-end gap-2 mb-40">
        <select class="w-28 px-3 py-1 rounded-lg border-2">
          <option selected>Show 10</option>
          <option value="1">Show 25</option>
          <option value="2">Show 50</option>
          <option value="1">All</option>
        </select>

        <div>
          <ul class="inline-flex items-center font-bold -space-x-px">
            <li>
              <button
                class="block px-3 py-2 ml-0 leading-tight bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span class="sr-only">Previous</span>
                <i class="bx bx-chevron-left"></i>
              </button>
            </li>
            <li
              class="px-3 py-2 leading-tight bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              v-for="i in 3"
              :key="i"
            >
              {{ i }}
            </li>
            <li>
              <button
                class="block px-3 py-2 leading-tight bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span class="sr-only">Next</span>
                <i class="bx bx-chevron-right"></i>
              </button>
            </li>
          </ul>
        </div>
      </section>
    </main>
  </div>
</template>
  
<script setup>
import { brends } from "../../constants/mobile/brends";
import { category } from "../../constants/mobile/category";
import { condition } from "../../constants/mobile/condition";
import { features } from "../../constants/mobile/features";
import { manufacturer } from "../../constants/mobile/manufacturer";
import { pricerange } from "../../constants/mobile/pricerange";
import { ratings } from "../../constants/mobile/ratings";

const show = reactive({
  Category: [false, 4],
  Brands: [false, 4],
  Features: [true, 4],
  Pricerange: [true, 4],
  Condition: [true, 4],
  Ratings: [true, 4],
  Manufacturer: [true, 4],
});

function seeToggle(val) {
  show[val][1] = 10;
}

function showToggle(val) {
  show[val][0] = !show[val][0];
}

function removeToggle(val) {
  show[val][1] = 4;
}
</script>

<style lang="scss" scoped></style>