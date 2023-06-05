<script setup>
import { menu } from "./../constants/menu";
import { useSlider } from "./../composables/slider";
const { state } = useSlider();
const { getServices } = useServices();

console.log(state.value[0]);
const store = reactive({
  sliderShow: 0,
  slider:
    "https://img.freepik.com/free-photo/music-podcast-background-with-headphones-microphone-coffee-laptop-pink-table-flat-lay-top-view-flat-lay_501050-993.jpg",
  services: "",
  countries: [
    ["Arabic Emirates", "ae"],
    ["Australia", "au"],
    ["United States", "vi"],
    ["Russia", "ru"],
    ["Italy", "it"],
    ["Denmark", "dk"],
    ["France", "fr"],
    ["Arabic Emirates", "ae"],
    ["China", "cn"],
    ["Great Britain", "br"],
  ],
});

const date = reactive({
  day: 4,
  hour: 13,
  min: 34,
  sec: 56,
});

const time = setInterval(() => {
  date.sec -= 1;
  if (date.sec == 0) {
    date.min -= 1;
    date.sec = 1000;
  }
  if (date.min == 0) {
    date.hour -= 1;
    date.min = 59;
  }
  if (date.hour == 0) {
    date.day -= 1;
    date.hour = 23;
  }
  if (date.day == 0 && date.hour == 0 && date.min == 0 && date.sec == 0) {
    clearInterval(time)
  }
},1000);

setInterval(() => {
  store.slider = state.value[store.sliderShow];
  store.sliderShow += 1;
  if (store.sliderShow == 4) {
    store.sliderShow = 0;
  }
}, 2000);

const show = () => {
  if (store.sliderShow < 3) {
    store.sliderShow = store.sliderShow + 1;
  } else {
    store.sliderShow = 0;
  }
  store.slider = state.value[store.sliderShow];
};

onMounted(async () => {
  store.services = await getServices();
});
</script>

