<template>
    <div id="cart">
        <table class="cart_item_list">
            <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Price</th>
                <th>Seller</th>
            </tr>
            <tr v-for="item in cart">
                <td>{{ item.name }}</td>                
                <td>{{ item.description }}</td>                
                <td>{{ item.price }}</td>                
                <td>{{ item.seller.login }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
module.exports = {
  data: function () {
    return {
      cart: []
    }
  },

  ready: function () {
    this.$http({url: 'http://localhost:9000/epam/cart', method: 'GET'}).then(function (response) {
      console.log(response)
      this.$set('cart', response.data)
    }, function (response) {
      console.log(response)
    })
  }
}
</script>

<style>
    #cart {
        padding: 10px;
        opacity: 0.9;
        background-color: lightgray;
        border-radius: 10px;
    }
    
    .cart_item_list tr th {
        font-family: sans-serif;
        font-size: 20px;
    }
        
    .cart_item_list {
        width: 80%;
        margin: auto;
        border-top: 4px solid black;
        border-bottom: 4px solid black;
    }
    
    .cart_item_list tr td {
        text-align: center; 
        border-top: 1px solid black;
        height: 35px;
        font-family: sans-serif;
        font-size: 16px;
    }
    
</style>