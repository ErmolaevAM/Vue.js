<template>
    <div id="all_items">
        <table class="all_item_list">
            <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Price</th>
                <th>Seller</th>
                <th align="middle"><input type="submit" value="Buy"/></th>
            </tr>
            <tr>
                <td>item145</td>
                <td>item145 desc</td>
                <td>3000</td>
                <td>liza</td>
                <td align="middle"><input type="checkbox" name="checkbox_id" value="{{ item.id }}"></td>
            </tr>
            <tr>
                <td>item12</td>
                <td>item12 desc</td>
                <td>10000</td>
                <td>masha</td>
                <td align="middle"><input type="checkbox" name="checkbox_id" value="{{ item.id }}"></td>
            </tr>
            <tr v-for="item in items">
                <td>{{ item.title }}</td>                
                <td>{{ item.description }}</td>                
                <td>{{ item.price }}</td>                
                <td>{{ item.seller }}</td>
                <td align="middle"><input type="checkbox" name="checkbox_id" value="{{ item.id }}"></td>
            </tr>
        </table>
    </div> 
</template>

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