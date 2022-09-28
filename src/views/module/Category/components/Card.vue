<template>
    <div class="rounded-md relative hover:scale-105 transition-all">
        <img class="w-full h-full rounded-md " :src="data.img" />
        <div
            class="
                z-20
                w-full
                h-1/2
                absolute
                custom1
                top-1/2
                flex
                items-end
                rounded-md
            "
            :class="data.class"
        >
            <p class="px-4 pb-4 font-bold text-2xl text-white">
                {{ data.name }}
            </p>
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
    background-image: linear-gradient(180deg, transparent, #70c05b);
}
.custom2 {
    background-image: linear-gradient(180deg, transparent, #fb6936);
}
</style>