<template>
    <div id="my_items">
        <table class="my_item_list">
            <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Price</th>
                <th>Buyer</th>
            </tr>
            <tr>
                <td>item10</td>
                <td>item10 desc</td>
                <td>1500</td>
                <td>kirya</td>
            </tr>
            <tr>
                <td>item22</td>
                <td>item22 desc</td>
                <td>1000</td>
                <td>ksu</td>
            </tr>
            <tr v-for="item in items">
                <td>{{ item.title }}</td>                
                <td>{{ item.description }}</td>                
                <td>{{ item.price }}</td>                
                <td>{{ item.buyer }}</td>
            </tr>
        </table>
    </div>   
</template>

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