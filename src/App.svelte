
<script>
import Product from './Product.svelte'
import Cart from './Cart.svelte'
	export let name = 'world';
	 let title="kkenfjve";
	 let price;
function setValue(event){
	title=event.target.value
	
}
let productList=[];
let selectedItem=[]
function createProduct(){
	const product={
		title:title,
		price:price
	}
	
productList=productList.concat(product)
}
// function addtoCart(selectedtitle){
// 	selectedItem=selectedItem.concat(selectedItem)
// }

function add_in_cart(event){
	// alert(event.detail)
	selectedItem=selectedItem.concat({...productList.find(prod=>prod.tite===event.title)})
	// [selectedItem,event.detail]
	
}
	// import { afterUpdate, tick } from 'svelte';

	// afterUpdate(() => {
	// 	console.log('the component is about to update');
	// 	// await tick();
	// 	console.log('the component just updated');
	// });
</script>
<style>
.hl{color:purple
	}</style>
<h1 class="hl">Hello {name}!  {title}</h1> 
<input type="text" value={title} on:input={(event)=>{title=event.target.value}} />
<input type="text" value={price} on:input={(event)=>{price=event.target.value}} />
<button on:click={createProduct}>Add Product</button>
<section>
<Cart selectedItems={selectedItem}/>
</section>
<h1 >Created items here</h1>
{#if productList.length==0}
	 <div style="color:red">no product found</div>
{:else}

<section>

{#each productList as item}
	 <Product productTitle={item.title} prPrice={item.price} on:addcart={add_in_cart}/>  <!--here addcart is custom  event dispatcher fn that when click  then we can -->
{/each}
</section>

	 <!-- else content here -->
{/if}


