<template>
    <div class="flex justify-center items-center min-h-screen">
        <div class="bg-white">
            <img src="../assets/header/error.svg" alt="error">
        </div>
        <div>
            <h1 class="text-[#47B886] text-5xl">404 not found</h1>
            <p class="text-[#47b885a7] text-2xl">Looking something we don't serve?</p>
            <p>
                <router-link to="/" class="underline">back to home</router-link>
            </p>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "error"
})    
</script>

<style lang="scss" scoped></style>