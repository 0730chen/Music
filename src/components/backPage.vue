<template>
  <div class="back" @click="getBack">
  </div>
</template>
<style scoped>
  .back {
    position: fixed;
    left: 10px;
    border: 10px solid transparent;
    border-left: 10px solid #ccc;
  }

  .back:hover {
    border-right: 10px solid #808080;
  }

  .back::after {
    content: '';
    position: absolute;
    top: -10px;
    left: -7px;
    border: 10px solid transparent;
    border-right: 10px solid #fff;
  }

</style>
<script>
    export default {
        data() {
            return {}
        },
        methods: {
            getBack: function () {
                this.$router.back()
            }
        },

    }
</script>