<template>
  <main>
    <!------------- section 1 ------------->
    <section class="flex gap-5 border-2 bg-white rounded-lg p-5">
      <div class="md:block hidden w-[20%] min-w-fit">
        <ul class="flexflex-col gap-1 min-w-fit lg:text-lg">
          <li
            v-for="i in menu"
            :key="i.id"
            class="p-2 min-w-fit cursor-pointer hover:bg-[#E5F1FF] rounded-md"
          >
            <router-link :to="i.path">{{ i.name }}</router-link>
          </li>
        </ul>
      </div>
      <div class="slider md:w-[60%] relative">
        <img class="absolute w-full h-full" :src="store.slider" alt="img" />
        <div iv class="flex items-center h-full absolute">
          <i
            @click="show"
            class="text-3xl cursor-pointer py-2 bg-[#808080b5] hover:bg-[#808080] relative z-10 text-black bx bx-chevron-left"
          ></i>
        </div>
        <div class="flex items-center h-full absolute right-0">
          <i
            @click="show"
            class="text-3xl cursor-pointer py-2 bg-[#808080b5] hover:bg-[#808080] relative z-10 text-black bx bx-chevron-right"
          ></i>
        </div>
        <div class="relative m-10">
          <h2 class="text-3xl">Latest trending</h2>
          <h1 class="text-4xl font-bold">Electronic items</h1>
          <button class="bg-white rounded-md px-3 py-1 my-5 font-medium">
            Learn more
          </button>
        </div>
      </div>
      <div class="join flex flex-col justify-between w-[20%]">
        <div class="bg-[#E3F0FF] p-3 rounded-lg">
          <div class="flex my-2">
            <img
              class="h-12 w-12"
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt="user"
            />
            <div class="px-3 font-medium">
              <h1>Hi, user</h1>
              <p>let's get stated</p>
            </div>
          </div>
          <button class="bg-blue-500 py-1 text-white w-full rounded-md my-1">
            Join now
          </button>
          <button class="bg-white py-1 text-blue-500 w-full rounded-md my-1">
            Log in
          </button>
        </div>
        <div class="bg-[#F38332] text-white p-5 rounded-lg">
          <p>
            Get US $10 off <br />
            with a new <br />
            supplier
          </p>
        </div>
        <div class="bg-[#55BDC4] text-white p-5 rounded-lg">
          Send quotes with <br />
          supplier <br />
          preferences
        </div>
      </div>
    </section>

    <!------------- section 2 ------------->
    <section
      class="offers flex lg:flex-row flex-col my-5 bg-white rounded-lg border-2"
    >
      <div class="deals lg:w-[30%] w-full p-5 lg:block sm:flex justify-between">
        <div class="sm:pb-0 pb-5">
          <h1 class="font-bold text-lg">Deals and offers</h1>
          <p class="text-gray-500">Hygiene equipments</p>
        </div>
        <div class="flex gap-2 lg:py-6 text-center text-white">
          <div class="bg-[#606060] p-2 w-14 rounded-md">
            <p class="font-bold text-lg">{{date.day}}</p>
            <p>Days</p>
          </div>
          <div class="bg-[#606060] p-2 w-14 rounded-md">
            <p class="font-bold text-lg">{{date.hour}}</p>
            <p>Hour</p>
          </div>
          <div class="bg-[#606060] p-2 w-14 rounded-md">
            <p class="font-bold text-lg">{{date.min}}</p>
            <p>Min</p>
          </div>
          <div class="bg-[#606060] p-2 w-14 rounded-md">
            <p class="font-bold text-lg">{{ date.sec }}</p>
            <p>Sec</p>
          </div>
        </div>
      </div>
      <div class="flex w-full overflow-hidden overflow-x-auto">
        <Offerscard />
      </div>
    </section>

    <!------------- section 3 ------------->
    <h1 class="text-lg font-bold lg:hidden">Home and outdoor</h1>
    <section class="flex my-5 rounded-lg bg-white border-2 border-b-0">
      <div class="w-[31%] relative lg:block hidden">
        <img
          class="absolute w-full h-full rounded-l-lg"
          src="https://img.freepik.com/premium-photo/home-interior-with-armchair-flower-light-living-room-orange-tones-3d-illustration_175992-230.jpg?w=2000"
          alt="img"
        />
        <div class="relative m-5">
          <h1 class="font-bold text-lg">
            Home and <br />
            outdoor
          </h1>
          <button class="bg-white py-1 px-3 rounded-md my-5">Source now</button>
        </div>
      </div>
      <div class="flex w-full">
        <Outdoorcard />
      </div>
    </section>

    <!------------- section 4 ------------->
    <h1 class="text-lg font-bold lg:hidden">Consumer electronics</h1>
    <section class="flex my-5 rounded-lg bg-white border-2 border-b-0">
      <div class="w-[31%] relative lg:block hidden">
        <img
          class="absolute w-full h-full rounded-l-lg"
          src="https://img.freepik.com/premium-photo/white-alarm-clock-headphones-blue-background-music-rest-place-text_178193-204.jpg"
          alt="img"
        />
        <div class="relative m-5">
          <h1 class="font-bold text-lg">
            Consumer <br />
            electronics and <br />
            gadgets
          </h1>
          <button class="bg-white py-1 px-3 rounded-md my-5">Source now</button>
        </div>
      </div>
      <div class="flex w-full">
        <electronics />
      </div>
    </section>

    <!------------- section 5 ------------->
    <section class="relative section5">
      <img
        class="absolute w-full h-full"
        src="https://c8.alamy.com/comp/BNHJNB/view-of-multiple-family-residences-in-a-suburban-neighborhood-single-BNHJNB.jpg"
        alt="img"
      />
      <div class="flex justify-between p-10">
        <div class="sarlavha relative text-white">
          <h1 class="text-3xl font-bold relative">
            An easy way to send <br />
            requests to all suppliers
          </h1>
          <p class="py-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing <br />
            elit, sed do eiusmod tempor incididunt.
          </p>
        </div>
        <div class="sm:block hidden w-[40%] p-5 relative bg-white rounded-md">
          <h1 class="text-xl font-bold pb-3">Send quote to suppliers</h1>
          <form class="flex flex-col gap-5 w-full">
            <input
              class="placeholder-black lg:text-lg text-[14px] border-2 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              type="text"
              placeholder="What item you need?"
            />
            <textarea
              class="border-2 rounded-md w-full py-2 px-3 text-gray-700 leading-tight outline-none"
              name="details"
              id="details"
              cols="30"
              rows="3"
              placeholder="Type more details"
            ></textarea>
            <div class="flex lg:flex-row flex-col gap-3">
              <input
                class="placeholder-black border-2 lg:w-1/2 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                type="text"
                placeholder="Quantity"
              />
              <select
                class="border-2 placeholder-black rounded-md max-w-fit py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                name="select"
                id="select"
              >
                <option value="1">Pcs</option>
                <option value="2">Junior</option>
                <option value="3">Middle</option>
                <option value="2">Senior</option>
              </select>
            </div>
            <input
              class="bg-blue-500 py-2 px-5 rounded-md font-medium text-white max-w-fit"
              type="submit"
              value="Send inquiry"
            />
          </form>
        </div>
      </div>
    </section>
    <!------------- section 6 ------------->
    <section class="py-5 -mx-1">
      <h1 class="pb-5 mx-1 font-bold text-2xl">Recommended items</h1>
      <div class="flex justify-between flex-wrap">
        <Itemscard />
      </div>
    </section>

    <!------------- section 7 ------------->
    <section>
      <h1 class="pb-5 mx-1 font-bold text-2xl">Our extra services</h1>
      <div class="flex flex-wrap justify-between">
        <div
          class="text-md lg:w-1/4 w-1/2 my-4"
          v-for="i in store.services"
          :key="i"
        >
          <div class="m-1 bg-white border-2 rounded-xl">
            <div class="flex justify-center">
              <img
                class="w-full h-36 rounded-t-lg"
                :src="`https://images.pexels.com/photos/201442${i.id}/pexels-photo-201442${i.id}.jpeg`"
                alt="img"
              />
            </div>
            <div class="p-5 flex relative">
              <p class="title font-bold w-[80%] text-sm">
                {{ i.title }}
              </p>
              <i
                v-if="i.id == 1"
                class="bx bx-search text-2xl bg-[#D1E7FF] py-3 px-4 rounded-full absolute right-5 -top-7"
              ></i>
              <i
                v-if="i.id == 2"
                class="bx bx-box text-2xl bg-[#D1E7FF] py-3 px-4 rounded-full absolute right-5 -top-7"
              ></i>
              <i
                v-if="i.id == 3"
                class="bx bx-send text-2xl bg-[#D1E7FF] py-3 px-4 rounded-full absolute right-5 -top-7"
              ></i>
              <i
                v-if="i.id == 4"
                class="bx bx-shield-quarter text-2xl bg-[#D1E7FF] py-3 px-4 rounded-full absolute right-5 -top-7"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!------------- section 8 ------------->
    <section>
      <h1 class="pb-5 mx-1 font-bold text-2xl">Suppliers by region</h1>
      <div class="flex flex-wrap justify-between -mx-3">
        <div
          class="flex flex-wrap items-center my-2 lg:w-1/5 md:w-1/3 w-1/2"
          v-for="i in store.countries"
          :key="i[1]"
        >
          <img
            class="h-5 m-3"
            :src="`https://flagcdn.com/16x12/${i[1]}.png`"
            alt="{{ i[0] }}"
          />
          <div>
            <h1 class="font-medium">{{ i[0] }}</h1>
            <p class="text-gray-500">shopname.{{ i[1] }}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.section5 {
  background-color: rgba(0, 0, 255, 0.674);
  background-size: cover;
  background-repeat: no-repeat;
  img {
    z-index: -1;
  }
}

.title {
  display: -webkit-box;
  overflow: hidden;
  height: 45px;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-line-clamp: 2;
}

@media (max-width: 1280px) {
  .join {
    display: none;
  }
  .slider {
    width: 100%;
  }
}
</style>