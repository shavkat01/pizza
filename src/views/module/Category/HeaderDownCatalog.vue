<template>
  <div
    class="absolute top-[100%] w-full bg-white py-8 shadow-xl"
  >
    <div class="container flex justify-between">
      <div
        v-for="(catalog, index) in downCatalogs"
        :key="index"
        class="flex flex-col gap-4"
      >
        <h4
          class="font-medium cursor-pointer"
          v-if="catalog.first"
          @click="$router.push(`/catalog/${catalog.first.id}`)"
        >
          {{ catalog.first.text }}
        </h4>
        <h4
          class="font-medium cursor-pointer"
          v-if="catalog.second"
          @click="$router.push(`/catalog/${catalog.second.id}`)"
        >
          {{ catalog.second.text }}
        </h4>
        <h4
          class="font-medium cursor-pointer"
          v-if="catalog.third"
          @click="$router.push(`/catalog/${catalog.third.id}`)"
        >
          {{ catalog.third.text }}
        </h4>
        <h4
          class="font-medium cursor-pointer"
          v-if="catalog.fourth"
          @click="$router.push(`/catalog/${catalog.fourth.id}`)"
        >
          {{ catalog.fourth.text }}
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      downCatalogs: [
        {
          first: {
            text: "Молоко, сыр, яйцо",
            id: 1,
          },
          second: {
            text: "Хлеб",
            id: 2,
          },
          third: {
            text: "Фрукты и овощи",
            id: 3,
          },
          fourth: {
            text: "Замороженные продукты",
            id: 4,
          },
        },
        {
          first: {
            text: "Напитки",
            id: 5,
          },
          second: {
            text: "Кондитерские изделия",
            id: 6,
          },
          third: {
            text: "Чай, кофе",
            id: 7,
          },
        },
        {
          first: {
            text: "Бакалея",
            id: 8,
          },
          second: {
            text: "Здоровое питание",
            id: 9,
          },
          third: {
            text: "Зоотовары",
            id: 10,
          },
        },
        {
          first: {
            text: "Непродовольственные товары",
            id: 11,
          },
          second: {
            text: "Детское питание",
            id: 12,
          },
          third: {
            text: "Мясо, птица, колбаса",
            id: 13,
          },
        },
      ],
    };
  },
};
</script>