<template>
    <div id="my_items">
        <table class="my_item_list">
            <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Price</th>
                <th>Buyer</th>
            </tr>
            <tr v-for="item in myitems">
                <td>{{ item.name }}</td>                
                <td>{{ item.description }}</td>                
                <td>{{ item.price }}</td>                    
                <td>{{ item.buyer.login }}</td>
            </tr>
        </table>
    </div>   
</template>

<script>
module.exports = {
  data: function () {
    return {
      myitems: []
    }
  },

  ready: function () {
    this.$http({url: 'http://localhost:9000/epam/myitems', method: 'GET'}).then(function (response) {
      console.log(response)
      this.$set('myitems', response.data)
    }, function (response) {
      console.log(response)
    })
  }
}
</script>

<style>
    #my_items {
        padding: 10px;
        opacity: 0.9;
        background-color: lightgray;
        border-radius: 10px;
    }
    
    .my_item_list tr th {
        font-family: sans-serif;
        font-size: 20px;
    }
        
    .my_item_list {
        width: 80%;
        margin: auto;
        border-top: 4px solid black;
        border-bottom: 4px solid black;
    }
    
    .my_item_list tr td {
        text-align: center; 
        border-top: 1px solid black;
        height: 35px;
        font-family: sans-serif;
        font-size: 16px;
    }
    
</style>