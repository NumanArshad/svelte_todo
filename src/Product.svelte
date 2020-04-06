<script>
import {createEventDispatcher} from "svelte";
export let productTitle="extension tool"
export let prPrice;

const dispatch=createEventDispatcher();

 function addToCart(){ 
     
dispatch('addcart',productTitle)  //event disptacher custom function 
}
</script>
<style>
div{
    box-shadow:1 1 2px solid black;
    background:yellowgreen;
    border-radius: 2px 2px 3px solid black;
    cursor:pointer;
    padding:20px;
    margin:5px
}
</style>
<div>

product title is  {productTitle} and price is {prPrice}
 <button on:click={addToCart}>add to Cart</button>


</div>