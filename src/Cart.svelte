<script>
export let selectedItems=[];
$:total=selectedItems.reduce((sm,currentValue)=>{
    return sm+currentValue.price 
},1);
</script>


<h1>selected cart items here and total balance is</h1>
{#if selectedItems.length>0}
{#each selectedItems as item}
    <div style="background-color:yellow;color:black">{item.title}</div><br />
    
{/each}
<div>${total}</div>
{:else}    
<div>no selected</div>
{/if}
