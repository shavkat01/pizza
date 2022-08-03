<template>
    <!-- <div class="h-52 w-72 relative rounded-md">
        <img
            class="absolute w-full h-full rounded-md"
            :src="data.img"
            alt="image"
        />
        <div
            class="absolute w-full h-full flex items-end rounded-md"
            :class="data.class"
        >
            <div class="text-3xl ml-4 mb-4 font-bold text-white">
                {{ data.name }}
            </div>
        </div>
    </div> -->
    <div class="h-52 w-72 relative rounded-md flex items-end">
        <img
            class="absolute w-full h-full rounded-md"
            :src="data.img"
            alt="image"
        />
        <div
            class="absolute w-full h-2/3 flex items-end rounded-md"
            :class="data.class"
        >
            <div class="text-2xl ml-4 mb-4 font-bold text-white">
                {{ data.name }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: Object,
    },
};
</script>

<style>
.custom1 {
    /* box-shadow: 0 -70px 70px -2px inset #70c05b; */
    background-image: linear-gradient(180deg, transparent, #70c05b);
}
.custom2 {
    /* box-shadow: 0 -70px 70px -2px inset #fb6936; */
    background-image: linear-gradient(180deg, transparent, #fb6936);
}
</style>