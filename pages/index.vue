<template>
  <div>
    <h1>Empire game</h1>

    <div class="container">
      <div class="road"></div>

      <div class="call_army">
        <!-- <button class="call" id="farmer">farmer</button>
          <button class="call" id="solider" @click="summon_solider">solider</button>
          <button class="call" id="archer" @click="summon_archer">archer</button>
          <button class="call" id="leader" @click="summon_leader">leader</button> -->
      </div>

      <div class="army_road" id="army_road">
        <!-- <div class="army solider"></div> -->
        <div class="army right solider"></div>
      </div>

      <div class="building left">
        <Building> </Building>
      </div>

      <div class="building right">
        <Building> </Building>
      </div>
    </div>
  </div>
</template>

<script src="assets/js/index.js"></script>

<script>
export default {
  setup() {},
};
</script>

<style scoped>
@import "assets/css/style.css";
</style>
>
