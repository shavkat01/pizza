<template>
  <layout>
    <div class="container mt-10">
      <h1 class="lg:text-6xl md:text-3xl sm:text-xl font-bold my-10">
        Избраное
      </h1>
      <div>
        <div class="filter-side">
          <h5>Фильтр</h5>
          <div class="filter-costs">
            <div class="filter-costs-title">
              <h5>Цена</h5>
              <button>Очистить</button>
            </div>
            <div class="costs-inputs">
              <input type="number" />
              <span class="tire"></span>
              <input type="number" />
            </div>
            <div>
              <input type="range" />
            </div>
            <div>
              <p>Молоко</p>
              <p>Сливки</p>
              <p>Яйцо</p>
            </div>
            <div>
              
              <p>В наличии</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </layout>
</template>

<script>
export default {};
</script>

<style>
</style>