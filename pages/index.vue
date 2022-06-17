<template>
  <div>
    <h1>Empire game</h1>

    <div class="container">
      <div class="road"></div>

      <div class="call_army">
          <button class="call" id="farmer">farmer</button>
          <button class="call" id="solider" @click="summon_solider">solider</button>
          <button class="call" id="archer" @click="summon_archer">archer</button>
          <button class="call" id="leader" @click="summon_leader">leader</button>
      </div>

      <div class="army_road" id="army_road">

        <!-- <div class="army solider"></div> -->
        <div class="army right solider"></div>

      </div>

      <div class="building left">
        <div class="health left">
          <div class="inside"></div>
        </div>
      </div>

      <div class="building right">
        <div class="health right">
          <div class="inside"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  methods: {
    summon_solider() {
      $('#army_road').append('<div class="army solider"></div>');
      $('.solider').animate(
        {
          left: '+=1350px'
        },8000, "linear", function(){
          $('.solider').remove();
        });
    },
    summon_archer() {
      $('#army_road').append('<div class="army archer"></div>');
      $('.archer').animate(
        {
          left: '+=1350px'
        },8000, "linear", function(){
          $('.archer').remove();
        });
    },
    summon_leader() {
      $('#army_road').append('<div class="army leader"></div>');
      $('.leader').animate(
        {
          left: '+=1350px'
        },8000, "linear", function(){
          $('.leader').remove();
        });
    }
  },
}
</script>

<style>
  .container {
    width: 90vw;
    height: 600px;
    border: 1px black solid;
    position: relative;
    margin: auto;
  }
  .road {
    width: 100%;
    border-top: 1px black solid;
    height: 100px;
    position: absolute;
    bottom: 0;
  }
  .building {
    width: 120px;
    height: 250px;
    background: gray;
    position: absolute;
    bottom: 50px;
  }
  .building.left {
    left: 15px;
  }
  .building.right {
    right: 15px;
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
  .call_army {
    display: inline-flex;
    width: 100%;
    height: 75px;
    border-bottom: 1px black solid;
    position: absolute;
    top: 0;
  }
  .army {
    position: absolute;
    bottom: 15px;
    left: 155px;
    z-index: 999;
  }
  .army.right {
    left: unset;
    right: 155px;
  }
  .army.solider {
    background: red;
    width: 25px;
    height: 45px;
  }
  .army.archer {
    background: green;
    width: 25px;
    height: 45px;
  }
  .army.leader {
    background: orange;
    width: 50px;
    height: 60px;
  }
</style>
