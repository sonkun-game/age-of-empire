export default {
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
