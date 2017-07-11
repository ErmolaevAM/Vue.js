<template>
  <div id="app">
    
    <header class="header_view">
        <img src="./img/bat_logo.png" alt="logo" class="header_logo header_elem">
        <h1 class="header_text header_elem">Bat-market</h1>
        <div class="header_elem link_list">
            <a v-link="{ path: '/allitems' }">+ All items</a>
            <a v-link="{ path: '/myitems' }">+ My items</a>
            <a v-link="{ path: '/cart' }">+ My cart</a>
            <a v-link="{ path: '/add' }">+ Add item</a>
        </div>
    </header>

    <div class="content">
        <router-view></router-view>
    </div>
    
    
  </div>
</template>

<script>
    var Hello = require('./components/Hello')

    module.exports = {
      components: {
        hello: Hello
      }
    }
</script>

<style>
    
    html {
        height: 100%;
        width: 100%;
        background-image:url(.//img/bgimg3.png);
        margin-left: 0px;
    }
    
    .header_view {
        height: 80px;
        width: 80%;
        /*margin-top: -15px; убрать комментарий, если убираем класс header_elem */
        margin: auto;
/*        margin-left: 25%;*/
        opacity: 0.9;
        background-color: lightgray;
        border-radius: 10px;
    }
    
    .header_logo {
        height: 100%;
        float: left;
    }
    
    h1 {
        position: relative;
        top: 25%;
        transform: translateY(-50%);
    }
    
    .header_elem {
        display: inline-block;
        padding: 3px;
    }
    
    .link_list {
        float: right;
        margin-top: 25px;
    }
        
    div .header_elem a {
        padding-right: 20px;
        font-size: 24px;
        font-family: sans-serif;
        color: black;
        text-decoration: none;
    }
    
    div .header_elem a:visited {
        color: black;
    }
    
    div .header_elem a:hover {
        color: #63D09F;
    }
    
    .content {
        padding: 10px;
        width: 80%;
        margin: auto;
    }
    
</style>
