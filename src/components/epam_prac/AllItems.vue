<template>
    <div id="all_items">
        <table class="all_item_list">
            <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Price</th>
                <th>Seller</th>
                <th align="middle"><input type="submit" value="Buy" @click="buy"/></th>
            </tr>
            <tr v-for="item in allitems">
                <td>{{ item.name }}</td>                
                <td>{{ item.description }}</td>                
                <td>{{ item.price }}</td>                
                <td>{{ item.seller.login }}</td>
                <td><input type="checkbox" name="checkbox_id" value="{{ item.id }}" v-model="checkboxValues"></td>
            </tr>
        </table>
    </div>
</template>

<script>
module.exports = {
  data: function () {
    return {
      allitems: [],
      checkboxValues: [],
      postResults: []
    }
  },
  methods: {
    buy: function () {
      this.$http.post('http://localhost:9000/epam/buy', {checkboxValues: this.checkboxValues},
        function (data, status, request) {
          this.postResults = data
          console.log(request)
          this.$route.router.go('/cart')
        })
    }
  },
  ready: function () {
    this.$http({url: 'http://localhost:9000/epam/allitems', method: 'GET'}).then(function (response) {
      console.log(response)
      this.$set('allitems', response.data)
    }, function (response) {
      console.log(response)
    })
  }
}
</script>

<style>
    #all_items {
        padding: 10px;
        opacity: 0.9;
        background-color: lightgray;
        border-radius: 10px;
    }
    
    .all_item_list tr th {
        font-family: sans-serif;
        font-size: 20px;
    }
    
    .all_item_list input {
        width: 70px;
        height: 35px;
        font-size: 15px;
        text-align: center;
    }
    
    .all_item_list {
        width: 80%;
        margin: auto;
        border-top: 4px solid black;
        border-bottom: 4px solid black;
    }
    
    .all_item_list tr td {
        text-align: center; 
        border-top: 1px solid black;
        font-family: sans-serif;
        font-size: 16px;
    }    
</style>