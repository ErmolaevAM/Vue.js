<template>
    <div id="add_item">
        <table>
            <tr>
                <td>
                    <label for="item_title_input">+ Item title:</label>
                </td>
                <td>
                    <input type="text" id="item_title_input" v-model="itemTitle">
                </td>
            </tr>
            <tr>
                <td>
                    <label for="item_desc_input">+ Item description:</label>
                </td>
                <td>
                    <input type="text" id="item_desc_input" v-model="itemDescription">
                </td>
            </tr>
            <tr>
                <td>
                    <label for="item_price_input">+ Item price:</label>
                </td>
                <td>
                    <input type="number" id="item_price_input" min="0" step="5" v-model="itemPrice">
                </td>
            </tr>
            <tr>
               <td colspan="2">
                   <input type="button" value="Add item" class="item_submit_btn" @click="addItem">
               </td>
            </tr>
        </table>
    </div>   
</template>

<script>
module.exports = {
  data: function () {
    return {
      itemTitle: '',
      itemDescription: '',
      itemPrice: '',
      postResults: []
    }
  },
  methods: {
    addItem: function () {
      this.$http.post('http://localhost:9000/epam/add', {itemTitle: this.itemTitle, itemDescription: this.itemDescription, itemPrice: this.itemPrice},
        function (data, status, request) {
          this.postResults = data
          console.log(request)
          this.$route.router.go('/allitems')
        })
    }
  }
}
</script>

<style>
    div #add_item {
        padding: 10px;
        opacity: 0.9;
        background-color: lightgray;
        border-radius: 10px;
    }
    
    div #add_item table {
        margin: auto;
    }
    
    tr td:first-child {
        width: 200px;
        
    }
    
    label {
        font-family: sans-serif;
        font-size: 20px;
    }
    
    input {
        width: 350px;
        height: 35px;
        font-size: 15px;
        text-align: center;
    }
                
    .item_submit_btn {
        margin-left: 4px;
        width: 550px;
        height: 30px;
        font-family: sans-serif;
        font-size: 20px;
    }
    
</style>