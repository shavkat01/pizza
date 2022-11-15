<template>
  <div class="container">
      <h2 class="text-[#8F8F8F]">Video Category</h2>

      <div class="select-box">
        <div class="options-container">
          <div class="option">
            <input
              type="radio"
              class="radio"
              id="automobiles"
              name="category"
            />
            <label for="automobiles">Automobiles</label>
          </div>

          <div class="option">
            <input type="radio" class="radio" id="film" name="category" />
            <label for="film">Film & Animation</label>
          </div>

          <div class="option">
            <input type="radio" class="radio" id="science" name="category" />
            <label for="science">Science & Technology</label>
          </div>

          <div class="option">
            <input type="radio" class="radio" id="art" name="category" />
            <label for="art">Art</label>
          </div>

          <div class="option">
            <input type="radio" class="radio" id="music" name="category" />
            <label for="music">Music</label>
          </div>

          <div class="option">
            <input type="radio" class="radio" id="travel" name="category" />
            <label for="travel">Travel & Events</label>
          </div>

          <div class="option">
            <input type="radio" class="radio" id="sports" name="category" />
            <label for="sports">Sports</label>
          </div>

          <div class="option">
            <input type="radio" class="radio" id="news" name="category" />
            <label for="news">News & Politics</label>
          </div>

          <div class="option">
            <input type="radio" class="radio" id="tutorials" name="category" />
            <label for="tutorials">Tutorials</label>
          </div>
        </div>

        <div class="selected h-11">
          Select Video Category
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data(){

  },
  mounted(){
    const selected = document.querySelector(".selected");
    const optionsContainer = document.querySelector(".options-container");

    const optionsList = document.querySelectorAll(".option");

    selected.addEventListener("click", () => {
      optionsContainer.classList.toggle("active");
    });

    optionsList.forEach(o => {
      o.addEventListener("click", () => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");
      });
    });
  }
}
</script>

<style lang="scss" scoped>
  h2 {
    margin-bottom: 4px;
  }

  .select-box {
    display: flex;
    width: 400px;
    flex-direction: column;
  }

  .select-box .options-container {
    background: #ffffff;
    color: black;
    max-height: 0;
    width: 100%;
    opacity: 0;
    transition: all 0.4s;
    border-radius: 2px;
    overflow: hidden;
    position: absolute;
    order: 1;
    width: 400px;
  }

  .selected {
    background: #fff;
    border-radius: 2px;
    margin-bottom: 8px;
    color: #000;
    position: relative;
    font-size: 16px;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
    order: 0;
  }

  .selected::after {
    content: "";
    background-image: url("@/assets/icons/down.png");
    background-size: contain;
    background-repeat: no-repeat;

    position: absolute;
    height: 100%;
    width: 17px;
    right: 15px;
    top: 19px;

    transition: all 0.4s;
  }

  .select-box .options-container.active {
    max-height: 240px;
    opacity: 1;
    overflow-y: scroll;
    position: absolute;
        width: 400px;
    font-size: 16px;

  }

  .select-box .options-container.active + .selected::after {
    transform: rotateX(180deg);
    top: -19px;
    position: absolute;

  }

  .select-box .options-container::-webkit-scrollbar {
   
    width: 8px;
    background: #e8e8e8;
    border-radius: 0 8px 8px 0;
  }

  .select-box .options-container::-webkit-scrollbar-thumb {
    background: #c7c7c7;
    border-radius: 0 8px 8px 0;
    margin-top: 2px;
  }

  .select-box .option,
  .selected {
    padding: 12px 24px;
    cursor: pointer;
  }

  .select-box .option:hover {
    background: #ccc;
  }

  .select-box label {
    cursor: pointer;
  }

  .select-box .option .radio {
    display: none;
  }
</style>