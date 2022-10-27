<template>
  <div>
    <div class="building right">
      <div class="health right">
        <div class="inside"></div>
      </div>
      <img
        class="building"
        src="@/assets/img/building/shop.png"
        alt="No Image"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Building",
};
</script>

<style lang="css" scoped>
.building {
  width: 200px;
}
.building .health {
  width: 155px;
  height: 15px;
  border: 1px black solid;
  position: absolute;
  top: -20px;
}
.building .health .inside {
  width: 100%;
  height: 100%;
  background: greenyellow;
}
.building .health.left {
  left: -15px;
}
.building .health.right {
  right: -15px;
}
</style>
