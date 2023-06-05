<template>
  <div class="container mx-auto bg-gray-50">
    <Header @click="event" />
    <Sidebar v-if="toggle" @click="close"  /> 
    <div class="md:px-20 px-3 py-7" @mouseover="close">
      <slot />
    </div>
    <Footer @mouseover="close" />
  </div>
</template>

<script setup>
const toggle = ref(false)

const event = (e) => {
  if (e.target.className.match('bx-menu')){
    toggle.value = !toggle.value
  }
}

const close = ()=>{
  toggle.value = false; 
} 
</script>

<style lang="scss" scoped></style>