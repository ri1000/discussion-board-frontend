<script>
    import Footer from '../../components/Footet.svelte'
    import Header from '../../components/Header.svelte'


</script>

{#if sessionStorage.logedUserRefresh == null}
<slot></slot>
{:else}
<div>
    <Header/>
</div>
<div>
    <h1>Mi stoe oti si logiran neznam so brkis tuka</h1>
</div>
<div>
    <Footer/>    
</div>


{/if}
