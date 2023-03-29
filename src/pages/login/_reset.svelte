<script>

    import Footer from '../../components/Footet.svelte'
    import Header from '../../components/Header.svelte'
   
</script>
<Header/>
{#if sessionStorage.logedUserRefresh == null}
<slot></slot>
{:else}
<h3 class="text-danger">No need login</h3>
{/if}
<Footer/>