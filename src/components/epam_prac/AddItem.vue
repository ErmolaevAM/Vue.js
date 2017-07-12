<template>
    <div id="add_item">
        <form action="#" id="add_item_form" method="post">
            <table>
                <tr>
                    <td>
                        <label for="item_title_input">+ Item title:</label>
                    </td>
                    <td>
                        <input type="text" id="item_title_input">
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="item_desc_input">+ Item description:</label>
                    </td>
                    <td>
                        <input type="text" id="item_desc_input">
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="item_seller_input">+ Item seller:</label>
                    </td>
                    <td>
                        <input type="text" id="item_seller_input">
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="item_price_input">+ Item price:</label>
                    </td>
                    <td>
                        <input type="number" id="item_price_input" min="0" step="5">
                    </td>
                </tr>
                <tr>
                   <td colspan="2">
                       <input type="submit" value="Add item" class="item_submit_btn">
                   </td>
                </tr>
            </table>
            
        </form>
    </div>   
</template>

<style>
    div #add_item {
        padding: 10px;
        opacity: 0.9;
        background-color: lightgray;
        border-radius: 10px;
    }
    
    div #add_item form table {
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