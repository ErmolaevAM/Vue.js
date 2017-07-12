<template>
    <div id="cart">
        <table class="cart_item_list">
            <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Price</th>
                <th>Seller</th>
            </tr>
            <tr>
                <td>item1</td>
                <td>item1 desc</td>
                <td>500</td>
                <td>igor</td>
            </tr>
            <tr>
                <td>item2</td>
                <td>item2 desc</td>
                <td>1000</td>
                <td>ivan</td>
            </tr>
            <tr v-for="item in items">
                <td>{{ item.title }}</td>                
                <td>{{ item.description }}</td>                
                <td>{{ item.price }}</td>                
                <td>{{ item.seller }}</td>
            </tr>
        </table>
    </div>
</template>

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