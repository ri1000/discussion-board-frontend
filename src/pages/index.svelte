<script>
    import { metatags ,goto,url} from '@roxi/routify'
     import { afterUpdate} from 'svelte';
     import {logedUserRefresh,logedUserDetails} from './_storeUserLogin'
     import {isEmpty} from './loginUser'
    import { user } from './example/app/_store';
    import Footer from '../components/Footet.svelte'
    import Header from '../components/Header.svelte'
    import Default from '../components/home/Default.svelte'
    
    metatags.title = 'App'


    // let userDetails = null;
    // afterUpdate(async() => {
    //     if(sessionStorage.userDetails != null){
    //         userDetails =JSON.parse(sessionStorage.userDetails)
    //     }
    //     //getnuve od session userDetails i gi displejnave ponadole posle sekoj update
       
    //  })

    

</script>


<!-- {#if userDetails != null}
<h1>Username: {userDetails.username}</h1>    
<h2>Email: {userDetails.email}</h2> 
<h2>Roles: </h2><br/>
{#each userDetails.roles as rol}
    <li>{rol}</li>
{/each}
<h3>User id: {userDetails.id}</h3>
<h4>token: {userDetails.token}</h4>


{/if} -->



<div>
    <Default/>
    <p>statastast</p><br>
    <p>statastast</p><br>

    <p>statastast</p><br>
    <p>statastast</p><br>

    <p>statastast</p><br>

    <p>statastast</p><br>
    <p>statastast</p><br>
    <p>statastast</p><br>
    <p>statastast</p><br>
    <p>statastast</p><br>
    <p>statastast</p><br>
    <p>statastast</p><br>

</div>