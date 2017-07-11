<template>
    <div id="add_item">
        <h1>{{ msg }}</h1>
    </div>   
</template>

<script>
  module.exports = {
    data: function () {
      return {
        msg: 'Hello VUE!'
      }
    }
}
</script>

<style>
    div #add_item h1 {
        color: cyan;
    }
</style>