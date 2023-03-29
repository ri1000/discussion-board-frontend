
<script>
    import {goto,url} from '@roxi/routify'
    import {logedUserRefresh,logedUserDetails} from '../pages/_storeUserLogin'
    import {isEmpty} from '../pages/loginUser'
    
    
    const logout = async () => {
        sessionStorage.clear()
        logedUserRefresh.set({})
        logedUserDetails.set({})
        document.getElementById("profile-popup").hidden = true
        $goto("/",{redirect : "logout"},false)
    }

    function clickOutside(node) {
	    const handleClick = (event) => {
		    if (!node.contains(event.target)) {
			    node.dispatchEvent(new CustomEvent("outclick"));
		    }
	    };
	    document.addEventListener("click", handleClick, true);
	    return {
		    destroy() {
			    document.removeEventListener("click", handleClick, true);
		    },
	    };
    }

</script>
<nav class=" sticky top-0 z-50 rounded-lg shadow-xl opacity-90">
  <div class=" bg-fuchsia-400 max-w-9xl mx-auto px-2 sm:px-6 lg:px-8">
     <div class="relative flex items-center justify-between h-20">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">

           <button type="button" on:click={()=> document.getElementById("mobile-menu").hidden = false}
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-white
              hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" >

              <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16" />
              </svg>

              <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" aria-hidden="true">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M6 18L18 6M6 6l12 12" />
              </svg>
           </button>
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
           <div class="flex-shrink-0 flex items-center">
              <img class="block lg:hidden h-8 w-auto"
                 src="https://www.svgrepo.com/show/118226/conference.svg" alt="dboardLogo">
              <img class="hidden lg:block h-8 w-auto"
                 src="https://www.svgrepo.com/show/118226/conference.svg" alt="dboardLogoBig">
           </div>
           <div class="hidden sm:block sm:ml-6">
              <div class="flex space-x-4">

                 <a href="{$url(" /",false)}"
                    class="bg-sky-400 text-white px-3 py-2 rounded-full text-sm font-medium"
                    aria-current="page">Home</a>

                 <a href="{$url(" /about",false)}"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>

              </div>
           </div>
        </div>
        <div
           class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

           <div class="ml-3 relative">

              {#if isEmpty($logedUserRefresh) && sessionStorage.logedUserRefresh == null}
            <div>
             <button type="button" class="bg-blue-500 hover:bg-blue-400 text-white font-medium py-1.5 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded text-xs"
             on:click="{$goto("/login",{},false)}">
                 Sign in
             </button>
             <button type="button" class="bg-violet-500 hover:bg-violet-400 text-white font-medium py-1.5 px-2 border-b-4 border-violet-700 hover:border-violet-500 rounded text-xs"
             on:click="{$goto("/register",{},false)}">
                 Join
             </button>
            </div>
           {:else}
           <div class="my-2 text-sm border-collapse rounded-lg bg-slate-400 text-center border-indigo-400 hover:border-green-500 hover:bg-green-400">
             <h4 class="text-center px-1 py-1 text-white">{JSON.parse(sessionStorage.userDetails).username}</h4>
           </div>
           <div class="flex justify-center">
               <button type="button" on:click={() =>  document.getElementById("profile-popup").hidden = false} class="bg-gray-400 flex text-sm rounded-full " id="user-menu-button">
                  <img class="h-8 w-8 rounded-full" src="https://www.svgrepo.com/show/216236/user-profile.svg" alt="Profile">
               </button>
            </div>
   
           {/if}
           
 
          
           <div hidden id="profile-popup" class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
           use:clickOutside on:outclick={ () => document.getElementById("profile-popup").hidden = true} >
            
             <a href="#" class="block px-4 py-2 text-sm text-gray-700"  id="user-menu-item-0">Your Profile</a>
             <a href="#" class="block px-4 py-2 text-sm text-gray-700"  id="user-menu-item-1">Settings</a>
             <a class="block px-4 py-2 text-sm text-gray-700"  id="user-menu-item-2" on:click="{logout}">Sign out</a>
           </div>
         </div>
       </div>
     </div>
   </div>
   
  
   <div hidden  class="sm:hidden bg-fuchsia-300 rounded-xl text-center "id="mobile-menu"
   use:clickOutside on:outclick={ () => document.getElementById("mobile-menu").hidden = true}>
       <hr>
     <div class="px-2 pt-2 pb-3 space-y-1 flex">
       <a href="{$url("/",false)}" class=" flex-inital w-32 bg-sky-300 text-white block px-3 py-2 rounded-full text-base font-medium" aria-current="page">Home</a>
 
       <a href="{$url("/about",false)}" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
 
      
     </div>
   </div>
</nav>