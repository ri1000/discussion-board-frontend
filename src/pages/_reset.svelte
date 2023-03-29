<script>
  import { logedUserRefresh,paramsStore} from "./_storeUserLogin";
  import { goto, url, leftover} from "@roxi/routify";
  import {  afterUpdate, onMount, beforeUpdate} from 'svelte';
  import {isEmpty, validate} from './loginUser'
  import Footer from '../components/Footet.svelte'
  import Header from '../components/Header.svelte'
  import {params} from '@roxi/routify'
  import Default from '../components/home/Default.svelte'

   //let logedUser = {};
    // $:if(isEmpty($logedUserRefresh)){
    //   console.log("ne e logiran od $$$")
    // }else{
    //   console.log("e logiran od $$")
    // }
  
    afterUpdate(async () => {
        let logedUser = {};
        logedUserRefresh.subscribe(v=>{
          logedUser = v;
        })
        if(isEmpty($logedUserRefresh)){
          //validate
          validate().then(r => {
            if(r === "No sessionStorage items!"){
              console.log("No sessionStorage items!")
              //console.log("Not logged in!")
              //need to pass params why was reddirected to login page for user experience (:

            }else if(r === "okToken"){
                // console.log("expToken")
                //access token that is in session is not expired then 
                // console.log(sessionStorage.userDetails + " from exp token")
                console.log(" ok token sum jas sesea ")
                logedUserRefresh.set(JSON.stringify(sessionStorage.userDetails))
            }else if(r === "allExpired"){
                console.log("se e exipred need to login again")
            }
            else{
              console.log("Logeed in!")
              logedUserRefresh.set(JSON.stringify(r))
            }
          })
        }
        let redirectparams =  JSON.stringify($params)
        let parsedParams = JSON.parse(redirectparams)
        if(parsedParams.redirect == 'logout' && sessionStorage.logedUserRefresh == null){
            logedUserRefresh.set({})
            paramsStore.set(parsedParams)
        }else if(parsedParams.redirect == 'BadCredentials' && sessionStorage.logedUserRefresh == null){
          logedUserRefresh.set({})
          paramsStore.set(parsedParams)
        }else if (!isEmpty(parsedParams.redirect) && parsedParams.redirect != 'logout' && parsedParams.redirect != 'BadCredentials'){
          paramsStore.set(parsedParams)  
          $goto("/",{},false)
        }else{
          paramsStore.set(parsedParams)
          $goto("/",{},false)
        }
        
    })


</script>


  <Header/>
<!-- {#if isEmpty($logedUserRefresh)}
  <Default/>
  <h1>Diffrent notLoged user page here!</h1>
  <h2 class="text-danger">No user logged in!</h2>
  <br/>
  <hr>
  <div class="text-center text-bold">
    
    {#if !isEmpty($paramsStore)}
    {#if $paramsStore.redirect == 'logout'}
    <div class="alert alert-success">
      <h2>You have logedout successfully</h2>
    </div>
    {:else if $paramsStore.redirect == 'BadCredentials'}
    <div class="alert alert-danger">
      <h1>Seems like your username and password don't exist in our system please try again or register an account <a href="{$url("/register")}">here</a> </h1>
    </div>
    <div class="alert alert-dark">
      <h3>Error {$paramsStore.redirect} </h3>
    </div>
    {/if}
  {/if}
  </div>
{:else} -->
<slot>
</slot>
<!-- {/if} -->

<Footer/>